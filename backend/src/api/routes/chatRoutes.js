const express = require('express');
const chatController = require('../controllers/chatController');
const { authenticate } = require('../../middleware/auth');

const router = express.Router();

router.post('/message', authenticate, chatController.sendMessage);
router.get('/history/:userId', authenticate, chatController.getHistory);
router.delete('/:conversationId', authenticate, chatController.deleteConversation);

module.exports = router;
