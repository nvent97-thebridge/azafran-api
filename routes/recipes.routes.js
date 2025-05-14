const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Encontrar una receta a partir de 
  // los ingredientes guardados
  // Nombre - Ingredientes - Procedimiento
  res.send("Recipes by saved ingredients");
});

module.exports = router;
