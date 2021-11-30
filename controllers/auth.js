const express = require('express');
const jwt = require('jsonwebtoken');
const { modelNames } = require('mongoose');

const app = express();

const accessTokenSecret = 'somerandomaccesstoken';
const refreshTokenSecret = 'somerandomstringforrefreshtoken';


const users = [
    {
        username: 'Christian',
        password: '1234',
        role: 'admin'
    }, {
        username: 'bornando',
        password: '4321',
        role: 'member'
    }
]
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

module.exports = users;

