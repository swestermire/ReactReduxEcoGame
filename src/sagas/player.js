import {PLAYER_IS_FETCHING,
        PLAYER_HAS_ERRORED,
        PLAYER_FETCH_SUCCESS} from '../actions/players'
import {call, put, takeLatest, takeEvery} from 'redux-saga/effects'
import {getPlayer} from "../indexedDB/api/players_request";
export const FETCH_PLAYER = "FETCH_PLAYER";


export function* fetchPlayer(action){
    action.isFetching = true;

    try {
        yield put({type:PLAYER_IS_FETCHING, isFetching: action.isFetching});
        let player = yield call(getPlayer, action.id);
        yield put({type:PLAYER_FETCH_SUCCESS, selected_player:player});


    } catch(error){
        console.log(`Error when fetching player ID ${action.id} and error: ${error}`);
        action.hasErrored = true;
        yield put({type:PLAYER_HAS_ERRORED, hasErrored: true})

    } finally {
        yield put({type:PLAYER_IS_FETCHING, isFetching: false})
    }
}

// Saga watcher
export function* watchFetchPlayer(){
    yield takeLatest(FETCH_PLAYER, fetchPlayer)
}

