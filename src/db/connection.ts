import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config();
const sequelize = new Sequelize(
    process.env.MYSQLDATABASE || process.env.DB_NAME || '',
    process.env.MYSQLUSER || process.env.DB_USER || '' ,
    process.env.MYSQLPASSWORD || process.env.DB_PASSWORD || '' ,
    {
        host: process.env.MYSQLHOST || process.env.DB_HOST || 'localcost' ,
        port: Number(process.env.MYSQLPORT) || Number(process.env.DB_PORT) || 3306,
        dialect: 'mysql',
        logging: true
    }
);

export default sequelize;