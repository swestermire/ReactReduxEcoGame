import _ from 'lodash';

export class BaseSchema{
    constructSchema(schema){
        this.validateSchema(schema);
    }

    foreignKey = () => {
        if (_.has(this.schemaFields, 'foreignKey')){
            return this.schemaFields.foreignKey
        }
        return null
    };

    checkEntry(entry){
        let fields = new Set (
            [...new Set(_.keys(this.schemaFields.foreignKeys)),
             ...this.schemaFields.fields]
        );

        _.forEach(entry, attr => {
            if (!_.has(fields, attr)){
                console.warn(`${attr} not found in schema for entry ${entry} trying to be added.`)
            } else {
                fields.delete(attr)
            }
        });

        if (fields){
            console.warn(`Attrs ${Array.from(fields).toString()} not found in schema
            when trying to add entry ${entry}`)
        }
    }

    validateSchema(schema){
        this.checkSchemaFields(schema);
        this.checkTableName(schema);
        this.checkForeignKeys(schema);
    }

    checkSchemaFields(schema){
        if (!schema.schemaFields){
            console.error('Need to define schemaFields attr in Schema constructor', this)
        }
    }

    checkTableName(schema){
        if (!schema.tableName){
            console.error('Need to define tableName attr in Schema constructor', this)
        }
    }

    checkForeignKeys(schema){
        //comment: Check to see if foreign keys map to a valid iDB table
        return
    }
}
