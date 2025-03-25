import { Router } from "express";
import { getPlayer, getPlayers } from "../controllers/player";

const router = Router();

router.get('/', getPlayers)
router.get('/:id', getPlayer)


export default router;