//**AQUI CREO LA CONEXION A LA BBDD DE MONGO Y EXPORTO EL MODULO**/
const mongoose = require("mongoose");

//process.env.DATABASE_URL */const DATABASE_URL = "mongodb://localhost:27017/fakeshop";
mongoose.connect("mongodb+srv://rooot:root@scrapapp.sloal.mongodb.net/ScrapColection", 
{ useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));///En el caso de error
db.once("open", () => console.log("connection to MongoDb established")); //En caso de conexion Ok 

/*Exportacion del modulo*/
module.exports = mongoose;