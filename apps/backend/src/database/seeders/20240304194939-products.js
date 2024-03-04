/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',
    [
      {
        name: 'Xiaomi Redmi 9',
        brand: 'Xiaomi',
        model: 'Redmi 9',
        price: 10000,
        color: 'red',
      },
      {
        name: 'Xiaomi Redmi 9',
        brand: 'Xiaomi',
        model: 'Redmi 9',
        price: 10050,
        color: 'white',
      },
      {
        name: 'Iphone 14 Pro',
        brand: 'Iphone',
        model: '14 Pro',
        price: 30000,
        color: 'silver',
      },
      {
        name: 'Iphone 14 Pro',
        brand: 'Iphone',
        model: '14 Pro',
        price: 30100,
        color: 'gold',
      },
      {
        name: 'Xiaomi Redmi 7',
        brand: 'Xiaomi',
        model: 'Redmi 7',
        price: 8000,
        color: 'blue',
      },
    ],

    {});

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

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
    
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
