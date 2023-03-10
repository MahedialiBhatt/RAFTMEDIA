const messageService = require("../service/messageService");

async function getMessages(req, res) {
  try {
    const messages = await messageService.getMessages();
    res.send({ message: "Success", storedMessages: messages });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

module.exports = { getMessages };
