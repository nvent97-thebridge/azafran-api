const { Ingredient } = require("../models/ingredient.model");

const createIngredient = async (req, res) => {
  // #swagger.tags = ['Ingredients']
  // #swagger.summary = 'Para crear ingredientes'
  // Crea un ingrediente en mi db
  try {
    const createdIngredient = new Ingredient({...req.body, userId: req.user._id});
    await createdIngredient.save();
    res.send(createdIngredient);
  } catch (error) {
    // TODO: Improve error handling
    console.log(error);
    res.status(404).send({ error: error.name, message: error._message });
  }
};

module.exports = { createIngredient };
