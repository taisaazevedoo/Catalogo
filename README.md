# Catálogo Virtual Grupo Seday

Catálogo institucional do Grupo Seday (Seday Equipamentos, Avapex Transportes e Innomach).

## Stack

- **React 18** com **Vite 6**
- **React Router DOM** (rotas para cada empresa)
- **Tailwind CSS** (build via PostCSS)
- **react-helmet-async** (título/meta por página)
- **GitHub Actions** — deploy automático via FTP para a Hostinger

## Estrutura do projeto

```
Catalogo/
├── public/
│   ├── img/            # Logos, fotos de clientes e fundo do hero
│   └── .htaccess       # Fallback de rotas para SPA
├── src/
│   ├── components/     # Header, Footer, Hero, About, Companies, Services, Segments, ClientsMarquee
│   ├── hooks/
│   │   └── useReveal.js  # Animação de revelação ao rolar (IntersectionObserver)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CompanyPage.jsx   # Layout compartilhado das páginas de empresa
│   │   ├── SedayEquipamentos.jsx
│   │   ├── AvapexTransportes.jsx
│   │   └── Innomach.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/workflows/deploy.yml
├── index.html
├── vite.config.js
└── package.json
```

## Como executar localmente

```bash
npm install
npm run dev
```

Acesse em `http://localhost:5173`

## Build para produção

```bash
npm run build
```

Os arquivos otimizados são gerados em `dist/`.

## Deploy

Deploy automático via **GitHub Actions** a cada push na branch `main`, usando FTP para a Hostinger (`SamKirkland/FTP-Deploy-Action`).

Secrets necessários no repositório (Settings → Secrets and variables → Actions):

- `FTP_SERVER`
- `FTP_USERNAME`
- `FTP_PASSWORD`
