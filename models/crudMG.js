const mongoose = require('../utils/mgBBDD')//Importo la conexion de la BBDD 
const express = require('express')
const app = express()


app.use(express.json())

//AQUI REALIZARE LOS CRUD INICIALES DE MONGO 
//const url = "mongodb+srv://rooot:root@scrapapp.sloal.mongodb.net/ScrapColection";

const objectSchema = {
    _id: mongoose.Schema.Types.ObjectId,
        name: String,
        author: String,
        author2: String,
        duration: String,
        rating: String,
        price: String,
        img : String,
        url : String

};

// // Crear el esquema
const ScrapSchemaMG = mongoose.Schema(objectSchema);

 const User = mongoose.model('User2', ScrapSchemaMG);





// // let scrap1 = {
// //     _id: new mongoose.Types.ObjectId(),
// //         name: "Mongo + Angular",
// //         author: "Alejandro",
// //         author2: "Matin",
// //         duration: '3M',
// //         rating: '*****',
// //         price: '200$',
// //         img : 'https://dev-res.thumbr.io/libraries/75/66/35/01/lib/1618990629233_2.jpg?size=230x115s&ext=jpg',
// //         url : 'https://www.tutellus.com/tecnologia/desarrollo-web/creacion-de-api-rest-web-service-con-python-y-mysql-34804'
// };

// let insertScrap = new User (scrap1);

// insertScrap.save(function(err){
//     if (err) throw err;
//     console.log("Inserción correcta");
//    // mongoose.disconnect();
// });




//HAGO GET CURSO Y LE APLICO FUNCION PARA QUE LE DE IGUAL M/m Y BUSQUE POR PALABRAS DENTRO DEL CURSO
const getcurselike  = async (a) => {
    console.log("*******************");
    console.log(a);
    // Consulta 
    // Los datos
    // del producto correspondiente
    let data;
    try{
            data = await User.find(({name: { $regex: '.*' + a + '.*',$options:'i' } }), '-__v').limit(2);
           return data
    }catch(err){
        console.log(err)
    }finally{

        //mongoose.disconnect();
        console.log("conexion Cerrada")
    }
}

//Prueba de llamada a cursos que contienen HTML

//getcurselike('CSS').then(data=>console.log(data))

//Exporto el modulo para utilizar en otros scripts.

const entriesmg = {
    getcurselike,
    User
}

//getcurselike("html");

module.exports = entriesmg;