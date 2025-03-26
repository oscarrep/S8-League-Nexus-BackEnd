import { Router } from "express";
import { deletePlayer, getPlayer, getPlayers, postPlayer, updatePlayer } from "../controllers/player-controller";

const router = Router();

router.get('/', getPlayers);
router.get('/:id', getPlayers);
router.delete('/:id', deletePlayer);
router.post('/', postPlayer);
router.put('/:id', updatePlayer);


export default router;