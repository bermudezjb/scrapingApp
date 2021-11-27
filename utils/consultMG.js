const mongoose = require('../utils/mgBBDD')

const product = {
    getProductById,
    getAllProducts,
    createProduct
}

module.exports = product;

// Pruebas de ejecución
//getAllProducts().then(data=>console.log(data))
//getProductById(2).then(data=>console.log(data))

/*
const newProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}

createProduct(newProduct).then(data=>console.log(data))
*/