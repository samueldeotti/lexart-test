/* eslint-disable max-lines-per-function */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      brand: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      model: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      color: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    });  
  },

  async down(queryInterface) {
    await queryInterface.dropTable('products');
  },
};
