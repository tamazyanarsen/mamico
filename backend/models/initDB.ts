import { Sequelize } from 'sequelize';

import { User, userData } from './user';

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/db.sqlite'
});

export function initDatabase() {
    User.init(...userData)
}
