import {BaseSchema} from './base';

export const PLAYERS = 'PLAYERS';

export class PlayersSchema extends BaseSchema{
    constructor(){
        super();
        this.tableName = CITIES;
        this.schemaFields = {
            primaryKey: 'id',
            fields: new Set([
                'name',
                'debt',
                'companyName',
                'balance',
            ])
        };
        this.constructSchema(this)
    }
}
