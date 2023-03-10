const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userService = require("../service/userService");
const SECRET_KEY = process.env.SECRET_KEY;
require("dotenv").config();

async function registerUser(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .send({ error: "Bad Request, Missing required field" });
    }

    const userId = await userService.registerUser(username, password);
    const token = jwt.sign({ id: userId, username: username }, SECRET_KEY);
    return res.send({
      message: "User is registered successfully",
      access_token: token,
    });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
}

async function loginUser(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .send({ error: "Bad Request, Missing required field" });
    }
    const user = await userService.getUserByUsername(username);
    if (!user) {
      return res.status(401).send({ error: "Incorrect email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ error: "Incorrect email or password" });
    }
    const token = jwt.sign({ id: user.id, username: username }, SECRET_KEY);
    return res.send({ message: "Logged In", access_token: token });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
}

module.exports = { registerUser, loginUser };
