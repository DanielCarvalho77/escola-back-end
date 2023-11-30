const {Router} = require('express');
const SalaController = require('../controllers/SalaController');

const router = Router();

router.post('/salas', SalaController.criaSala);
router.get('/salas', SalaController.pegaTodasSalas);
router.get('/salas/:id', SalaController.pegaUmaSala);
router.put('/salas/:id', SalaController.atualizaSala);
router.delete('/salas/:id', SalaController.apagaSala);

module.exports = router;
