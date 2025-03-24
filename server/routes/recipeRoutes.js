const express = require('express');
const recipeController = require('../controllers/recipeController');

const router = express.Router();

router.post('/recipes', recipeController.createRecipe);
router.get('/recipes', recipeController.listRecipes);

module.exports = router;


