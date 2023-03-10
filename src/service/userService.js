const userRepo = require("../repository/userRepo");

async function registerUser(userName, password) {
  return await userRepo.insertUser(userName, password);
}

async function getUserByUsername(userName) {
  return await userRepo.getUserByUsername(userName);
}

module.exports = { registerUser, getUserByUsername };
