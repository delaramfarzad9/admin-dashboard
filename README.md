# Admin Dashboard

A responsive admin dashboard built with React, Vite, and Tailwind CSS. It includes an overview page with summary cards and charts, and a product management page with table and grid views.

## Features

- Overview with summary cards, charts, and quick-look lists of recent products and users
- Product management: table and grid views, search, filtering, pagination, add, edit, remove, and visibility toggle
- Sidebar navigation and topbar with search, notifications, and profile
- Client-side routing with a shared dashboard layout
- Local storage persistence via custom hooks

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Router 7](https://reactrouter.com/)
- [Recharts](https://recharts.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Paginate](https://github.com/AdeleD/react-paginate)

## Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start the development server |
| `npm run build`   | Create a production build    |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run ESLint                   |

## Project Structure

```
src/
├── Components/   # Shared UI (layouts, modal, table)
├── Pages/        # Route pages (Home, Products, Tickets, Users, Comments)
├── features/     # Feature modules (Sidebar, Topbar, Summaries, ProductsTable, ...)
├── hooks/        # Custom hooks (useLocalStorage, useTitle)
├── data/         # Static data and constants
├── utils/        # Helper functions
└── routes.jsx    # Router configuration
```

## Routes

| Path        | Page     | Status      |
| ----------- | -------- | ----------- |
| `/`         | Home     | Available   |
| `/products` | Products | Available   |
| `/tickets`  | Tickets  | Coming soon |
| `/users`    | Users    | Coming soon |
| `/comments` | Comments | Coming soon |
