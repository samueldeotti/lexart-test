Object.defineProperty(exports, '__esModule', { value: true });
const sequelize_1 = require('sequelize');

exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('products', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            brand: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            model: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: false,
            },
            color: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('products');
    },
};
