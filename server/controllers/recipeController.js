const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createRecipe = async (req, res) => {
  const { title, description, ingredients, userId } = req.body;

  try {
    const recipe = await prisma.recipe.create({
      data: {
        title,
        description,
        userId,
        ingredients: {
          create: ingredients.map((ing) => ({
            name: ing.name,
            quantity: ing.quantity,
          })),
        },
      },
    });

    res.json(recipe);
  } catch (error) {
    console.error("Erro ao criar receita:", error);
    res.status(500).json({ error: "Erro ao criar receita" });
  }
};

exports.listRecipes = async (req, res) => {
  try {
    const recipes = await prisma.recipe.findMany({
      include: {
        ingredients: true,
        user: true,
      },
    });

    res.json(recipes);
  } catch (error) {
    console.error("Erro ao buscar receitas:", error);
    res.status(500).json({ error: "Erro ao buscar receitas" });
  }
};