"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Player = connection_1.default.define('Player', {
    id: { type: sequelize_1.DataTypes.NUMBER, primaryKey: true },
    username: { type: sequelize_1.DataTypes.STRING },
    name: { type: sequelize_1.DataTypes.STRING },
    position: { type: sequelize_1.DataTypes.STRING },
    age: { type: sequelize_1.DataTypes.STRING },
    country: { type: sequelize_1.DataTypes.STRING },
    city: { type: sequelize_1.DataTypes.STRING },
    lat: { type: sequelize_1.DataTypes.STRING },
    lon: { type: sequelize_1.DataTypes.STRING },
    team: { type: sequelize_1.DataTypes.STRING },
    team_short: { type: sequelize_1.DataTypes.STRING },
    img: { type: sequelize_1.DataTypes.STRING },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Player;
