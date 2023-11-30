'use strict';
module.exports = (sequelize, DataTypes) => {
  const Salas = sequelize.define('Salas', {
    nomeSala: DataTypes.STRING,
    turno: DataTypes.STRING
  }, {});
  Salas.associate = function(models) {

    Salas.hasMany(models.Turmas,{
      foreignKey: 'turma_id'
    })
  };
  return Salas;
};