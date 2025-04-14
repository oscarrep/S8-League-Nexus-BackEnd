import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config();
const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASSWORD as string,
    {
        host: process.env.DB_HOST as string,
        port: Number(process.env.PORT),
        dialect: 'mysql',
        logging: true
    }
);

export default sequelize;