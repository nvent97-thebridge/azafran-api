const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  ingredients: String,
  createdAt: { type: Date, default: Date.now },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = { Recipe };
