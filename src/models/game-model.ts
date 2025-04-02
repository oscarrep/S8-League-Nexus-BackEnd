import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Game = db.define('Game', {
    id: { type: DataTypes.NUMBER, primaryKey:true },
    event_name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE },
    hour_start: { type: DataTypes.TIME },
    hour_end: { type: DataTypes.TIME },
    location: { type: DataTypes.STRING },
},
{
    createdAt:false,
    updatedAt:false
});

export default Game;