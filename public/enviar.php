<?php
/* ============================================================
   ENVÍO DE FORMULARIOS — Relengcorp
   Recibe el POST de los formularios (contacto / servicio / postulación),
   valida y envía el correo a comercial@relengcorp.com con PHP mail().
   Requiere hosting con PHP (Apache/cPanel). No funciona en Vercel.
   ============================================================ */

header('Content-Type: application/json; charset=utf-8');

$DEST = 'comercial@relengcorp.com';        // destino de los leads
$FROM = 'comercial@relengcorp.com';        // remitente del dominio (SPF-friendly)

function out($ok, $error = null) {
  http_response_code($ok ? 200 : 400);
  echo json_encode(['ok' => $ok, 'error' => $error], JSON_UNESCAPED_UNICODE);
  exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') out(false, 'Método no permitido.');

// Honeypot anti-spam: si viene lleno es un bot → respondemos OK sin enviar nada.
if (!empty($_POST['website'])) out(true);

function val($k) { return isset($_POST[$k]) ? trim((string) $_POST[$k]) : ''; }

$nombre      = val('nombre');
$email       = val('email');
$telefono    = val('telefono');
$empresa     = val('empresa');
$mensaje     = val('mensaje');
$servicio    = val('servicio');
$subservicio = val('subservicio');
$variant     = val('variant') ?: 'contact';
$acepta      = !empty($_POST['acepta_politica']);

// Validación mínima
if ($nombre === '' || $telefono === '') out(false, 'Faltan datos obligatorios.');
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) out(false, 'Ingresa un correo válido.');
if (!$acepta) out(false, 'Debes aceptar la Política de Protección de Datos.');
// Evita inyección de cabeceras vía nombre/correo
if (preg_match('/[\r\n]/', $nombre . $email)) out(false, 'Datos inválidos.');
// Límite razonable de longitudes
$mensaje = mb_substr($mensaje, 0, 5000);

$tipos = [
  'service' => 'Solicitud de servicio',
  'job'     => 'Postulación de trabajo',
];
$tipo = $tipos[$variant] ?? 'Mensaje de contacto';

// Asunto (codificado en UTF-8 para tildes)
$asuntoTxt = "[Web Relengcorp] $tipo" . ($servicio !== '' ? " — $servicio" : '');
$asunto = '=?UTF-8?B?' . base64_encode($asuntoTxt) . '?=';

// Cuerpo
$l = [];
$l[] = "Tipo: $tipo";
if ($servicio !== '')    $l[] = "Servicio: $servicio";
if ($subservicio !== '') $l[] = "Sub-servicio: $subservicio";
$l[] = "Nombre: $nombre";
$l[] = "Correo: $email";
$l[] = "Teléfono: $telefono";
if ($empresa !== '')     $l[] = "Empresa: $empresa";
if ($mensaje !== '')     $l[] = "Mensaje:\n$mensaje";
$l[] = '';
$l[] = 'Enviado desde relengcorp.com el ' . date('Y-m-d H:i');
$cuerpo = implode("\n", $l);

$fromHeader = "Relengcorp Web <$FROM>";
$replyTo = filter_var($email, FILTER_VALIDATE_EMAIL) ? "$nombre <$email>" : $FROM;

// Adjunto de CV (solo postulación)
$adjuntar = $variant === 'job'
  && isset($_FILES['cv'])
  && $_FILES['cv']['error'] === UPLOAD_ERR_OK
  && is_uploaded_file($_FILES['cv']['tmp_name']);

if ($adjuntar) {
  if ($_FILES['cv']['size'] > 8 * 1024 * 1024) out(false, 'El CV supera los 8 MB.');
  $nombreCv = preg_replace('/[^\w.\- ]/', '_', $_FILES['cv']['name']);
  $contenido = chunk_split(base64_encode(file_get_contents($_FILES['cv']['tmp_name'])));
  $b = md5(uniqid('', true));

  $headers  = "From: $fromHeader\r\n";
  $headers .= "Reply-To: $replyTo\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$b\"\r\n";

  $body  = "--$b\r\n";
  $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
  $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
  $body .= $cuerpo . "\r\n\r\n";
  $body .= "--$b\r\n";
  $body .= "Content-Type: application/octet-stream; name=\"$nombreCv\"\r\n";
  $body .= "Content-Transfer-Encoding: base64\r\n";
  $body .= "Content-Disposition: attachment; filename=\"$nombreCv\"\r\n\r\n";
  $body .= $contenido . "\r\n";
  $body .= "--$b--";

  $ok = @mail($DEST, $asunto, $body, $headers, "-f$FROM");
} else {
  $headers  = "From: $fromHeader\r\n";
  $headers .= "Reply-To: $replyTo\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  $ok = @mail($DEST, $asunto, $cuerpo, $headers, "-f$FROM");
}

if ($ok) out(true);
out(false, 'No se pudo enviar el correo. Intenta nuevamente en unos minutos.');
