"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGame = exports.postGame = exports.deleteGame = exports.getGame = exports.getGames = void 0;
const game_model_1 = __importDefault(require("../models/game-model"));
const getGames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gameList = yield game_model_1.default.findAll();
    res.json(gameList);
});
exports.getGames = getGames;
const getGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const game = yield game_model_1.default.findByPk(id);
    if (game)
        res.json(game);
    else
        res.status(404).json({ msg: `No game at id: ${id}` });
});
exports.getGame = getGame;
const deleteGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const game = yield game_model_1.default.findByPk(id);
    if (!game)
        res.status(404).json({ msg: `No game at id: ${id}` });
    else {
        yield game.destroy();
        res.json({ msg: `Deleted game at ${id}` });
    }
});
exports.deleteGame = deleteGame;
const postGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield game_model_1.default.create(body);
        res.json({ msg: `Created game` });
    }
    catch (error) {
        console.log(error);
        res.json({ msg: `Error creating game..` });
    }
});
exports.postGame = postGame;
const updateGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const game = yield game_model_1.default.findByPk(id);
        if (game) {
            yield game.update(body);
            res.json({ msg: 'Game updated' });
        }
        else
            res.status(404).json({ msg: `No game at id: ${id}` });
    }
    catch (error) {
        console.log(error);
        res.json({ msg: `Error updating game..` });
    }
});
exports.updateGame = updateGame;
