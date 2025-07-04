const express = require("express");
const { getRecipes, getUserRecipes, createRecipe } = require("../controllers/recipe.controller");
const router = express.Router();

router.get("/user", getUserRecipes);
router.get("/", getRecipes);
router.post("/", createRecipe);

router.post("/", createRecipes);

module.exports = router;
