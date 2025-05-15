const { Ingredient } = require("../models/ingredient.model");

const createIngredient = async (req, res) => {
  // Crear un ingrediente en mi db
  const createdIngredient = await Ingredient.create();
  res.send(createdIngredient);
};

module.exports = { createIngredient };
