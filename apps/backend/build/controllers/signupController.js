"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
const signupService_1 = __importDefault(require("../service/signupService"));
class SignupController {
    constructor(signupService = new signupService_1.default()) {
        this.signupService = signupService;
    }
    async createUser(req, res) {
        const { username, password } = req.body;
        const { status, data } = await this.signupService.createUser(username, password);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
}
exports.default = SignupController;
