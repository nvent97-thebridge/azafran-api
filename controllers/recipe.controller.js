const { Recipe } = require("../models/recipe.model");
const { Ingredient } = require("../models/ingredient.model");
const { sendMessage } = require("../services/openai");

const getRecipes = async (req, res) => {
    try {
        let { ingredients } = req.query;
        if (!ingredients) {
            return res.status(400).send({ msg: "No ingredients passed" });
        }
        if (!Array.isArray(ingredients)) ingredients = [ingredients];

        const docs = await Ingredient.find({ _id: { $in: ingredients } });
        const names = docs.map((ing) => ing.name);
        const generated = await sendMessage(names);
        return res.json({ recipes: generated });
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .send({ error: error.name, message: error.message });
    }
};

const createRecipe = async (req, res) => {
    try {
        const created = new Recipe({
            ...req.body,
            userId: req.user._id,
        });
        await created.save();
        return res.status(201).json({ msg: "Recipe created" });
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .send({ msg: error.name, message: error.message });
    }
};

const getUserRecipes = async (req, res) => {
    try {
        const userId = req.user?._id;
        if (!userId) {
            return res.status(401).send({ msg: "Unauthorized" });
        }
        const userRecipes = await Recipe.find({ userId });
        return res.json({ recipes: userRecipes });
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .send({ error: error.name, message: error.message });
    }
};

module.exports = {
    getRecipes,
    createRecipe,
    getUserRecipes,
};
