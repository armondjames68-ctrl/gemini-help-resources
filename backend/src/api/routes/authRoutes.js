const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  res.status(501).json({ message: 'User registration - Not implemented yet' });
});

router.post('/login', (req, res) => {
  res.status(501).json({ message: 'User login - Not implemented yet' });
});

module.exports = router;