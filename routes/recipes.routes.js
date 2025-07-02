const express = require("express");
const { getRecipes, createRecipes } = require("../controllers/recipe.controller");
const router = express.Router();

router.get("/", getRecipes);

router.post("/", createRecipes);

module.exports = router;
