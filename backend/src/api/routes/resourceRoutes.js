const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(501).json({ message: 'Get all resources - Not implemented yet' });
});

router.post('/search', (req, res) => {
  res.status(501).json({ message: 'Search resources - Not implemented yet' });
});

module.exports = router;