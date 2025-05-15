const express = require("express");
const router = express.Router();
//TODO: Refactor this
const { Ingredient } = require("../models/ingredient.model");

router.post("/", async (req, res) => {
  // Crear un ingrediente en mi db
  const createdIngredient = await Ingredient.create({name: "tomate"})
  res.send(createdIngredient);
});

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
