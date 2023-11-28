'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bananas = sequelize.define('Bananas', {
    tipo: DataTypes.STRING
  }, {});
  Bananas.associate = function(models) {
    // associations can be defined here
  };
  return Bananas;
};