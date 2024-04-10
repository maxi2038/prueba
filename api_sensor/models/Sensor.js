const { Sequelize, DataTypes } = require('sequelize');
// Crear la instancia de Sequelize
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: '154.56.47.52',
    port: 3001,
    username: 'u196388150_SRT',
    password: 'o5er$1Gw%cBm345',
    database: 'u196388150_SRT'
});

// Definir el modelo para los movimientos
const Movimiento = sequelize.define('Movimiento', {
  // Define los atributos del modelo aquí
  // Por ejemplo:
  id_movimiento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  mensaje: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hora_activacion: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  // Otros atributos...
});

module.exports = Movimiento;
