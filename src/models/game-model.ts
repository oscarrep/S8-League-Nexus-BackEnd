import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Game = db.define('Game', {
    id: { type: DataTypes.INTEGER, primaryKey:true },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    start_date: { type: DataTypes.DATE },
    end_date: { type: DataTypes.DATE },
    league: { type: DataTypes.STRING },
},
{
    createdAt:false,
    updatedAt:false,
});

export default Game;