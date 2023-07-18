'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn("comments", "UserId", {
      type: Sequelize.INTEGER,
      references:{
        model:"users", //actually wants table name
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })
  },

  async down (queryInterface, Sequelize) {
  queryInterface.removeColumn("comments", "UserId")
  }
};
