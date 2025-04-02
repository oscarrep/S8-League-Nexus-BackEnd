import { Router } from "express";
import { deleteGame, getGame, getGames, postGame, updateGame } from "../controllers/games-controller";

const router = Router();

router.get('/', getGames);
router.get('/:id', getGame);
router.delete('/:id', deleteGame);
router.post('/', postGame);
router.put('/:id', updateGame);


export default router;