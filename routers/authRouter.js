const {Router} = require('express');
const {authController} = require('../controllers/authController');
const {checkToken,checkIfManager} = require("../services/checkToken");

const authRouter = new Router();

module.exports = {authRouter};

authRouter.get('/istoken',checkToken, authController.isToken);
authRouter.get('/isadmin',checkToken, checkIfManager, authController.isAdmin);
authRouter.post('/login',authController.login);
authRouter.post('/register',authController.register);
