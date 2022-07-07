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
      { type: DataTypes.ENUM('once','daily','weekly','monthly'),
        defaultValue: 'once'
      },
    dueDate:
      { type: DataTypes.DATE,
        allowNull : false
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

      }
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};