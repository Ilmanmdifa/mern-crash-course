# Crash Course - MERN Stack Application

This is a full-stack MERN (MongoDB, Express, React, Node.js) application for managing products. It includes a backend API built with Express and MongoDB, and a frontend built with React and Vite.

## Features

- **Backend**:
  - RESTful API for managing products (CRUD operations).
  - MongoDB for database storage.
  - Environment variable support using `dotenv`.

- **Frontend**:
  - React-based UI with Chakra UI for styling.
  - Zustand for state management.
  - Vite for fast development and build.

- **Full-Stack**:
  - Proxy setup for seamless API calls from the frontend to the backend.
  - Production-ready build configuration.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ilmanmdifa/mern-crash-course.git
   cd crash-crash-course

2. Install backend dependencies
   ```bash 
   npm install

3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   cd ..

4. Create a .env file in the root directory and add the following:
   ```bash
   MONGO_URI=your_mongodb_connection_string
   PORT=5000

## Usage
--Development

1. Start the backend server:
   ```bash
   npm run dev

3. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   
5. Open your browser and navigate to http://localhost:5173.

## Technology Used
- Backend: Node.js, Express, MongoDB, Mongoose
- Frontend: React, Chakra UI, Zustand, Vite
- Dev Tools: Nodemon, ESLint

## Folder Structure
```bash
mern-product-store/
├── .gitignore
├── package.json
├── README.md
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── product.controllers.js
│   ├── models/
│   │   └── product.model.js
│   └── routes/
│       └── product.route.js
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── public/
│   │   └── vite.svg
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── components/
│       │   ├── NavBar.jsx
│       │   └── ProductCard.jsx
│       ├── pages/
│       │   ├── CreatePage.jsx
│       │   └── HomePage.jsx
│       └── store/
│           └── product.js
