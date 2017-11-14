import {iDB} from "./index";

export function getTableEntryById(tableName, id){
    return iDB.openDB().then( db => {
        const transaction = db.transaction(tableName, 'readonly');
        return transaction.objectStore(tableName).get(id).then( response => {
            if ( !response ){
                console.log(`Error when fetching id ${id} from table ${tableName}`);
                return null
            }
            return response
        })
    })
}