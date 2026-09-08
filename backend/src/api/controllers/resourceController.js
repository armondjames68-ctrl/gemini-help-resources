const resourceService = require('../../services/resourceService');

exports.getResources = async (req, res) => {
  try {
    const { page = 1, limit = 10, category, searchTerm, tags } = req.query;
    const result = await resourceService.getResources(
      { category, searchTerm, tags },
      parseInt(page),
      parseInt(limit)
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get resources' });
  }
};

exports.getByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { page = 1, limit = 10 } = req.query;
    const result = await resourceService.getByCategory(category, parseInt(page), parseInt(limit));
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get resources by category' });
  }
};

exports.searchByLocation = async (req, res) => {
  try {
    const { longitude, latitude, distance = 50000, category } = req.query;
    if (!longitude || !latitude) {
      return res.status(400).json({ error: 'Longitude and latitude required' });
    }
    const resources = await resourceService.searchByLocation(
      [parseFloat(longitude), parseFloat(latitude)],
      parseInt(distance),
      category ? { category } : {}
    );
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search resources' });
  }
};

exports.getFeatured = async (req, res) => {
  try {
    const { limit = 6 } = req.query;
    const resources = await resourceService.getFeatured(parseInt(limit));
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get featured resources' });
  }
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const resource = await resourceService.getById(id);
    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    res.json(resource);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get resource' });
  }
};
