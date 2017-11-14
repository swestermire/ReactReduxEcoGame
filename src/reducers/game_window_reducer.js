/**
 * Created by stevenwestermire on 8/6/17.
 */
import {GAME_WINDOW_VIEW} from '../actions/game_window_action';
import {VIEW_STORE} from '../DATA_CONSTANTS';

// TODO: Think about creating a separate file for this?.... OR maybe as views are created, store constants
// in those view files? But i think the flow might be disrupted a bit

// this reducer will be responsible for establishing view of the 'game window'
const initialView = {
    game_window_view: VIEW_STORE.COMPANY_INFO
};

export default function(state=initialView, action){
    switch(action.type){
        case GAME_WINDOW_VIEW:
            return {
                ...state,
                game_window_view: action.payload
           };

        default:
            return state;
   }
}
