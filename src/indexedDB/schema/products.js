import {BaseSchema} from './base';
import _ from 'lodash';

export const PRODUCTS = 'PRODUCTS';

export class ProductsSchema extends BaseSchema{
    constructor(){
        super();
        this.tableName = CITIES;
        this.schemaFields = {
            primaryKey: 'id',
            fields: new Set([
                'name'
            ])
        };
        this.constructSchema(this)
    }
}
