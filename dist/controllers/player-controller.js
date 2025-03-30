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
exports.updatePlayer = exports.postPlayer = exports.deletePlayer = exports.getPlayer = exports.getPlayers = void 0;
const player_model_1 = __importDefault(require("../models/player-model"));
const getPlayers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const playerList = yield player_model_1.default.findAll();
    res.json(playerList);
});
exports.getPlayers = getPlayers;
const getPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const player = yield player_model_1.default.findByPk(id);
    if (player)
        res.json(player);
    else
        res.status(404).json({ msg: `No player at id: ${id}` });
});
exports.getPlayer = getPlayer;
const deletePlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const player = yield player_model_1.default.findByPk(id);
    if (!player)
        res.status(404).json({ msg: `No player at id: ${id}` });
    else {
        yield player.destroy();
        res.json({ msg: `Deleted player at ${id}` });
    }
});
exports.deletePlayer = deletePlayer;
const postPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield player_model_1.default.create(body);
        res.json({ msg: `Created player` });
    }
    catch (error) {
        console.log(error);
        res.json({ msg: `Error creating player..` });
    }
});
exports.postPlayer = postPlayer;
const updatePlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const player = yield player_model_1.default.findByPk(id);
        if (player) {
            yield player.update(body);
            res.json({ msg: 'Player updated' });
        }
        else
            res.status(404).json({ msg: `No player at id: ${id}` });
    }
    catch (error) {
        console.log(error);
        res.json({ msg: `Error updating player..` });
    }
});
exports.updatePlayer = updatePlayer;
