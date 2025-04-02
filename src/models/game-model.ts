import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Game = db.define('Game', {
    id: { type: DataTypes.NUMBER, primaryKey:true },
    event_name: { type: DataTypes.STRING },
    day: { type: DataTypes.STRING },
    month: { type: DataTypes.STRING },
    hour_start: { type: DataTypes.STRING },
    hour_end: { type: DataTypes.STRING },
    team1: { type: DataTypes.STRING },
    team2: { type: DataTypes.STRING },
},
{
    createdAt:false,
    updatedAt:false
});

export default Game;