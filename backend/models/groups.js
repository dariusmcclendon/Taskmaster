'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Groups.init({
    id:
      { type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false

      },
    project_id: 
      { type : DataTypes.INTEGER,
        allowNull : false
      },
    user_id:
      { type : DataTypes.INTEGER,
        allowNull : false
      },
    allow_edit:
    { type : DataTypes.BOOLEAN,
      defaultValue : false
    } 
  }, {
    sequelize,
    modelName: 'Groups',
    tableName: 'Groups',
    timestamps: false
  });
  return Groups;
};