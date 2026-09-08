const express = require('express');
const router = express.Router();

router.get('/:userId', (req, res) => {
  res.status(501).json({ message: 'Get user profile - Not implemented yet' });
});

router.put('/:userId', (req, res) => {
  res.status(501).json({ message: 'Update user profile - Not implemented yet' });
});

module.exports = router;