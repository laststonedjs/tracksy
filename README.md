# 📦 TRACKSY - Inventory Management App

A full-stack inventory management application built with **Next.js**, **Node.js**, **PostgreSQL**, **Prisma**, **TailwindCSS**, **Redux**, **Recharts**, and **Material UI**.  
The project provides dashboards, product tracking, sales and purchase summaries, and data visualization.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/username/repo-name.git
cd repo-name
```
### 2.Backend setup (/server)
Navigate to the server folder:
```bash
cd server
npm install
```
Start the backend development server:
```bash
npm run dev
```
### 3.Frontend setup (/client)
Navigate to the client folder:
```bash
cd client
npm install
```
Start the frontend development server:
```bash
npm run dev
```
<h1> 🗄️ Database & Prisma</h1>
<p>This project uses Prisma ORM with PostgreSQL. <br />
To work with the database, use the following commands inside the /server folder:</p>

# Generate Prisma client
```bash
npx prisma generate
```

# Create and run migrations
```bash
npx prisma migrate dev --name init
```

# Seed the database with initial data
```bash
npm run seed
```
<h2>🛠️ Tech Stack</h2>
<ul>
  <li><strong>Frontend:</strong> Next.js, TailwindCSS, Redux Toolkit, Recharts, Material UI</li>
  <li><strong>Backend:</strong> Node.js with Express</li>
  <li><strong>Database:</strong> PostgreSQL with Prisma ORM</li>
  <li><strong>Others:</strong> Helmet, Morgan, CORS</li>
</ul>







