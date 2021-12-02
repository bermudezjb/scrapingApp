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

