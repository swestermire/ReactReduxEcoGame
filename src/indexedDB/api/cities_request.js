/**
 * Created by stevenwestermire on 8/14/17.
 */

import {TABLE_NAMES} from '../../DATA_CONSTANTS';
import {iDB} from './index';

const citiesTable = TABLE_NAMES.CITIES;

export function getCity(cityId){
    return iDB.openDB().then( db => {
        const transaction = db.transaction(citiesTable, 'readonly');
        return transaction.objectStore(citiesTable).get(cityId).then( request => {
            return request
        })
    })
}