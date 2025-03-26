import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Player = db.define('Player', {
    id: { type: DataTypes.NUMBER },
    username: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    position: { type: DataTypes.STRING },
    age: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING },
    lat: { type: DataTypes.STRING },
    long: { type: DataTypes.STRING },
    team: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
});

export default Player;