app.post("/api/register", async (req, res) => {
    const { email, password, name } = req.body;
  
    const hashedPassword = await bcrypt.hash(password, 12);
  
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
  
    res.json(user);
  });

  app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await prisma.user.findUnique({
      where: { email },
    });
  
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
  
    const isValid = await bcrypt.compare(password, user.password);
  
    if (!isValid) {
      return res.status(401).json({ error: "Senha incorreta" });
    }
  
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
  
    res.json({ token });
  });