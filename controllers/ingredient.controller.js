const { Ingredient } = require("../models/ingredient.model");

const createIngredient = async (req, res) => {
  // #swagger.tags = ['Ingredients']
  // #swagger.summary = 'Para crear ingredientes'
  // Crea un ingrediente en mi db
  try {
    const createdIngredient = new Ingredient({
      ...req.body,
      userId: req.user._id,
    });
    await createdIngredient.save();
    res.send(createdIngredient);
  } catch (error) {
    // TODO: Improve error handling
    console.log(error);
    res.status(404).send({ error: error.name, message: error._message });
  }
};

const getIngredients = async (req, res) => {
  // req.user.id es el id del usuario que hizo la request
  // obtengo los ingredientes del usuario que hizo la request
  const ingredients = await Ingredient.find({ userId: req.user.id });
  const parsedingredients = ingredients.map((ingredient) => {
    return {
      id: ingredient.id,
      name: ingredient.name,
      quantity: ingredient.quantity,
      unit: ingredient.unit,
      createdAt: ingredient.createdAt,
    };
  });
  res.send(parsedingredients);
};

module.exports = { createIngredient, getIngredients };
