const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

const encryptPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    req.body.password = hash;
    next();
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const verifyToken = async (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    try {
      const tokenPayload = jwt.verify(
        req.headers.authorization.split(" ")[1],
        SECRET_KEY
      );
      if (!validPayload(tokenPayload)) {
        return res.status(403).send({ message: "Forbidden request" });
      }

      req.body.userid = tokenPayload["id"];
      req.body.username = tokenPayload["username"];
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  } else {
    res.status(403).send({ message: "invalid token or empty token" });
  }
  next();
};

const verifySocketToken = async (socket, next) => {
  const token = socket.handshake.headers.authorization;
  if (token) {
    try {
      const tokenPayload = jwt.verify(token.split(" ")[1], SECRET_KEY);
      if (!tokenPayload) {
        console.error("Invalid token is given");
        return next(new Error("Invalid token"));
      }
      socket.handshake.query.userid = tokenPayload["id"];
      socket.handshake.query.username = tokenPayload["username"];
      return next();
    } catch (err) {
      console.error("Invalid token");
      return next(new Error("Invalid token"));
    }
  } else {
    console.error("Token is not given");
    return next(new Error("token is required"));
  }
};

const validPayload = (payload) => {
  if (!payload) return false;
  if (!("id" in payload)) return false;
  if (!("username" in payload)) return false;
  return true;
};

module.exports = { encryptPassword, verifyToken, verifySocketToken };
