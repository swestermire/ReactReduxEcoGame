/**
 * Created by stevenwestermire on 8/10/17.
 */
import {PLAYER_FETCH_SUCCESS,
        PLAYER_HAS_ERRORED,
        PLAYER_IS_FETCHING,
        PLAYER_UPDATE,
        ALL_PLAYERS_FETCH_SUCCESS,
        ALL_PLAYERS_HAS_ERRORED,
        ALL_PLAYERS_IS_FETCHING} from "../actions/players";

//TODO-1: NEED TO RETHINK HOW I STORE DATA LIKE THIS
//TODO-1: ACTUALLY I"M SURE THIS IS A TERRIBLE IDEA. REDUX IS NOT MEANT TO BE
//A DATA-REPOSITORY LIKE THIS.
const initialPlayerState = {
    selectedId: 1,
    selected: null,
    all: null
};

export function player(state=initialPlayerState, action){
    switch(action.type){
        case PLAYER_FETCH_SUCCESS:
            return {
                ...state,
                selected: action.selected_player
            };

        case PLAYER_UPDATE:
            return {
                ...state,
                selected: action.updated_player
            };

        case ALL_PLAYERS_FETCH_SUCCESS:
            console.log("fetching all player success", action.all_players);
            return{
                ...state,
                all: action.all_players
            };

        default:
            return state;
   }
}
//TODO-1: Might be better to combine these methods to be playerTableFetching
//TODO-1 To also have ALL_PLAYERS_FETCHING
export function playerIsFetching(state=false, action){
    switch(action.type){

        case PLAYER_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
           };

        default:
            return state
   }
}

export function fetchPlayerHasErrored(state=false, action){
    switch(action.type){
        case PLAYER_HAS_ERRORED:
            return {
                ...state,
                playerHasErrored: action.hasErrored
           };

        default:
            return state
   }
}

export function allPlayersIsFetching(state=false, action){
    switch(action.type){
        case ALL_PLAYERS_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
           };

        default:
            return state
   }
}

export function fetchAllPlayersHasErrored(state=false, action){
    switch (action.type){
        case ALL_PLAYERS_HAS_ERRORED:
            return {
                ...state,
                hasErrored: action.hasErrored
           };

        default:
            return state
   }
}