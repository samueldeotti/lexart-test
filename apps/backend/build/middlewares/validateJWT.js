"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
function validateJWT(req, res, next) {
    var _a;
    const bearerToken = req.header('Authorization');
    if (!bearerToken) {
        res.status(401).json({ message: 'Token not found' });
        return;
    }
    console.log('enoutr');
    const token = bearerToken.split(' ')[1];
    try {
        const decoded = jwt.verify(token, (_a = process.env.JWT_SECRET) !== null && _a !== void 0 ? _a : 'jwt_secret');
        const { username } = decoded;
        req.username = username;
        next();
    }
    catch (error) {
        res.status(401).json({ message: 'Expired or invalid token' });
        return;
    }
}
exports.default = validateJWT;
