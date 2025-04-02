"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Game = connection_1.default.define('Game', {
    id: { type: sequelize_1.DataTypes.NUMBER, primaryKey: true },
    title: { type: sequelize_1.DataTypes.STRING },
    description: { type: sequelize_1.DataTypes.STRING },
    start: { type: sequelize_1.DataTypes.DATE },
    end: { type: sequelize_1.DataTypes.DATE },
    league: { type: sequelize_1.DataTypes.STRING },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Game;
