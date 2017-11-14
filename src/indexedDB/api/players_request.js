/**
 * Created by stevenwestermire on 8/14/17.
 */

// this is an action creator using redux-thunk to fetch player info
import {iDB} from './index';
import {TABLE_NAMES} from '../../DATA_CONSTANTS'
import {playerFetchSuccess,
        playerIsFetching,
        fetchPlayerHasErrored,
        allPlayersIsFetching,
        fetchAllPlayersSuccess,
        fetchAllPlayersHasErrored} from '../../actions/players'

export function getPlayer(id=1){

    return iDB.openDB().then( (db) => {
        const transaction = db.transaction('PLAYERS', 'readonly');
        return transaction.objectStore('PLAYERS').get(id).then( (response) => {
            return response
        });
    });

}

export function getPlayers(){
    return (dispatch) => {
        let openRequest = indexedDB.open(iDB.name);
        dispatch( allPlayersIsFetching(true) );

        openRequest.onsuccess = (event) => {
            let db = event.target.result;
            let transaction = db.transaction(TABLE_NAMES.PLAYERS, 'readonly');
            let objectStore = transaction.objectStore(TABLE_NAMES.PLAYERS);
            let getRequest = objectStore.getAll();

            getRequest.onsuccess = (request) => {
                dispatch( fetchAllPlayersSuccess(request.target.result) );
                dispatch( allPlayersIsFetching(false) );
           };

            getRequest.onerror = (event) => {
                dispatch( fetchAllPlayersHasErrored(true) );
                dispatch( allPlayersIsFetching(false) );
           }
       }
   }
}