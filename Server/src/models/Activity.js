const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Activity', {
    id: { // Aquí utilizamos "Id" con la primera letra en mayúscula
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dificulty: {
      type: DataTypes.DECIMAL,
      validate: {
        min: 1,
        max: 5,
      }
    },
    seasson: {
      type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
      allowNull: false
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: true,
    }, 
  }, 
    
  { 
    timestamps: false, 
    freezeTableName: true 
  });
};