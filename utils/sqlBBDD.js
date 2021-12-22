const { Pool } = require('pg');

const pool = new Pool({
    user: 'eclkveco',
    host: 'tai.db.elephantsql.com',
    database: 'eclkveco',
    password: 'F1PJGENL8Q-hcXCjVKklydwOP--I89WG'
//Apikey : 613a2d25-7e54-47a5-a1b4-0b2ca41b0cfd (por si se debe usar)
})

module.exports = pool;

/*
const mongoose = require('../utils/mgBBDD')

const product = {
    getProductById,
    getAllProducts,
    createProduct
}

module.exports = product;

*/