'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Tasks','frequency',{
      type: Sequelize.INTEGER,
      defaultValue : 1
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('Tasks','frequency')
  }
};
