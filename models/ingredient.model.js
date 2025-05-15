const mongoose = require("mongoose");

const Ingredient = mongoose.model("Ingredient", { name: String });

module.exports = { Ingredient };
