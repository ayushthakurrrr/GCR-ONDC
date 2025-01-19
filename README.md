# GCR Prototype

Welcome to the GCR Prototype! This project demonstrates the implementation of the **Global Catalog Registry (GCR)** in combination with seller integration, designed to improve product search and management efficiently. This documentation will guide you through the setup, features, and architecture of the project.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Architecture](#project-architecture)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Introduction

This prototype integrates GCR functionality with ONDC principles, enabling efficient search, product management, and seller integration. It includes features like:
- A robust backend to handle product and seller data.
- A frontend for seamless user experience, including search, product display, and seller-specific details.

## Features

- **Search Products:** Search products by name.
- **Dynamic Seller Integration:** Fetch dynamic details like pricing, stock, and fulfillment from the seller database.
- **AI-Powered Product Description:** Auto-generate descriptions for products using AI APIs.
- **Interactive Frontend:** Modern design with loaders, dropdowns, and responsive layout.
- **Backend APIs:** Efficient handling of CRUD operations for GCR and seller databases.

## Technologies Used

### Backend
- **Node.js** with **Express**: For server-side logic and API development.
- **MongoDB**: As the database for storing GCR and seller data.
- **Mongoose**: For object modeling.

### Frontend
- **React**: For building the user interface.
- **Vite**: As the build tool for better performance.
- **Axios**: For API calls.

### Deployment
- **Vercel**: For deploying both frontend and backend.

## Project Architecture

```
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── css
│   │   └── App.jsx
│   └── package.json
├── backend
│   ├── models
│   ├── routes
│   ├── app.js
│   └── package.json
├── .env
└── README.md
```

## Installation

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server locally:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env` file in the `backend` directory with the following variables:
```env
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
CORS_ORIGIN=<your-frontend-url>
```

## API Endpoints

### Products API
- **`GET /api/products/search`**
  - Query: `name`, `category`
  - Description: Search products by name or category.

- **`POST /api/products`**
  - Description: Add a product to the GCR.

### Sellers API
- **`GET /api/sellers/products/:product_id`**
  - Description: Fetch seller-specific details for a product.

## Usage

1. **Search Products:** Use the search bar on the homepage to find products by name or category.
2. **View Product Details:** Navigate to the product page to view static and dynamic details.
3. **AI Description:** See an auto-generated product description using AI APIs.
4. **Seller Details:** Explore seller-specific pricing, stock, and fulfillment details.

## Screenshots

### Homepage
![Homepage](https://via.placeholder.com/800x400)

### Product Page
![Product Page](https://via.placeholder.com/800x400)

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push the changes:
   ```bash
   git push origin feature-name
   ```
5. Create a Pull Request.

---

Feel free to reach out if you have any questions or suggestions. Happy coding!
