import { DataTypes, Sequelize } from 'sequelize';

import { User } from './user';

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/db.sqlite'
});

export function initDatabase() {
    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    }, {
        sequelize,
        modelName: 'User'
    })
}
