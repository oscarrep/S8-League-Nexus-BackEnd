import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
});

let sequelize: Sequelize;

if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(process.env.MYSQL_URL as string, {
    dialect: 'mysql',
    logging: true,
  });

  sequelize.authenticate()
    .then(() => console.log("Connected to Railway MySQL!"))
    .catch(err => console.error("Unable to connect to Railway:", err));

} else {
  sequelize = new Sequelize(
    process.env.MYSQLNAME as string,
    process.env.MYSQLUSER as string,
    process.env.MYSQLPASSWORD as string,
    {
      host: process.env.MYSQLHOST as string,
      port: Number(process.env.MYSQLPORT),
      dialect: 'mysql',
      logging: true,
    }
  );

  sequelize.authenticate()
    .then(() => console.log("Connected to Local MySQL!"))
    .catch(err => console.error("Unable to connect to Local MySQL:", err));
}

export default sequelize;