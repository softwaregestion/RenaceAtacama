# Renace Atacama (web)

Sitio web construido con Vite + React + TypeScript + Tailwind + shadcn/ui.

## Requisitos

- Node.js (recomendado: LTS)
- npm

## Desarrollo local

```sh
npm install
npm run dev
```

## Build de producción

```sh
npm run build
npm run preview
```

## Tests y lint

```sh
npm test
npm run lint
```

## Deploy

El proyecto es un SPA (React Router). Si se despliega en Netlify/Vercel u otro hosting estático, debe configurarse fallback a `index.html` para rutas del lado del cliente.
