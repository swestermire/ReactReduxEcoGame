import {BaseSchema} from './base';
import _ from 'lodash';

export const CITIES = 'CITIES';

export class CitiesSchema extends BaseSchema{
    constructor(){
        super();
        this.tableName = CITIES;
        this.schemaFields = {
            primaryKey: 'id',
            fields: new Set([
                'population',
                'CDP',
            ])
        };
        this.constructSchema(this)
    }
}
