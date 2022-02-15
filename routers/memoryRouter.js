const {Router} = require('express');
const {memoryController} = require('../controllers/memoryController');
<<<<<<< HEAD
const {checkToken} = require("../checkToken");
=======
>>>>>>> init-project

const memoryRouter = new Router();

module.exports = {memoryRouter};

memoryRouter.get('/',memoryController.getAll);
<<<<<<< HEAD
memoryRouter.get('/maneger/', checkToken ,memoryController.getAllManeger);
memoryRouter.get('/aprove/:id', checkToken ,memoryController.aproveMemory);
memoryRouter.get('/:id',memoryController.getByID);
memoryRouter.post('/', checkToken,memoryController.add);
memoryRouter.put('/:id', checkToken,memoryController.update);
memoryRouter.delete('/:id', checkToken,memoryController.delete);
=======
memoryRouter.get('/byId/:id',memoryController.getByID);
memoryRouter.get('/badwords/',memoryController.getBadWords);
memoryRouter.get('/manager/', memoryController.getAllManeger);
memoryRouter.get('/byuser/:userid', memoryController.getAllByUserID);
memoryRouter.get('/badwords',memoryController.getBadWords);
memoryRouter.post('/', memoryController.add);
memoryRouter.put('/status/:id', memoryController.changeStatus);
memoryRouter.put('/chat/:id', memoryController.chatSaveMsg);
memoryRouter.put('/:id', memoryController.update);
memoryRouter.delete('/:id', memoryController.delete);
>>>>>>> init-project
