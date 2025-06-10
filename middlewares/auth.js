const jsonwebtoken = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { User } = require("../models/user.model");

const auth = async (req, res, next) => {
  // Recoger el token del header Authorization
  const token = req.headers.authorization;
  // Si no hay token => 401
  if (!token) {
    res.status(401).send({msg: "Missing auth header"});
    return;
  }
  // Verificar token con jwt secret
  let payload;
  try {
    payload = jsonwebtoken.verify(token, JWT_SECRET);
  } catch (error) {
    res.status(401).send({msg: "Invalid auth header"});
  }
  // Obtener el userId del payload
  const userId = payload.userId;
  // Prevenir edge case: Find de ese user by userId
  const user = await User.findById(userId);
  if (!user) {
    res.status(401).send({msg: "Invalid user"}); // EDGE CASE
    return;
  }
  // Guardo user en la request
  // para recogerlo en los controllers y asi
  // identificar al usuario que hizo la request
  req.user = user;
  next();
};

module.exports = { auth };
