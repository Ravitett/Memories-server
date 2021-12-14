const {Router} = require('express');
const {memoryController} = require('../controllers/memoryController');

const memoryRouter = new Router();

module.exports = {memoryRouter};

memoryRouter.get('/',memoryController.getAll);
memoryRouter.get('/:id',memoryController.getByID);
memoryRouter.post('/',memoryController.add);
memoryRouter.put('/:id',memoryController.update);
memoryRouter.delete('/:id',memoryController.delete);
