import { Sequelize } from "sequelize";

const sequelize = new Sequelize('typescript_sequelize', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;