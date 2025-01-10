const express = require('express');
const router = express.Router();
const Catalog = require('../models/catalog');

// Insert a new catalog
router.post('/catalog', async (req, res) => {
  try {
    const catalog = new Catalog(req.body);
    const savedCatalog = await catalog.save();
    res.status(201).json(savedCatalog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a catalog by ID
router.put('/catalog/:id', async (req, res) => {
  try {
    const updatedCatalog = await Catalog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCatalog) return res.status(404).json({ message: 'Catalog not found' });
    res.json(updatedCatalog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a catalog by ID
router.delete('/catalog/:id', async (req, res) => {
  try {
    const deletedCatalog = await Catalog.findByIdAndDelete(req.params.id);
    if (!deletedCatalog) return res.status(404).json({ message: 'Catalog not found' });
    res.json({ message: 'Catalog deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Search catalogs (based on buyer search intent)
router.post('/catalog/search', async (req, res) => {
  const { category, priceRange, location } = req.body;
  const filter = {};

  if (category) filter['items.category_id'] = category;
  if (priceRange) filter['items.price.value'] = { $gte: priceRange.min, $lte: priceRange.max };
  if (location) filter['items.location_id'] = location;

  try {
    const catalogs = await Catalog.find(filter);
    res.json(catalogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Return response for a specific catalog
router.get('/catalog/:id', async (req, res) => {
  try {
    const catalog = await Catalog.findById(req.params.id);
    if (!catalog) return res.status(404).json({ message: 'Catalog not found' });
    res.json(catalog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
