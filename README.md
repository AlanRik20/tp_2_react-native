
# TP2 - React + Node.js

Este proyecto es una aplicación simple que valida un nombre ingresado por el usuario mediante un backend en Node.js y muestra un mensaje de bienvenida si es válido. Se divide en dos partes: **frontend (ReactJS)** y **backend (Node.js + Express)**.

---

## Estructura del Proyecto

```
TP-2/
├── backend/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   └── App.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
```

---

## Requisitos Previos

- Node.js y npm instalados (https://nodejs.org)
- Git (opcional, para clonar el repositorio)

---

## Instalación y Ejecución

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd TP-2
```

### 2. Iniciar el Backend

```bash
cd backend
npm install
npm run dev
```

> El servidor backend se ejecutará en `http://localhost:3000`

### 3. Iniciar el Frontend

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```

> El frontend se ejecutará en `http://localhost:5173`

---

## 🔄 ¿Cómo funciona?

1. El usuario ingresa su nombre en el campo de texto.
2. Al hacer clic en el botón:
   - Se valida el nombre con `GET /validar/:nombre`.
   - Si es válido, se muestra un saludo con `GET /saludo/:nombre`.
3. El mensaje aparece en pantalla.

---

## Dependencias

### Backend
- express
- cors

### Frontend
- react
- react-dom
- vite

