/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', 
    [
      {
        username: 'JohnDoe',
        password: 'John123!',
      },
      {
        username: 'MikeWazowski',
        password: 'Mike123#',
      },
    ], {});
  },

  async down(queryInterface) {
     await queryInterface.bulkDelete('users', null, {});
  },
};
