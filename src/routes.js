const { Router } = require('express');
const ClientController = require('./app/controllers/ClientController');

const router = Router();

router.get(
  '/clients',
  (request, response, next) => {
    request.appId = 'MeuAppId';
    next();
  },
  ClientController.index,
);
router.get('/clients/:cpf', ClientController.show);
router.delete('/clients/:cpf', ClientController.delete);
router.post('/clients', ClientController.store);
router.put('/clients/:cpf', ClientController.update);

module.exports = router;
