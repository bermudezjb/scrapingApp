var express = require('express');
var router = express.Router();
let controller = require('../controllers/index')
//let users = require('../controllers/auth')
const bcryptjs= require('bcryptjs')
let jwt = require('jsonwebtoken')
const accessTokenSecret = 'somerandomaccesstoken';
const refreshTokenSecret = 'somerandomstringforrefreshtoken';
let refreshTokens = [];
let authorization = require('../middleware/authorization')
let authorizationAdmin = require('../middleware/authorizationAdmin')
let controllerSql = require('../controllers/ctrlSql')
const crudSql=require('../models/crudSql')

/* GET home page. */
router.get('/', controller.landing);

router.get('/signup', controller.signup);

router.get('/login', controller.login);

router.get('/recoverpsw', controller.recoverpsw);

router.get('/favorites', controller.favorites);

router.get('/profile', controller.profile);

router.get('/users', controller.users);

router.get('/dashboard',authorization, controller.dashboard);

router.get('/admin',authorizationAdmin, controller.dashboard);

module.exports = router;

router.post('/signup',controllerSql.dataentry); 

router.post('/login', async (req, res) => {

    // read username and password from request body
    const {username,password} = req.body

    const users = await crudSql.getAllUserSistem()
    const usersAdmin = await crudSql.getATrueAdmin()

    // filter user from the users array by username and password
    //Con bcryptjs.compareSync comparo la pass actual de la BBDD(haseadas) vs las pass que le paso por el req.body deshaseada
    const user = users.find(u => { return u.username === username && bcryptjs.compareSync(password,u.password)===true });
    const userAdmin = usersAdmin.find( u => { return u.username === username &&  bcryptjs.compareSync(password,u.password)===true });

    if (user) {
        // generate an access token
        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' });
        const refreshToken = jwt.sign({ username: user.username, role: user.role }, refreshTokenSecret);

        refreshTokens.push(refreshToken);
        return res  
                .cookie("access_token", accessToken, 
                {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                })
                .status(200)
                .json({ message: "Logged in successfully User 😊 👌" });

    } else  if (userAdmin) {
        console.log('Es Admin')
        // generate an access token
        const accessToken = jwt.sign({ username: userAdmin.username, role: userAdmin.role }, accessTokenSecret, { expiresIn: '20m' });
        const refreshToken = jwt.sign({ username: userAdmin.username, role: userAdmin.role }, refreshTokenSecret);

        refreshTokens.push(refreshToken);
        return res
                .cookie("access_token", accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                })
                .status(200)
                .json({ message: "Logged in successfully ADMIN 😊 👌" });

    }else {
        res.send('Username or password incorrect ADMIN');
    }
        // res.json({
        //     accessToken,
        //     refreshTokens
        // });
});




