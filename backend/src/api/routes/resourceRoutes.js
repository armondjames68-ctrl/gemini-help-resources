const express = require('express');
const resourceController = require('../controllers/resourceController');

const router = express.Router();

router.get('/', resourceController.getResources);
router.get('/featured', resourceController.getFeatured);
router.get('/category/:category', resourceController.getByCategory);
router.get('/location/search', resourceController.searchByLocation);
router.get('/:id', resourceController.getById);

module.exports = router;
