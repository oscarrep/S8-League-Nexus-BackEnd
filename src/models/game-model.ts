import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Game = db.define('Game', {
    id: { type: DataTypes.NUMBER, primaryKey:true },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    start: { type: DataTypes.DATE },
    end: { type: DataTypes.DATE },
    league: { type: DataTypes.STRING },
},
{
    createdAt:false,
    updatedAt:false
});

export default Game;