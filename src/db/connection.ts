import { Sequelize } from "sequelize";

const sequelize = new Sequelize('s8back', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
});

export default sequelize;