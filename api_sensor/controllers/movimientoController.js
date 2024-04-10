const Movimiento = require('../models/Sensor');

// Controlador para obtener un movimiento por su ID
exports.getMovimientoById = async (req, res) => {
  const id = req.params.id;
  try {
    const movimiento = await Movimiento.findByPk(id);
    if (!movimiento) {
      return res.status(404).json({ message: 'Movimiento no encontrado' });
    }
    res.json(movimiento);
  } catch (error) {
    console.error('Error al buscar el movimiento en la base de datos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
