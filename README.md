# GCR Prototype

Welcome to the GCR Prototype! This project demonstrates the implementation of the **Global Catalog Registry (GCR)** in combination with seller integration, designed to improve product search and management efficiently. This documentation will guide you through the setup, features, and architecture of the project.

## Table of Contents
- [Introduction](#introduction)
- [What's our Solution](#whats-our-solution)
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

 
## What's our Solution

The **Global Catalog Registry (GCR)** for ONDC is designed to provide a unified and decentralized solution for product management, search, and seller integration. The core principle of this system is to store **unique products** exactly once with **static data** in the GCR, while dynamically displaying seller-specific data directly on the buyer's app. This approach ensures consistency of product data across the platform, while still allowing flexibility for sellers to manage their own product details.

### Data Storage in GCR

- **Unique Product Entries**: Each product in the GCR is represented by a unique entry containing essential, static product data. This includes:
  - Product Name
  - Product Description
  - Brand
  - Category
  - Specifications (e.g., color, weight, dimensions)
  - Images
  - Other metadata that is common across all sellers offering that product.

- **Static Product Data**: The static product data is stored in the GCR and remains consistent across all platforms. This data serves as the baseline for all products listed in the registry.

### Dynamic Seller-Specific Data

- **Seller-Specific Data**: Sellers store their own specific data related to the products they offer, including:
  - Price
  - Stock Availability
  - Fulfillment Method
  - Shipping Details
  - Other seller-specific information.

  This data is stored directly in the seller’s database, separate from the GCR.

### Data Flow and Integration

1. **Product Data in GCR**: When a product is added to the GCR, only the **static data** (common to all sellers) is stored in the GCR database. This ensures that all buyers accessing the platform see the same core information about the product.

2. **Dynamic Data in Buyer App**: Instead of pulling dynamic seller-specific data into the GCR, the dynamic data is directly retrieved and shown on the **buyer's app**. When a buyer searches for a product or views a product page, the buyer’s app queries the seller’s database for real-time data, such as:
   - Product price
   - Stock availability
   - Fulfillment details

3. **Real-Time Data Fetching**: The integration between the GCR and seller databases happens in real-time via **API calls** from the buyer’s app to the seller’s database. This ensures that the buyer sees the most current and accurate seller-specific data, without relying on the GCR to store or manage it.

This architecture enables the GCR to act as a centralized repository for static product data, while allowing sellers to manage their dynamic data independently. It results in a scalable and efficient system that delivers accurate product information to the buyer in real-time, while maintaining flexibility and decentralization in the marketplace.


## Features

1. **Search Products**
   - Users can search for products by name.

2. **Dynamic Seller Integration**
   - Display dynamic seller-specific information such as pricing, stock availability, and fulfillment details in real-time on the buyer app.
   - Each seller’s unique data is fetched directly from their own database when a buyer views a product.

3. **AI-Powered Product Description**
   - Auto-generation of product descriptions using AI-powered APIs to provide engaging and informative content for each product.

4. **Interactive Frontend**
   - Responsive, modern user interface built using React.
   - Features include loaders, dropdowns, and seamless navigation to ensure an interactive and user-friendly experience.

5. **Product Page**
   - Displays static product information (stored in GCR) alongside dynamic seller-specific details.
   - Sellers’ offers are shown on individual product pages, allowing buyers to compare prices and other details.

6. **Backend API Integration**
   - CRUD operations for managing products in the GCR, allowing for easy addition, modification, and deletion of product entries.
   - Seller-specific data is dynamically fetched and displayed through API calls without being stored in the GCR.

7. **Seller Management Interface**
   - Sellers can manage their product offers, update pricing, stock levels, and fulfillment options via their own backend interface.

8. **Product Categorization**
   - Products are organized by categories to make searching and browsing easier for buyers.


## Technologies Used

### Backend
- **Node.js**: A JavaScript runtime used for building scalable server-side applications. It is lightweight, efficient, and enables the handling of multiple API requests concurrently.
- **Express**: A minimal and flexible Node.js web application framework that provides robust features for web and mobile applications, simplifying routing and middleware integration.
- **MongoDB**: A NoSQL database used to store the static product data in the GCR. It is a document-oriented database, ideal for handling large-scale data with flexibility.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, used to define models and interact with MongoDB collections in an easy-to-use manner.

### Frontend
- **React.js**: A JavaScript library for building user interfaces, enabling the development of dynamic, single-page applications with reusable components.
- **Vite**: A build tool for modern web projects, designed to offer fast builds and hot module replacement for a smooth development experience.
- **Axios**: A promise-based HTTP client for making requests from the frontend to the backend API. It is used to retrieve data and interact with the seller databases for dynamic data.

### Deployment
- **Vercel**: A platform for deploying both frontend and backend applications. It provides continuous deployment, scaling, and a seamless developer experience.

### API
- **REST APIs**: The system relies on RESTful APIs to enable communication between the GCR, seller databases, and the buyer's app, ensuring smooth data retrieval and synchronization.




## Prototype's Directory Structure

```
GCR ONDC/
├── backend/
│   ├── models/
│   │   ├── Product.js
│   │   └── SellerDatabase.js
│   ├── node_modules/   
│   ├── routes/
│   │   ├── catalogRoutes.js
│   │   └── sellerRoutes.js
│   ├── .env
│   ├── app.js
│   ├── package.json
│   └── vercel.json
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── SellerDetails.jsx
│   │   ├── css/
│   │   │   ├── Footer.css
│   │   │   ├── HomePage.css
│   │   │   ├── Navbar.css
│   │   │   ├── ProductPage.css
│   │   │   ├── SearchResultsPage.css
│   │   │   └── SellerDetails.css
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── ProductPage.jsx
│   │   │   └── SearchResultsPage.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── vercel.json
│   └── vite.config.js
│
├── .gitignore
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

# API Endpoints

## Search APIs (For Buyers)
These APIs are used to retrieve product details, including static and dynamic data, for buyers.

### 1. **Search Products**
**`GET /api/products/search`**  
- **Query Parameters**:
  - `name` (optional): Search by product name (case-insensitive).
  - `category` (optional): Filter by category ID.  
- **Description**: Searches products in the GCR by name or category.  
- **Response**: List of matching products with static details.  

---

### 2. **Get Dynamic Product Details**
**`GET /api/sellers/products/:product_id`**  
- **Path Parameters**:
  - `product_id`: The unique ID of the product.  
- **Description**: Fetches seller-specific dynamic details like price, stock, and fulfillment details for a product.  
- **Response**: List of sellers offering the product, excluding out-of-stock sellers.  

---

## GCR Management APIs (For Admins/Sellers)
These APIs are used to add, update, and delete data in the GCR.

### 1. **Add or Update a Product**
**`POST /api/products`**  
- **Request Body**:
  ```json
  {
    "product_id": "string",
    "name": "string",
    "description": "string",
    "mrp": "number",
    "category_id": "string",
    "attributes": { "key": "value" },
    "tags": ["string"],
    "images": ["url"],
    "sellers": [
      {
        "seller_id": "string",
        "price": "number",
        "stock_quantity": "number",
        "fulfillment_details": "string"
      }
    ]
  }
### 2. **Delete a Product**
**`DELETE /api/products/:product_id`**  
- **Path Parameters**:
  - `product_id`: The unique ID of the product to delete.  
- **Description**: Deletes a product and all its associated data from the GCR.  
- **Response**: Confirmation of product deletion.  

---

### 3. **Delete a Seller from a Product**
**`DELETE /api/products/:product_id/sellers/:seller_id`**  
- **Path Parameters**:
  - `product_id`: The unique ID of the product.
  - `seller_id`: The unique ID of the seller to remove.  
- **Description**: Removes a seller from a specific product in the GCR.  
- **Response**: Updated product details without the removed seller.  

---

### 4. **Get All Sellers for a Product**
**`GET /api/products/:product_id/sellers`**  
- **Path Parameters**:
  - `product_id`: The unique ID of the product.  
- **Description**: Retrieves all sellers offering a specific product from the GCR.  
- **Response**: List of sellers with their details.  

---

### 5. **Update Catalog by Seller**
**`PUT /api/products/:seller_id`**  
- **Path Parameters**:
  - `seller_id`: The unique ID of the seller.  
- **Request Body**: Fields to update in the seller's catalog.  
- **Description**: Updates a seller’s catalog details in the GCR.  
- **Response**: The updated catalog details.  

---

### 6. **Delete a Catalog by Seller**
**`DELETE /api/products/:seller_id`**  
- **Path Parameters**:
  - `seller_id`: The unique ID of the seller.  
- **Description**: Deletes the entire catalog associated with a specific seller.  
- **Response**: Confirmation of catalog deletion.  




# Additional Resources
## 1. **Demo Video**  
🎥 [Watch the Demo Video](https://example.com/demo-video)

## 2. **Live Deployment**  
🌐 [Access the Deployed Application on Vercel](https://thenoobs-gcr.vercel.app)

## 3. **Presentation (PPT or PDF)**  
📄 [See the Project's Presentation](https://example.com/project-presentation)

---

Thanks for reading !
