import express, { Application, Request, Response } from 'express';
import playerRoutes from '../routes/player';


class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '3001';
        this.listen();
        this.routes();
    }

    listen() { this.app.listen(this.port, () => { console.log(`App running on port ${this.port}`); }) }

    routes() { 
        this.app.get('/', (req: Request, res: Response) => { res.json({ msg: 'API is working' }) }) 
        this.app.use('/api/players', playerRoutes)
    }

}

export default Server;