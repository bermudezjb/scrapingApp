var express = require('express');
var router = express.Router();
let controller = require('../controllers/index')
let users = require('../controllers/auth')
let jwt = require('jsonwebtoken')
const accessTokenSecret = 'somerandomaccesstoken';
const refreshTokenSecret = 'somerandomstringforrefreshtoken';
let refreshTokens = [];


/* GET home page. */
router.get('/', controller.landing);

router.get('/signup', controller.signup);

router.get('/login', controller.login);

router.get('/recoverpsw', controller.recoverpsw);

router.get('/favorites', controller.favorites);

router.get('/profile', controller.profile);

router.get('/users', controller.users);

router.get('/dashboard', controller.dashboard);

module.exports = router;



router.post('/login', (req, res) => {
    // read username and password from request body
    const { username, password } = req.body; 
    console.log({ username, password })

    // filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // generate an access token
        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' });
        const refreshToken = jwt.sign({ username: user.username, role: user.role }, refreshTokenSecret);

        refreshTokens.push(refreshToken);

        res.json({
            accessToken,
            refreshToken
        });
    } else {
        res.send('Username or password incorrect');
    }
});




