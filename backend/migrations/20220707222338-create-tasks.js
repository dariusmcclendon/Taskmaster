'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      task_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      desc: {
        type: Sequelize.TEXT
      },
      frequency: {
        type: Sequelize.ENUM('once','daily','weekly','monthly'),
        defaultValue: 'once'
      },
      dueDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      project_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      assigned: {
        type: Sequelize.INTEGER
      },
      complete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      creator: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tasks');
  }
};