import { Sequelize } from 'sequelize';

import { User, userData } from './user';

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/db.sqlite'
});

export async function initDatabase() {
    User.init(userData, { sequelize, modelName: 'User' })

    await sequelize.sync({ force: true });
}
