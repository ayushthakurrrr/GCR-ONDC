require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Import Routes
const catalogRoutes = require('./routes/catalogRoutes');
const sellerRoutes = require('./routes/sellerRoutes');

// MongoDB Connection
mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGOBD_NAME}`)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


const app = express();

app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/products', catalogRoutes);
app.use('/api/sellers', sellerRoutes);

// Start the Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
