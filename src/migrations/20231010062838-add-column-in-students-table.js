'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize){
  await queryInterface.addColumn('Students','bookId',{
    type: Sequelize.INTEGER,
    // allowNull: false,
    references: {
      model: 'Books', //table name
      key: 'id',
   }
  })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('Students','bookId')
  }
};
