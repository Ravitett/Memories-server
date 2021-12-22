const {Router} = require('express');
const {memoryController} = require('../controllers/memoryController');
const {checkToken} = require("../checkToken");

const memoryRouter = new Router();

module.exports = {memoryRouter};

memoryRouter.get('/',memoryController.getAll);
memoryRouter.get('/maneger/', checkToken ,memoryController.getAllManeger);
memoryRouter.get('/aprove/:id', checkToken ,memoryController.aproveMemory);
memoryRouter.get('/:id',memoryController.getByID);
memoryRouter.post('/', checkToken,memoryController.add);
memoryRouter.put('/:id', checkToken,memoryController.update);
memoryRouter.delete('/:id', checkToken,memoryController.delete);
