'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.removeColumn('Tasks','frequency')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Tasks','frequency',{
      type: Sequelize.ENUM()
    })
  }
};
