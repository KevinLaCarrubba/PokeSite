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
        "http://res.cloudinary.com/kevin-cloud/image/upload/v1634310020/Charizard.jpg",
      category: categories[0]._id,
    },
    {
      name: "Pikachu",
      description: "The one and only",
      price: "3.99",
      quantity: "3",
      image:
        "http://res.cloudinary.com/kevin-cloud/image/upload/v1634315096/Pikachu.jpg",
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
