import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('mydatabase', 'user', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

