/**
 * Created by stevenwestermire on 8/14/17.
 */
import {TABLE_NAMES} from '../../DATA_CONSTANTS'
import {iDB} from './index'

const factory_table = TABLE_NAMES.FACTORIES;
// comment: check, incorrect format
export function factory_post(cityId, playerId, cost, level){
    let openRequest = indexedDB.open(iDB.name);

    openRequest.onsuccess = (event) => {
        let db = event.target.result;
        let transaction = db.transaction(factory_table, 'readwrite');
        let objectStore = transaction.objectStore(factory_table);
        objectStore.add({
            cityId,
            playerId,
            cost,
            level
       })
   };

    openRequest.onerror = (event) => {
        console.log('factory not successfully created', event)
   };
}
// comment: check, incorrect format
export function get_factory(id){
    let openRequest = indexedDB.open(iDB.name);

    openRequest.onsuccess = (event) => {
        let db = event.target.result;
        let transaction = db.transaction(factory_table, 'read');
        let objectStore = transaction.objectStore(factory_table);
        return objectStore.get(id).result;
   }
}

export function getAllFactories(playerId=null) {
    if (!playerId){
        return iDB.openDB().then( (db) => {
            const transaction = db.transaction('FACTORIES', 'readonly');
            return transaction.objectStore('FACTORIES').getAll().then( (response) => {
                return response
            })
        })
    } else {
        return iDB.openDB().then( db => {
            const transaction = db.transaction('FACTORIES', 'readonly');
            const store = transaction.objectStore('FACTORIES');
            let playerFactories = [];
            (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
                if (!cursor){return}
                store.get(cursor.primaryKey).then( response => {
                    if (response && response.playerId === playerId){
                        playerFactories.push(response)
                    }
                });
                cursor.continue()
            });
            return transaction.complete.then(() => playerFactories)
        })
    }
}

