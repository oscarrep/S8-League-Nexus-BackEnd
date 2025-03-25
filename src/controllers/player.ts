import { Request, Response } from "express"


export const getPlayers = (req: Request, res: Response) => {

    res.json({ msg: 'get players' })

}
export const getPlayer = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        msg: 'get player',
        id: id
    })

}