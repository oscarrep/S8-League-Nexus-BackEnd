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
export const deletePlayer = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        msg: 'delete player',
        id: id
    })
}
export const postPlayer = (req: Request, res: Response) => {
    const { body } = req;

    res.json({
        msg: 'post player',
        body: body
    })
}
export const updatePlayer = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'update player',
        id: id,
        body: body
    })
}