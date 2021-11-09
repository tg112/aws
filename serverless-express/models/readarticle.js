'use strict';

module.exports = (sequelize, DataTypes) => {
  const ReadArticle = sequelize.define("ReadArticle",
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
    modelName: 'readArticle',
    underscored: true,
  });
    
  return ReadArticle;
};