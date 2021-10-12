const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Mint' },
        { name: 'Used' }
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Pokemon Card1',
            description: 'Card Card Card',
            price: '2.99',
            quantity: '2',
            category: 'Mint'
        },
        {
            name: 'Card2',
            description: 'Cards Cards',
            price: '3.99',
            quantity: '3',
            category: 'Mint'
        }
    ]);

    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        userName: 'hungyiu1',
        email: 'hungyiu@email.com',
        password: 'password1'
    });

    await User.create({
        userName: 'lukas1',
        email: 'lukas@email.com',
        password: 'password1'
    });

    await User.create({
        userName: 'kevin1',
        email: 'kevin@email.com',
        password: 'password1'
    });

    console.log('users seeded');

    process.exit()
});