'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks',[
      {
        title: 'Clean bathroom',
        desc: 'Clean the toilet. Clean the shower. Do the cat litter. Wash the floor.',
        frequency: 'weekly',
        project_id: 1,
        assigned: 2,
        creator: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Clean the kitchen',
        desc: 'Wipe down counters. Wipe down stove. Load dishwasher. Sweep floor. Wash floor.',
        frequency: 'weekly',
        project_id: 1,
        assigned: 2,
        creator: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Walk the cat',
        desc: 'Walking the cat, cause the dog is dead. Feet dont move like they did back then.',
        frequency: 'weekly',
        project_id: 1,
        assigned: 2,
        creator: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Complete backend',
        desc: 'Complete backend non-auth branch and deploy via AWS or heroku.',
        frequency: 'once',
        project_id: 2,
        assigned: 2,
        creator: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Complete frontend',
        desc: 'Complete frontend non-auth branch and deploy via AWS or heroku.',
        frequency: 'once',
        project_id: 2,
        assigned: 2,
        creator: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
