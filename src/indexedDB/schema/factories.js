import {BaseSchema} from './base';
import {PLAYERS, PRODUCTS, CITIES} from "./table_name_imports";
import _ from 'lodash';

export const FACTORIES = 'FACTORIES';

export class FactoriesSchema extends BaseSchema{
    constructor(){
        super();
        this.tableName = FACTORIES;
        this.schemaFields = {
            primaryKey: 'id',
            foreignKeys: {
                cityId: CITIES,
                playerId: PLAYERS,
                productId: PRODUCTS,
            },

            fields: new Set([
                'size',
            ])
        };
        this.constructSchema(this)
    }
}
