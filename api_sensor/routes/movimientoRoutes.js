const express = require('express');
const movimientoController = require('../controllers/movimientoController');

const router = express.Router();

// Definir la ruta para obtener un movimiento por su ID
router.get('/:id', movimientoController.getMovimientoById);



module.exports = router;
