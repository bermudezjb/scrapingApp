const express = require('express'),
bodyParser = require('body-parser'),
jwt = require('jsonwebtoken'),
config = require('../utils/config'),
app = express();
// 1
app.set('llave', config.llave);
// 2
app.use(bodyParser.urlencoded({ extended: true }));
// 3
app.use(bodyParser.json());
// 4
app.listen(3000,()=>{
console.log('Servidor iniciado en el puerto 3000') 
});
// 5
app.get('/', function(req, res) {
res.send('Inicio');
});










/*
const express = require('express');
const jwt = require('jsonwebtoken');
const { modelNames } = require('mongoose');
const crudSql=require('../models/crudSql')
const app = express();

const accessTokenSecret = 'somerandomaccesstoken';
const refreshTokenSecret = 'somerandomstringforrefreshtoken';


let refreshTokens = [];

app.use(express.json());

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}

//users ()

module.exports = users;

*/