const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  const categories = await Category.insertMany([
    { name: "Mint" },
    { name: "Damaged" },
    { name: "Slightly Played" },
  ]);

  console.log("categories seeded");

  const products = await Product.insertMany([
    {
      name: "Charizard",
      description: "OG Card",
      price: "200.99",
      quantity: "1",
      image:
        "https://res.cloudinary.com/kevin-cloud/image/upload/v1634056651/Pokemon/Charizard_syg1ky.jpg",
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
