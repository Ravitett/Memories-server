const {Router} = require('express');
const {authController} = require('../controllers/authController');

const authRouter = new Router();

module.exports = {authRouter};

authRouter.post('/login',authController.login);
authRouter.post('/register',authController.register);
authRouter.put('/changepassword/:id', authController.changepassword);
authRouter.get('/logout', authController.logout);
