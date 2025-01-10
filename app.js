const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const catalogRoutes = require('./routes/catalog');

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/gcr', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useFindAndModify: false,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', catalogRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
