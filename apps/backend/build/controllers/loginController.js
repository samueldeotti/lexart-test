"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
const loginService_1 = __importDefault(require("../service/loginService"));
class UserController {
    constructor(userService = new loginService_1.default()) {
        this.userService = userService;
    }
    async getUserInfo(req, res) {
        const { username, password } = req.body;
        const { status, data } = await this.userService.getUserInfo(username, password);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
}
exports.default = UserController;
