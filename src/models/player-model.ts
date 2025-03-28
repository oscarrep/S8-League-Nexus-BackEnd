import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Player = db.define('Player', {
    id: { type: DataTypes.NUMBER, primaryKey:true },
    username: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    position: { type: DataTypes.STRING },
    age: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    lat: { type: DataTypes.STRING },
    lon: { type: DataTypes.STRING },
    team: { type: DataTypes.STRING },
    team_short: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
}, 
{
    createdAt:false,
    updatedAt:false
});

export default Player;