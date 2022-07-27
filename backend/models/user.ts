import { DataTypes, Model } from 'sequelize';

import { InitModel } from '../config/initModel.type';
import { sequelize } from './initDB';

export class User extends Model {}

export const userData: InitModel<User> = [{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    sequelize,
    modelName: 'User'
}];