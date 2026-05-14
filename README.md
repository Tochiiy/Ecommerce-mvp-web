# 🛍️ Ecommerce MVP Web

A React + Vite ecommerce storefront with product browsing, cart management, and checkout flow.

## 🚀 Live Demo

This project can be hosted on Render as a static site.

## ✨ Features

- 🛒 Browse products and add items to cart
- 🧾 Checkout summary with quantity controls
- 🔐 Authentication with signup/login
- 💾 Cart persistence using localStorage
- ⚡ Fast Vite-powered frontend

## 🛠️ Tech Stack

- **Frontend:** React 19, JavaScript
- **Routing:** React Router DOM
- **Forms:** React Hook Form
- **State:** React Context API
- **Build Tool:** Vite

## 📦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm

### Install and Run Locally

```bash
git clone https://github.com/Tochiiy/Ecommerce-mvp-web.git
cd Ecommerce-mvp-web
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Ecommerce-mvp-web/
├── public/                  # Static assets and favicon
├── src/
│   ├── components/          # Reusable UI components
│   ├── context/             # Auth and cart context providers
│   ├── Data/                # Product data utility
│   ├── pages/               # App pages and routes
│   ├── App.jsx              # Root app component
│   ├── main.jsx             # React entry point
│   └── App.css              # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Deploy to Render

1. Go to [Render](https://render.com) and create a new **Static Site**.
2. Connect your GitHub account and choose this repository: `Tochiiy/Ecommerce-mvp-web`.
3. Use the branch: `development`.
4. Set the build command to:

```bash
npm install
npm run build
```

5. Set the publish directory to:

```bash
dist
```

6. If your app uses client-side routing, add a rewrite rule from `/` to `/index.html`.

Once deployed, Render will build the React app and publish the generated `dist` folder.

## 📌 Git Push Commands

```bash
git add .
git commit -m "Update README and apply app fixes"
git push origin development
```

## ❤️ Notes

- The app is ready for static deployment.
- If you want to use a custom domain, configure it in Render after deployment.
