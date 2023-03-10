const User = require("../models/userModel");

async function insertUser(username, encPwd) {
  let userId;
  try {
    const user = await User.create({
      username: username,
      password: encPwd,
    });
    userId = user.id;
  } catch (err) {
    throw err;
  }
  return userId;
}

async function getUserByUsername(username) {
  let userData;
  try {
    const user = await User.findOne({
      where: {
        username: username,
      },
    });
    if (user) userData = user;
  } catch (err) {
    throw err;
  }
  return userData;
}

module.exports = { insertUser, getUserByUsername };
