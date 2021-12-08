const {scrap} = require('../utils/scrap')

const scrapper = async() =>{
    const data = await scrap("https://www.tutellus.com/buscador/jquery/cursos")
    return data
}
scrapper().then(dad=>console.log(dad))

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
const users = (req, res) => {
    res.render('users', { title: 'Express' });
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


module.exports  = {
    landing,
    signup,
    login,
    favorites,
    profile,
    users,
    dashboard,
    recoverpsw,
    index
}