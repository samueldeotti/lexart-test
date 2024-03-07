"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoginModel_1 = __importDefault(require("../database/models/LoginModel"));
class SignupModel {
    constructor() {
        this.model = LoginModel_1.default;
    }
    async createUser(username, password) {
        const user = await this.model.create({ username, password });
        return user;
    }
}
exports.default = SignupModel;
