const express = require('express');
const MesaController = require('./controllers/MesaController');
const EventoController = require('./controllers/EventoController');


const routes = express.Router();  

routes.get('/mesas', MesaController.index);
routes.post('/mesas', MesaController.store);
routes.post('/eventos', EventoController.store);
routes.delete('/excluir/:numMesa', MesaController.delete);


module.exports = routes;