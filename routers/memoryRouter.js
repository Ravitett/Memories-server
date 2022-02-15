const {Router} = require('express');
const {memoryController} = require('../controllers/memoryController');
const {checkToken} = require("../services/checkToken");

const memoryRouter = new Router();

module.exports = {memoryRouter};

memoryRouter.get('/',memoryController.getAll);
memoryRouter.get('/byId/:id',memoryController.getByID);
memoryRouter.get('/badwords/', checkToken,memoryController.getBadWords);
memoryRouter.get('/manager/', checkToken, memoryController.getAllManeger);
memoryRouter.get('/byuser/:userid', checkToken, memoryController.getAllByUserID);
memoryRouter.get('/badwords', checkToken,memoryController.getBadWords);
memoryRouter.post('/', checkToken, memoryController.add);
memoryRouter.put('/status/:id', checkToken, memoryController.changeStatus);
memoryRouter.put('/chat/:id', checkToken, memoryController.chatSaveMsg);
memoryRouter.put('/:id', checkToken, memoryController.update);
memoryRouter.delete('/:id', checkToken, memoryController.delete);
