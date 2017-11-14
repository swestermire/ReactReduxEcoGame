import {watchFetchPlayer} from "./player";
import {watchFactories} from "./factories";
import {all} from 'redux-saga/effects'

export default function* rootSaga(){
    yield all([
        watchFetchPlayer(),
        watchFactories()
    ])
}