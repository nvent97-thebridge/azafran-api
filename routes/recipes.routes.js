const express = require("express");
const { getRecipes, createRecipe } = require("../controllers/recipe.controller");
const router = express.Router();

router.get("/", getRecipes);
router.post("/", createRecipe);

router.post("/", createRecipes);

module.exports = router;
