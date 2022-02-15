const {Router} = require('express');
const {authController} = require('../controllers/authController');
const {checkToken} = require("../services/checkToken");

const authRouter = new Router();

module.exports = {authRouter};

authRouter.post('/login',authController.login);
authRouter.post('/register',authController.register);
authRouter.put('/changepassword/:id', checkToken, authController.changepassword);
authRouter.get('/logout', checkToken , authController.logout);
