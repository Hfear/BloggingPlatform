'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {



 await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Hannah",
          email: "hannah@fake.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

const users = await queryInterface.sequelize.query(`SELECT id FROM users`);
const userId = users[0][0].id;

await queryInterface.bulkInsert(
  "comments",
  [
    {
      message:"I felt very when you made that decison to really do that thing",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  {}
);

await queryInterface.bulkInsert(
  "posts",
  [
    {
      title: "top 10 of all time",
      content:"the most of ever for real",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: userId,

    },
    {
      title: "top 11 of all time",
      content:"the most of ever for real",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: userId,

    },
    {
      title: "top 12 of all time",
      content:"the most of ever for real",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: userId,

    },
  ],
  {}
);

  },



  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("posts", null, {});
    await queryInterface.bulkDelete("comments", null, {});

  }
};
