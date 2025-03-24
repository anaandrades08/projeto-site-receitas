const express = require("express");
const cors = require("cors");
const prisma = require("@prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const prismaClient = new prisma.PrismaClient();

app.use(cors());
app.use(express.json());

// Rota de cadastro de usuário
app.post("/api/register", async (req, res) => {
  const { email, password, name } = req.body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prismaClient.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  res.json(user);
});

// Rota de login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await prismaClient.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.status(401).json({ error: "Senha incorreta" });
  }

  const token = jwt.sign({ userId: user.id }, "sua-chave-secreta", {
    expiresIn: "1h",
  });

  res.json({ token });
});

// Rota de cadastro de receita
app.post("/api/recipes", async (req, res) => {
  const { title, description, ingredients, userId } = req.body;

  const recipe = await prismaClient.recipe.create({
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
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});