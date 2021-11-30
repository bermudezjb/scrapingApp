const mongoose = require('../utils/mgBBDD')
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
        created: Date

};

// Crear el esquema
const ScrapSchemaMG = mongoose.Schema(objectSchema);

const User = mongoose.model('User', ScrapSchemaMG);

//HAGO EL CREATE 

let scrap1 = {
    _id: new mongoose.Types.ObjectId(),
        name: "Angular + HTML",
        author: "jalid",
        author2: "Acdhi",
        duration: "3 M",
        created: Date.now()
};

let insertScrap = new User (scrap1);

insertScrap.save(function(err){
    if (err) throw err;
    console.log("Inserción correcta");
    mongoose.disconnect();
});



//HAGO GET CURSO Y LE APLICO FUNCION PARA QUE LE DE IGUAL M/m Y BUSQUE POR PALABRAS DENTRO DEL CURSO
const getcurselike  = async (a) => {
    console.log("*******************");
    console.log(a);
    // Consulta 
    // Los datos
    // del producto correspondiente
    let data;
    try{
        if(1==1){
            data = await User.find(({name: { $regex: '.*' + a + '.*',$options:'i' } }), '-__v');
            console.log(data)
        }
    }catch(err){
        console.log(err)
    }finally{

        mongoose.disconnect();
        console.log("conexion Cerrada")
    }
}

//Prueba de llamada a cursos que contienen HTML

getcurselike('CSS').then(data=>console.log(data))

//Exporto el modulo para utilizar en otros scripts.

module.exports = User;

