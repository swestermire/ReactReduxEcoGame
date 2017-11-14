/**
 * Created by stevenwestermire on 8/9/17.
 */
import {UPDATE_LUMBER_DEMAND} from '../actions/market_demand_action';
import {UPDATE_LUMBER_SUPPLY} from '../actions/market_supply_action';
import {UPDATE_LUMBER_MARKET} from '../actions/market';

const initialState = {
    lumber_demand: 0,
    lumber_supply: 0,
    lumber_price: 100.00
};


//TODO: Take logic out of reducers.  Reducers are intended to return state, not modify or mutate state at all.
export default function(state=initialState, action){
    switch(action.type){
        case UPDATE_LUMBER_DEMAND:
            return {
                ...state,
                lumber_demand: state.lumber_demand + action.payload
           };

        case UPDATE_LUMBER_SUPPLY:
            return {
                ...state,
                lumber_supply: state.lumber_supply + action.payload
           };

        case UPDATE_LUMBER_MARKET:
            return {
                ...state,
                lumber_supply: action.lumber_supply,
                lumber_demand: action.lumber_demand,
                lumber_price: action.lumber_price
           };

        default:
            return state;
   }
}