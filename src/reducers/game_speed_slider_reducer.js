/**
 * Created by stevenwestermire on 6/20/17.
 */
import {CHANGE_GAME_SPEED} from '../actions/game_speed_action';
import _ from 'lodash';

const initialState = {
    game_speed: 1
};

export default function(state=initialState, action){
    switch(action.type) {
        case CHANGE_GAME_SPEED:
            return {
                ...state,
                game_speed: action.payload
           };
        default:
            return state;
   }
}