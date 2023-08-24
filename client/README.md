# CRM Clientes App

Esta aplicación es un sistema CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar clientes. Permite llevar un registro de los detalles de los clientes y realizar operaciones básicas en una interfaz intuitiva.

## Características

- **Crear**: Agregar nuevos clientes a la base de datos.
- **Leer**: Ver una lista de clientes existentes con información relevante.
- **Actualizar**: Editar los detalles de un cliente existente.
- **Eliminar**: Eliminar clientes de la base de datos.

## Tecnologías Utilizadas

### Frontend

- **React**: Biblioteca de JavaScript para construir interfaces de usuario interactivas.
- **@mui/material**: Framework de diseño y componentes Material-UI para una interfaz atractiva y coherente.
- **@mui/icons-material**: Iconos Material-UI para mejorar la experiencia visual.
- **sweetalert2**: Biblioteca para mostrar mensajes de alerta y diálogos emergentes de manera elegante.

### Backend

- **Express**: Marco de aplicación web para construir el servidor backend.
- **MySQL**: Sistema de gestión de base de datos relacional.
- **bcrypt**: Biblioteca para el hash y la verificación de contraseñas.

## Instalación

1. Clona el repositorio: `git clone https://github.com/TuUsuario/tu-repositorio.git`
2. Instala las dependencias frontend: `cd frontend && npm install`
3. Instala las dependencias backend: `cd backend && npm install`

## Configuración

1. Configura la base de datos: Edita los detalles de conexión en `backend/config/db.js`.
2. Inicia el servidor backend: `cd backend && node server.js`
3. Inicia la aplicación frontend: `cd frontend && npm start`

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras errores o mejoras posibles, por favor abre un "issue" o envía una solicitud de extracción.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
