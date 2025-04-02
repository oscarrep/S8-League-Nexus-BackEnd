import { Router } from "express";
import { deletePlayer, getPlayer, getPlayers, postPlayer, updatePlayer } from "../controllers/player-controller";
import { deleteGame, getGame, getGames, postGame, updateGame } from "../controllers/games-controller";

const router = Router();

router.get('/', getPlayers);
router.get('/:id', getPlayer);
router.delete('/:id', deletePlayer);
router.post('/', postPlayer);
router.put('/:id', updatePlayer);

router.get('/', getGames);
router.get('/:id', getGame);
router.delete('/:id', deleteGame);
router.post('/', postGame);
router.put('/:id', updateGame);


export default router;