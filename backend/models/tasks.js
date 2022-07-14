'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tasks.init({
    task_id:
      { type : DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
    title:
      { type: DataTypes.STRING,
        allowNull: false
      },
    desc:
      { type: DataTypes.TEXT,
      },
    frequency:
      { type: DataTypes.INTEGER,
        defaultValue: 1
      },
      dueDate :
      {
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
    project_id:
      { type: DataTypes.INTEGER,
        allowNull: false
      },
    assigned:
      { type: DataTypes.INTEGER,
        allowNull: false
      },
    complete:
      { type: DataTypes.BOOLEAN,
        defaultValue: false

      },
    creator:
      { type: DataTypes.INTEGER,
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
    modelName: 'Tasks',
    tableName: 'Tasks'
  });
  return Tasks;
};