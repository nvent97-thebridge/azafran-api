const express = require("express");
const router = express.Router();

const { auth: authenticate } = require("../middlewares/auth");

const {
    getRecipes,
    createRecipe,
    getUserRecipes,
} = require("../controllers/recipe.controller");

router.get("/", getRecipes);
router.get("/user", authenticate, getUserRecipes);
router.post("/", authenticate, createRecipe);

module.exports = router;
