const __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    let desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
const __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, 'default', { enumerable: true, value: v });
}) : function (o, v) {
    o.default = v;
});
const __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    const result = {};
    if (mod != null) for (const k in mod) if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const app_1 = __importDefault(require('./app'));
require('dotenv/config');
const config = __importStar(require('../src/database/config/database'));

const PORT = 5432;
const { BASE_USER, BASE_PASSWORD, BASE_DATABASE, BASE_HOST } = process.env;
app_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('BASE_USER:', BASE_USER);
    console.log('BASE_PASSWORD', BASE_PASSWORD);
    console.log('BASE_DATABASE', BASE_DATABASE);
    console.log('BASE_HOST', BASE_HOST);
    console.log(config);
});
