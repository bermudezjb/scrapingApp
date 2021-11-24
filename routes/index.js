var express = require('express');
var router = express.Router();
let controller = require('../controllers/index')

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
