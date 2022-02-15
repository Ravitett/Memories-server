const {Router} = require('express');
const {memoryController} = require('../controllers/memoryController');
const {checkToken,checkIfManager} = require("../services/checkToken");

const memoryRouter = new Router();

module.exports = {memoryRouter};

memoryRouter.get('/',memoryController.getAll);
memoryRouter.get('/memory/:memoryid',memoryController.getByID);
memoryRouter.get('/manager/', checkToken, checkIfManager, memoryController.getAllForManeger);
memoryRouter.get('/manager/:memoryid', checkToken, checkIfManager, memoryController.getByIdForManeger);
memoryRouter.get('/user/', checkToken, memoryController.getAllForUser);
//memoryRouter.get('/user/:userid/:memoryid', checkToken, memoryController.getAllByUserID);
memoryRouter.get('/badwords', checkToken,memoryController.getBadWords);
memoryRouter.post('/', checkToken, memoryController.add);
memoryRouter.put('/status/:id', checkToken, memoryController.changeStatus);
memoryRouter.put('/chat/:id', checkToken, memoryController.chatSaveMsg);
memoryRouter.put('/:id', checkToken, memoryController.update);
memoryRouter.delete('/:id', checkToken, memoryController.delete);
