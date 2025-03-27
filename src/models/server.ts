import express, { Application, Request, Response } from 'express';
import playerRoutes from '../routes/player-routes';
import db from '../db/connection';
import cors from 'cors';

class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }

    listen() { this.app.listen(this.port, () => { console.log(`App running on port ${this.port}`); }) }

    routes() {
        this.app.get('/', (req: Request, res: Response) => { res.json({ msg: 'API is working' }) })
        this.app.use('/api/players', playerRoutes)
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors())
    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Database connected');
        } catch (error) {
            console.error(error);
            console.error('Error connecting to database');
        }


    }

}

export default Server;