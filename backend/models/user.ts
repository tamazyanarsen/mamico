import { DataTypes, Model } from 'sequelize';

export class User extends Model {}

export const userData = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
};