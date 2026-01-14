# Project Setup

This repository contains a **backend** (Node.js + TypeScript + Express) and a **frontend** (React + Vite + Tailwind CSS).

## Prerequisites

* Node.js (recommended: LTS)
* npm

---

## Backend

### 1. Environment variables

Create a `.env` file in the `backend` folder.

Use `.env.example` as a reference:

```bash
cd backend
cp .env.example .env
```

Fill in the required values in `.env`.

---

### 2. Install dependencies

```bash
cd backend
npm install
```

---

### 3. Build and run

```bash
npm run dev
```

This will:

* Compile TypeScript
* Start the server from `dist/index.js`

---

## Frontend

The frontend is built with **Vite**, which includes **hot reload** out of the box.

### 1. Install dependencies

```bash
cd frontend
npm install
```

---

### 2. Run the development server

```bash
npm run dev
```

The app will start with hot reloading enabled.

---

### Styling

The frontend uses **Tailwind CSS** for styling.

Tailwind documentation:
[https://tailwindcss.com/docs](https://tailwindcss.com/docs)

---

## Scripts overview

### Backend

* `npm run build` – Compile TypeScript
* `npm run start` – Run compiled app
* `npm run dev` – Build and run

### Frontend

* `npm run dev` – Start Vite dev server (hot reload)
* `npm run build` – Build for production
* `npm run preview` – Preview production build

---

## Notes

* `node_modules` is ignored and should not be committed
* Make sure the backend is running before using frontend features that depend on it

---

If you want, I can also:

* Add a **project structure** section
* Add **API / env variable descriptions**
* Tighten it for **hackathon / internal use**
