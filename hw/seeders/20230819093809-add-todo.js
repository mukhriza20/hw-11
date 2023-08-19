'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("todo", 
    [
      {
        title: "slebew",
        createAt: new Date(),
        updateAt: new Date()
      },

      {
        title: "wakwaw",
        createAt: new Date(),
        updateAt: new Date()
      },

      {
        title: "apaantuh",
        createAt: new Date(),
        updateAt: new Date()
      }
    ],
    {returning: true}
    ,{})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todo", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
