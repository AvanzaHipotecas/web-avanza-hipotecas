# web-avanza-hipotecas
Página web de Avanza Hipotecas

## Despliegue

El despliegue automático vía GitHub Actions (`.github/workflows/deploy.yml`) está
actualmente **roto**: Hostinger bloquea las IPs de los runners de GitHub y el paso
de FTP-Deploy-Action da timeout. Mientras eso no se resuelva, el despliegue a
producción se hace de forma manual:

```bash
npx vite build
node ftp-deploy-manual.mjs
```

- `npx vite build` genera el sitio en `dist/`.
- `node ftp-deploy-manual.mjs` sube el contenido de `dist/` por FTP a Hostinger
  (`82.25.113.220`, usuario `u777232261.avanzahipotecas.es`, puerto 21,
  directorio remoto `/public_html/`). Sobrescribe los archivos coincidentes
  pero no borra nada que ya exista en el servidor y no esté en `dist/`.

Requiere tener configurada la variable de entorno `AVANZA_FTP_PASSWORD` con la
contraseña FTP. El script no contiene ninguna credencial: la lee en tiempo de
ejecución.
