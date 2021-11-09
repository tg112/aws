'use strict';

module.exports = (sequelize, DataTypes) => {
  const Alert = sequelize.define("Alert",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          mas: "タイトルは必須です"
        }
      }
    },
    service_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 3,
        notEmpty: {
          args: true,
          mas: "サービスIDは必須です"
        }
      }
    },
    start_date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          mas: "公開開始日は必須です"
        }
      }
    },
    close_date: DataTypes.STRING,
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          mas: "ラベルは必須です"
        }
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          mas: "参照先URLは必須です"
        }
      }
    },
    information_id: DataTypes.STRING,
    information_html: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'alert',
    underscored: true,
  });
    
  return Alert;
};