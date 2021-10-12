const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Mint' },
        { name: 'Used' },
        { name: 'Worn' },
    ])
});

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {

        }
    ]);

    console.log('Pokemons seeded');

    await User.deleteMany();

    await User.create({
        
    })