const {Router} = require('express');
const {userController} = require('../controllers/userController');
const {checkToken} = require("../checkToken");


const userRouter = new Router();

module.exports = {userRouter};

userRouter.get('/', checkToken,userController.getAll);
userRouter.get('/:id', checkToken,userController.getByID);
userRouter.post('/',userController.add);
userRouter.put('/:id', checkToken,userController.update);
userRouter.delete('/:id', checkToken,userController.delete);
