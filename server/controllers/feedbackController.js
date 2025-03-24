const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createFeedback = async (req, res) => {
  const { message, userId } = req.body;

  const feedback = await prisma.log.create({
    data: {
      message,
      userId,
    },
  });

  res.json(feedback);
};