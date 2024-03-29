const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(((resolve) => { resolve(value); })); }
    return new (P || (P = Promise))(((resolve, reject) => {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    }));
};
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = {
    up: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
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
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('products', {});
    }),
};
