'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Projects',[
      {
        title : 'Housework',
        desc: 'Housework required for my house.',
        owner_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : 'Taskmaster',
        desc: 'Taskmaster app tasks.',
        owner_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {})
  }
};
