const mongoose = require('../utils/mgBBDD')

//AQUI REALIZARE LOS CRUD INICIALES DE MONGO 
//const url = "mongodb+srv://rooot:root@scrapapp.sloal.mongodb.net/ScrapColection";

const objectSchema = {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        name: String,
        author: String,
        author2: String,
        duration: String
    }, 
    created: Date, 

};
const userSchema = mongoose.Schema(objectSchema);

let User = mongoose.model('User', userSchema);
let scrap1 = {
    _id: new mongoose.Types.ObjectId(),
    name: {
        name: "Full Stack con Alejandro",
        author: "Alejandro",
        author2: "Reyes",
        duration: "3 M"
    }, 
    created: Date.now()
};
let insertScrap = new User (scrap1);

insertScrap.save(function(err){
    if (err) throw err;
    console.log("Inserción correcta");
    mongoose.disconnect();
});
