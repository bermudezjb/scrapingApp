const mongoose = require('../utils/mgBBDD')//Importo la conexion de la BBDD 
let userinfo;
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
const ScrapSchemaMG = mongoose.Schema(objectSchema);

const User = mongoose.model('User', ScrapSchemaMG);


function checkAdmin (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return userinfo={
             username : JSON.parse(jsonPayload).username,
             email : JSON.parse(jsonPayload).email,
             id : JSON.parse(jsonPayload).id
        }
  
  };
  

// const {scrap} = require('../utils/scrap')

// const scrapper = async() =>{
//     const data = await scrap("https://www.tutellus.com/buscador/jquery/cursos")
//     return data
// }
// scrapper().then(dad=>console.log(dad))

const landing = (req, res) => {
    res.render('index', { title: 'Express' });
  }

const signup = (req, res) => {
    res.render('signup', { title: 'Express' });
}

const login = (req, res) => {
    res.render('login', { title: 'Express' });
}
const favorites = (req, res) => {
    res.render('favorites', { title: 'Express' });
}
const profile = (req, res) => {
    res.render('profile', { title: 'Express' });
}

const search = (req, res) => {
    res.render('search', { title: 'Express' });
}

const users = (req, res) => {

  checkAdmin(req.cookies.access_token) 
  console.log(checkAdmin(req.cookies.access_token))
  console.log(userinfo.username)

    res.render('users',{username : userinfo.username, email: userinfo.email, id: userinfo.id  } );
}
const dashboard = (req, res) => {
    res.render('dashboard', { title: 'Express' });
}

const recoverpsw = (req, res) => {
    res.render('recoverpsw', { title: 'Express' });
}

const index = (req, res) => {
    res.render('index', { title: 'Express' });
}


const createCourse = (req, res) => {
    res.render('CreateCourse', { title: 'Express' });
}
const createCourseApi = (req, res) => {
    console.log(req.body);
    try{
        new User ( {
            _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                author: req.body.author,
                duration: req.body.duration,
                rating: req.body.rating,
                price: req.body.price,
                img : req.body.img,
                url : req.body.url
        }).save(function(err){
            if (err) throw err;
            console.log("Inserción correcta");
            
        });
    } catch(err){
        console.log(err)
    } finally{
        mongoose.disconnect();
    }
}

const panelAdmin = (req, res) => {
    res.render('panelAdmin', { title: 'Express' });
}

module.exports  = {
    landing,
    signup,
    login,
    favorites,
    profile,
    users,
    dashboard,
    recoverpsw,
    index,
    panelAdmin,
    createCourse,
    createCourseApi
}