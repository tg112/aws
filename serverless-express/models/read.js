'use strict';

module.exports = (sequelize, DataTypes) => {
  const Read = sequelize.define("Read",
  {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alert_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    }, {
    sequelize,
    modelName: 'read',
    underscored: true,
  });
    
  return Read;
};