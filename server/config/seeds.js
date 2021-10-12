const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    const categories = await Category.insertMany([
        { name: 'Mint' },
        { name: 'Used' }
    ]);

    console.log('categories seeded');

    const products = await Product.insertMany([
        {   
            _id: 1,
            name: 'Pokemon Card1',
            description: 'Card Card Card',
            price: '2.99',
            quantity: '2',
            category: categories[0]._id,
        },
        {
            _id: 2,
            name: 'Card2',
            description: 'Cards Cards',
            price: '3.99',
            quantity: '3',
            category: categories[0]._id,
        }
    ]);

    console.log('products seeded');


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