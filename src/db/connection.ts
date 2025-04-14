import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || process.env.MYSQLDATABASE || '',
  process.env.DB_USER || process.env.MYSQLUSER || '',
  process.env.DB_PASSWORD || process.env.MYSQLPASSWORD || '',
  {
    host: process.env.DB_HOST || process.env.MYSQLHOST || 'localhost',
    port: Number(process.env.DB_PORT || process.env.MYSQLPORT) || 3306,
    dialect: 'mysql',
    logging: console.log
  }
);

export default sequelize;