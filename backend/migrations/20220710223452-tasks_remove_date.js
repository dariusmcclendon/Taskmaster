'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Tasks','dueDate')
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.addColumn('Tasks','dueDate',{
    type : Sequelize.DATE,
    defaultValue : new Date()
   })
  }
};
