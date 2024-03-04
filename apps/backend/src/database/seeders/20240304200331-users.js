'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('users', 
    [
      {
        username: 'John Doe',
        email: 'johndoe@email.com',
        password: 'John123!',
      },
      {
        username: 'Mike Wazowski',
        email: 'mikewazowski@email.com',
        password: 'Mike123#',
      },
    ], {});
  },

  async down (queryInterface) {
     await queryInterface.bulkDelete('users', null, {});
  }
};
