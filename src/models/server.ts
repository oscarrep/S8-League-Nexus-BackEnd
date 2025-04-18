import express, { Application, Request, Response } from 'express';
import playerRoutes from '../routes/player-routes';
import gameRoutes from '../routes/game-routes';
import db from '../db/connection';
import cors from 'cors';

class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '3001';
        this.middlewares();
        this.routes();
        this.dbConnect();
        this.listen();
    }

    listen() { this.app.listen(this.port, () => { console.log(`App running on port ${this.port}`); }) }

    routes() {
        this.app.get('/', (req: Request, res: Response) => { res.json({ msg: 'API is working' }) })
        this.app.use('/api/players', playerRoutes)
        this.app.use('/api/games', gameRoutes)
    }

    middlewares() {
        this.app.use(cors({
            origin: (origin, callback) => {
                const allowedOrigins = [
                    'https://s8-league-nexus.vercel.app',
                    'http://localhost:4200'
                ];
                if (!origin || allowedOrigins.includes(origin)) {
                    callback(null, true);
                } else {
                    callback(new Error('Not allowed by CORS'));
                }
            },
            credentials: true
        }));

        this.app.use(express.json());
    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Database connected');

            await db.sync({ force: false });
            console.log('Tables synced');
        } catch (error) {
            console.error(error);
            console.error('Error connecting to database');
        }
    }

}

export default Server;