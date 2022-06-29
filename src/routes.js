const { Router } = require('express');
const ClientController = require('./app/controllers/ClientController');

const router = Router();

router.get('/clients', ClientController.index);
router.get('/clients/:cpf', ClientController.show);
router.delete('/clients/:cpf', ClientController.delete);

module.exports = router;
