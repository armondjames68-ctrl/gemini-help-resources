const Conversation = require('../../models/Conversation');
const geminiService = require('../../services/geminiService');
const resourceService = require('../../services/resourceService');

exports.sendMessage = async (req, res) => {
  try {
    const { message, conversationId } = req.body;
    const userId = req.userId;

    if (!message || message.trim().length === 0) {
      return res.status(400).json({ error: 'Message cannot be empty' });
    }

    const isCrisis = await geminiService.checkForCrisis(message);
    if (isCrisis) {
      return res.json({
        message: 'I notice you might be in crisis. Please reach out to a crisis counselor.',
        crisisResources: {
          phone: '988 (Suicide & Crisis Lifeline)',
          text: 'Text HOME to 741741',
          chat: 'https://suicidepreventionlifeline.org/chat'
        }
      });
    }

    let conversation;
    if (conversationId) {
      conversation = await Conversation.findById(conversationId);
    } else {
      conversation = new Conversation({ userId, title: message.substring(0, 50) });
    }

    const categories = await geminiService.extractResourceCategories(message);
    const aiResponse = await geminiService.generateResponse(
      message,
      conversation.messages,
      { userCategory: 'youth', location: 'general' }
    );

    let resources = [];
    if (categories.length > 0) {
      resources = await resourceService.recommendResources(categories);
    }

    conversation.messages.push(
      { role: 'user', content: message },
      {
        role: 'assistant',
        content: aiResponse.message,
        resources: resources.map(r => ({
          resourceId: r._id,
          title: r.title,
          category: r.category,
          match_score: 1.0
        }))
      }
    );

    conversation.metadata.category = categories[0] || null;
    conversation.metadata.needs = categories;
    await conversation.save();

    res.json({ conversationId: conversation._id, message: aiResponse.message, resources });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const conversations = await Conversation.find({ userId }).sort({ updatedAt: -1 });
    res.json(conversations);
  } catch (error) {
    console.error('Get history error:', error);
    res.status(500).json({ error: 'Failed to get conversation history' });
  }
};

exports.deleteConversation = async (req, res) => {
  try {
    const { conversationId } = req.params;
    await Conversation.findByIdAndDelete(conversationId);
    res.json({ message: 'Conversation deleted' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: 'Failed to delete conversation' });
  }
};
