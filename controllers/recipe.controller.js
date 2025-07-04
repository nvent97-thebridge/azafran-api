const { Recipe } = require("../models/recipe.model");
const { Ingredient } = require("../models/ingredient.model");
const { sendMessage } = require("../services/openai");

const getRecipes = async (req, res) => {
  // #swagger.tags = ['Recipes']
  // #swagger.summary = 'To get AI generated recipes'
  try {
    let { ingredients } = req.query;
    if (!ingredients) {
      res.status(404).send({ msg: "No ingredients passed" });
    }
    if (!Array.isArray(ingredients)) {
      ingredients = [ingredients];
    }
    // ingredients is an array of ids
    const ingredientDocs = await Ingredient.find({ _id: { $in: ingredients } });
    const ingredientNames = ingredientDocs.map((ing) => ing.name);
    const generatedRecipes = await sendMessage(ingredientNames);
    res.send({ recipes: generatedRecipes });
  } catch (error) {
    // TODO: Improve error handling
    console.log(error);
    res.status(404).send({ error: error.name, message: error._message });
  }
};

const createRecipe = async (req, res) => {
  // #swagger.tags = ['Recipes']
  // #swagger.summary = 'To store a recipe into the database'
  try {
    const createdRecipe = new Recipe({
      ...req.body,
      userId: req.user._id,
    });
    await createdRecipe.save();
    res.status(201).send({ msg: "Recipe created" });
  } catch (error) {
    // TODO: Improve error handling
    console.log(error);
    res.status(404).send({ msg: error.name, message: error._message });
  }
};

module.exports = { getRecipes, createRecipe };
