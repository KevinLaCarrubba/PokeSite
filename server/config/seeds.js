const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  const categories = await Category.insertMany([
    { name: "Mint" },
    { name: "Used" },
    { name: "Slightly Played" },
  ]);

  console.log("categories seeded");

  const products = await Product.insertMany([
    {
      name: "Pokemon Card1",
      description: "Card Card Card",
      price: "2.99",
      quantity: "2",
      category: categories[0]._id,
    },
    {
      name: "Card2",
      description: "Cards Cards",
      price: "3.99",
      quantity: "3",
      category: categories[0]._id,
    },
  ]);

  console.log("products seeded");

  await User.create({
    username: "test",
    email: "test@email.com",
    password: "password",
  });

  console.log("users seeded");

  process.exit();
});
