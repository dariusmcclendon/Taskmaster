'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Projects.init({
    project_id:
      { type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull: false
      },

    title:
      { type :  DataTypes.STRING,
        allowNull: false
      },

    desc:
      { type : DataTypes.TEXT,
        allowNull : true
      },

    owner_id:
      { type : DataTypes.INTEGER,
        allowNull: false
        
      },
      createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
      updatedAt: {
          allowNull: false,
          type: DataTypes.DATE
        }
  }, {
    sequelize,
    modelName: 'Projects',
    tableName: 'Projects',
    timestamps: false
  });
  return Projects;
};