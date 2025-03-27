import { Request, Response } from "express"
import Player from "../models/player-model"


export const getPlayers = async (req: Request, res: Response) => {
    const playerList = await Player.findAll();


    res.json( playerList );

}
export const getPlayer = async (req: Request, res: Response) => {
    const { id } = req.params;
    const player = await Player.findByPk(id);

    if (player) res.json(player);
    else res.status(404).json({ msg: `No player at id: ${id}` });
}

export const deletePlayer = async (req: Request, res: Response) => {
    const { id } = req.params;
    const player = await Player.findByPk(id);

    if (!player) res.status(404).json({ msg: `No player at id: ${id}` });
    else {
        await player.destroy();
        res.json({ msg: `Deleted player at ${id}` })
    }
}

export const postPlayer = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Player.create(body);
        res.json({ msg: `Created player` });
    } catch (error) {
        console.log(error);
        res.json({ msg: `Error creating player..` });
    }


}
export const updatePlayer = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const player = await Player.findByPk(id);

        if (player) {
            await player.update(body);
            res.json({ msg: 'Player updated' });
        }
        else res.status(404).json({ msg: `No player at id: ${id}` });

    } catch (error) {
        console.log(error);
        res.json({ msg: `Error updating player..` });
    }
}