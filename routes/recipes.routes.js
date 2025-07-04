const express = require("express");
const { getRecipes, getUserRecipes, createRecipe } = require("../controllers/recipe.controller");
const router = express.Router();

router.get("/user", getUserRecipes);
router.get("/", getRecipes);
router.post("/", createRecipe);

module.exports = router;
