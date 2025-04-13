import { Request, Response } from "express"
import Game from "../models/game-model"


export const getGames = async (req: Request, res: Response) => {
    const gameList = await Game.findAll();


    res.json( gameList );

}
export const getGame = async (req: Request, res: Response) => {
    const { id } = req.params;
    const game = await Game.findByPk(id);

    if (game) res.json(game);
    else res.status(404).json({ msg: `No game at id: ${id}` });
}

export const deleteGame = async (req: Request, res: Response) => {
    const { id } = req.params;
    const game = await Game.findByPk(id);

    if (!game) res.status(404).json({ msg: `No game at id: ${id}` });
    else {
        await game.destroy();
        res.json({ msg: `Deleted game at ${id}` })
    }
}

export const postGame = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Game.create(body);
        res.json({ msg: `Created game` });
    } catch (error) {
        console.log(error);
        res.json({ msg: `Error creating game..` });
    }


}
export const updateGame = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const game = await Game.findByPk(id);

        if (game) {
            await game.update(body);
            res.json({ msg: 'Game updated' });
        }
        else res.status(404).json({ msg: `No game at id: ${id}` });

    } catch (error) {
        console.log(error);
        res.json({ msg: `Error updating game..` });
    }
}