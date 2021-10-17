const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Mint" },
    { name: "Damaged" },
    { name: "Slightly Played" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

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

  await User.deleteMany();

  await User.create({
    username: "test",
    email: "test@email.com",
    password: "password",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  console.log("users seeded");

  process.exit();
});
