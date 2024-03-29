"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoginModel_1 = __importDefault(require("../database/models/LoginModel"));
class UserModel {
    constructor() {
        this.model = LoginModel_1.default;
    }
    async findByUsername(username) {
        const user = await this.model.findOne({ where: { username } });
        if (!user)
            return null;
        return user.dataValues;
    }
}
exports.default = UserModel;
