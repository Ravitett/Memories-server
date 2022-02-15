const {Router} = require('express');
const {userController} = require('../controllers/userController');

const userRouter = new Router();

module.exports = {userRouter};

userRouter.get('/', userController.getAll);
userRouter.get('/:id', userController.getByID);
userRouter.post('/',userController.add);
userRouter.put('/:id', userController.update);
userRouter.delete('/:id', userController.delete);
