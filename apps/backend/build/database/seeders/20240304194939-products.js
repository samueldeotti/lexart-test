var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const migration = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.bulkInsert('products', [
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
            ], {});
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.bulkDelete('products', null, {});
        });
    },
};
