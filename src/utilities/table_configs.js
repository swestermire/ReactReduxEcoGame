import _ from 'lodash';

// todo: Should i have this connect somehow with Schema, and how?
// comment: not done
export class TableConfigsParser{
    constructor(schema){
        this.configs = [];
    }

    addConfigs = (tableName, attr, columnName) => {

    };

    configs = () => {
        return this.configs
    }
}
