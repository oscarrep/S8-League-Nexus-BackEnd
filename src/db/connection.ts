import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
});

const sequelize = new Sequelize(
  process.env.MYSQL_URL as string, {
  dialect: 'mysql',
  logging: true,
}
);

if (process.env.NODE_ENV === 'production') {
  sequelize.authenticate()
    .then(() => {
      console.log("Connected to Railway MySQL!");
    })
    .catch(err => {
      console.error("Unable to connect:", err);
    });
}
else if (process.env.NODE_ENV === 'development') {
  sequelize.authenticate()
    .then(() => {
      console.log("Connected to Local MySQL!");
    })
    .catch(err => {
      console.error("Unable to connect:", err);
    });
}

export default sequelize;