/**
 * Created by stevenwestermire on 7/1/17.
 */
import {CHANGE_GAME_DATE} from '../actions/game_date_action';
import _ from 'lodash';

const initialState = {
    game_date: '1977-04-19T12:59-1100'
};

export default function(state=initialState, action){
    switch(action.type){
        case CHANGE_GAME_DATE:

            return {
                ...state,
                game_date: action.payload
           };

        default:
            return state;
   }
}