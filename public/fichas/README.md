# Fichas técnicas de sub-servicios

El formulario de cada página de servicio tiene un **dropdown de sub-servicios**.
Al enviar el formulario, se descarga (y a futuro se enviará por correo al lead) la
**ficha técnica** del sub-servicio seleccionado.

## Convención de rutas

Coloca cada PDF en:

```
public/fichas/<slug-del-servicio>/<slug-del-subservicio>.pdf
```

El `<slug>` se genera automáticamente a partir del nombre (minúsculas, sin acentos,
espacios → guiones). Si un archivo no existe, la descarga simplemente no ocurre
(no rompe el formulario).

## Archivos esperados (42)

### integridad-estructural
- evaluacion-de-integridad-estructural-inteligente.pdf
- ndt-avanzado-inspeccion-inteligente-de-activos-criticos.pdf
- medicion-inteligente-de-elongacion-de-pernos.pdf
- auditoria-de-ajuste-de-pernos.pdf
- auditoria-de-calibracion-de-herramientas-de-ajuste.pdf
- inspeccion-phased-array-utpa-de-bridadas.pdf
- inspeccion-integral-de-liners-de-molinos.pdf
- gestion-inteligente-de-revestimientos.pdf
- certificacion-de-tanques-de-recipientes-a-presion.pdf
- certificacion-de-tuberias-de-relaves.pdf
- escaneo-laser-3d.pdf
- paradas-de-planta.pdf

### monitoreo-mantenimiento-predictivo
- monitoreo-de-condicion.pdf
- mantenimiento-predictivo.pdf
- mantenimiento-predictivo-electrico.pdf
- lubricacion.pdf
- machine-learning-predictivo.pdf

### ingenieria-de-confiabilidad
- estrategias-de-mantenimiento.pdf
- readiness-operacional.pdf
- ingenieria-de-confiabilidad.pdf
- analisis-de-criticidad.pdf
- rcm-rca.pdf
- ram.pdf
- gestion-del-riesgo.pdf
- optimizacion-operacional.pdf

### metalurgia-inteligente
- operaciones-metalurgicas.pdf
- laboratorio-especializado.pdf
- caracterizacion-avanzada.pdf
- analitica-y-machine-learning.pdf

### confiabilidad-inteligente
- sensorizacion-remota.pdf
- centro-de-confiabilidad.pdf
- gemelo-digital.pdf
- modelos-machine-learning.pdf
- plataforma-iot.pdf
- analitica-multivariable.pdf

### ingenieria-digital
- aplicaciones-digitales.pdf
- manuales-interactivos-de-operacion-y-mantenimiento.pdf
- plataforma-operacional-digital-portal.pdf
- aplicaciones-con-tecnologia-ra-rv-rx.pdf
- adquisicion-e-integracion-de-datos.pdf

### gestion-de-reparables-criticos
- gestion-comercial-de-reparables.pdf
- qa-qc-de-reparables-criticos.pdf

## Nota sobre el envío por correo

El envío real de la ficha al correo del lead requiere backend/hosting de correo.
Por ahora el formulario valida en frontend y **descarga** la ficha del sub-servicio
seleccionado. Cuando se defina el hosting, se conecta el envío a comercial@relengcorp.com.
