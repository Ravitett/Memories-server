const {Router} = require('express');
const {memoryController} = require('../controllers/memoryController');

const memoryRouter = new Router();

module.exports = {memoryRouter};

memoryRouter.get('/',memoryController.getAll);
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
