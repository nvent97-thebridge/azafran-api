const express = require("express");
const { getRecipes } = require("../controllers/recipe.controller");
const router = express.Router();

router.get("/", getRecipes);

module.exports = router;
