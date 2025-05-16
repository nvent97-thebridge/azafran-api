const express = require("express");
const router = express.Router();

const { createIngredient } = require("../controllers/ingredient.controller");

router.post("/", createIngredient);

router.patch("/:id", (req, res) => {
  // Actualizar un ingrediente
  res.send("Patch ingredient");
});

router.delete("/:id", (req, res) => {
  // Eliminar un ingrediente
  res.send("Delete ingredient");
});

router.get("/", (req, res) => {
  // Obtener todas los ingredientes de un usuario
  // [{}]
  res.send("Get all ingredients");
});

module.exports = router;
