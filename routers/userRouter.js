const {Router} = require('express');
const {userController} = require('../controllers/userController');
<<<<<<< HEAD
const {checkToken} = require("../checkToken");

=======
>>>>>>> init-project

const userRouter = new Router();

module.exports = {userRouter};

<<<<<<< HEAD
userRouter.get('/', checkToken,userController.getAll);
userRouter.get('/:id', checkToken,userController.getByID);
userRouter.post('/',userController.add);
userRouter.put('/:id', checkToken,userController.update);
userRouter.delete('/:id', checkToken,userController.delete);
=======
userRouter.get('/', userController.getAll);
userRouter.get('/:id', userController.getByID);
userRouter.post('/',userController.add);
userRouter.put('/:id', userController.update);
userRouter.delete('/:id', userController.delete);
>>>>>>> init-project
