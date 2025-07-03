const express = require("express");
const { getRecipes, createRecipe } = require("../controllers/recipe.controller");
const router = express.Router();

router.get("/", getRecipes);
router.post("/", createRecipe);

module.exports = router;
