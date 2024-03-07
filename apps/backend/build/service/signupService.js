"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoginModel_1 = __importDefault(require("../models/LoginModel"));
const SignupModel_1 = __importDefault(require("../models/SignupModel"));
class SignupService {
    constructor(signupModel = new SignupModel_1.default(), loginModel = new LoginModel_1.default()) {
        this.signupModel = signupModel;
        this.loginModel = loginModel;
    }
    async createUser(username, password) {
        const userExists = await this.loginModel.findByUsername(username);
        if (userExists)
            return { status: 'UNAUTHORIZED', data: { message: 'User already exists' } };
        await this.signupModel.createUser(username, password);
        return { status: 'SUCCESSFUL', data: { message: 'User created' } };
    }
}
exports.default = SignupService;
