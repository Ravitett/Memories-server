const {Router} = require('express');
const {userController} = require('../controllers/userController');
const {checkToken,checkIfManager} = require("../services/checkToken");

const userRouter = new Router();

module.exports = {userRouter};

userRouter.get('/', checkToken,checkIfManager ,userController.getAll);
userRouter.get('/:id', checkToken,checkIfManager , userController.getByID);
userRouter.put('/:id', checkToken,checkIfManager , userController.update);
userRouter.delete('/:id', checkToken,checkIfManager , userController.delete);
