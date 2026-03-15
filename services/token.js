import jwt from "jsonwebtoken";

const generateJWTToken = (userId) => {
  const secret = process.env.JWT_SECRET;

  // Agar .env faylida secret bo'lmasa, xato bermasligi uchun tekshiramiz
  if (!secret) {
    throw new Error("JWT_SECRET topilmadi. .env faylini tekshiring!");
  }

  const accessToken = jwt.sign({ userId }, secret, {
    expiresIn: "30d",
  });

  return accessToken;
};

export { generateJWTToken };
