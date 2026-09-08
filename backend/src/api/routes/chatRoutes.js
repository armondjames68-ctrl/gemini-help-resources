const express = require('express');
const router = express.Router();

router.post('/message', (req, res) => {
  res.status(501).json({ message: 'Chat message - Not implemented yet' });
});

router.get('/history/:userId', (req, res) => {
  res.status(501).json({ message: 'Chat history - Not implemented yet' });
});

module.exports = router;