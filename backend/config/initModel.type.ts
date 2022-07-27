import { Model } from 'sequelize';
import { InitOptions, ModelAttributes, Optional } from 'sequelize/types';

export type InitModel<T extends Model> = [ModelAttributes<T, Optional<unknown, never>>, InitOptions<T>]