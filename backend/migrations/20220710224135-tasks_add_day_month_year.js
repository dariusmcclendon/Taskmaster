'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Tasks','day',{
      type: Sequelize.INTEGER,
      allowNull: true
    })
    await queryInterface.addColumn('Tasks','month',{
      type: Sequelize.INTEGER,
      allowNull: true
    })
    await queryInterface.addColumn('Tasks','year',{
      type: Sequelize.INTEGER,
      allowNull: true
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Tasks','day')
    await queryInterface.removeColumn('Tasks','month')
    await queryInterface.removeColumn('Tasks','year')
  }
};
