const messageRepo = require("../repository/messageRepo");

async function getMessages() {
  return await messageRepo.getAllMessages();
}

module.exports = { getMessages };
