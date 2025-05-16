const { User } = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const { JWT_SECRET } = require("../config");

const login = async (req, res) => {
  // Recibir username y password
  const { username, password } = req.body;

  // Validar que el username exista
  // Vaidar que el password de ese username sea el mismo
  // que el recibido
  // Generar un token con el userId en el payload .sign()
  // y un jwt secret
};

const register = async (req, res) => {
  // Recibir usuario y password
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(404).send("Missing username or password");
  }
  // Hashear password
  const hashedPassword = bcryptjs.hashSync(password);
  // Guardar usuario en la db
  try {
    const user = new User({ username: username, password: hashedPassword });
    await user.save();
    res.status(201).send("User registered");
  } catch (error) {
    console.log(error);
    if(error.errorResponse.errmsg){
      res.status(500).send(error.errorResponse.errmsg);
    } else {
      res.status(500).send("Unexpected error");
    }
  }
};

module.exports = { login, register };
