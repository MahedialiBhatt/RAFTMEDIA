const Message = require("../models/messageModel");

async function getAllMessages() {
  let resData;
  try {
    const messages = await Message.findAll();
    resData = messages;
  } catch (err) {
    throw err;
  }
  return resData;
}

module.exports = { getAllMessages };
