# Proyecto de Ejecución con Docker Compose

Este proyecto permite ejecutar una aplicación que incluye el backend, frontend y base de datos utilizando Docker Compose.

## Requisitos

-Python: 3.12

-FastAPI: 0.111.0

-TypeScript: 5.4

-React: 18.3.1

-PostgreSQL: 16.3

## Ejecución del Proyecto

Para lanzar la aplicación, sigue estos pasos:

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/LicethYanethFk/hackaton-liceth
   cd hackaton-liceth
   ```

2. **Construir y levantar los servicios:**

   Ejecuta el siguiente comando en la raíz del proyecto:

   ```bash
   docker compose up --build
   ```

   Este comando construirá las imágenes Docker necesarias y levantará los servicios definidos en el archivo `docker-compose.yml`.

3. **Acceder a la aplicación:**

   Una vez que los servicios estén levantados, puedes acceder a la aplicación en tu navegador web en la siguiente URL:

   ```
   http://localhost:3000
   ```

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- `backend/`: Contiene el código del servidor backend.
- `frontend/`: Contiene el código de la aplicación frontend.
- `docker-compose.yml`: Archivo de configuración de Docker Compose.

## Información Adicional

- La base de datos se levanta como un servicio separado y se configura automáticamente según lo definido en el archivo `docker-compose.yml`.

