import {call, put, takeLatest} from 'redux-saga/effects';
import {getAllFactories} from '../indexedDB/api/factories_request';
import {GET_ALL_FACTORIES} from '../actions/factories';

export const FETCH_ALL_FACTORIES_BY_playerId = "FETCH_ALL_FACTORIES_BY_playerId";

export function* fetchAllFactoriesByPlayerId(action){
    let playerId = action.playerId;
    try {
        let allFactories = yield call(getAllFactories, playerId);
        yield put({type: GET_ALL_FACTORIES, factories: allFactories});

    } catch(error) {
        console.log(`Error when fetching all factories, error: ${error}`);

    } finally {
        // nothing here for now
    }
}

// saga watcher
export function* watchFactories(){
    yield takeLatest(FETCH_ALL_FACTORIES_BY_playerId, fetchAllFactoriesByPlayerId)
}