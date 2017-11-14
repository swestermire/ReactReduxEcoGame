/**
 * Created by stevenwestermire on 8/18/17.
 */

export const PLAYER_HAS_ERRORED = "PLAYER_HAS_ERRORED";
export const PLAYER_IS_FETCHING = "PLAYER_IS_FETCHING";
export const PLAYER_FETCH_SUCCESS = "PLAYER_FETCH_SUCCESS";
export const PLAYER_UPDATE = "PLAYER_UPDATE";
export const ALL_PLAYERS_FETCH_SUCCESS = "ALL_PLAYERS_FETCH_SUCCESS";
export const ALL_PLAYERS_HAS_ERRORED = "ALL_PLAYERS_HAS_ERRORED";
export const ALL_PLAYERS_IS_FETCHING = "ALL_PLAYERS_IS_FETCHING";

export function fetchPlayerHasErrored(bool){
    return {
        type: PLAYER_HAS_ERRORED,
        hasErrored: bool
   }
}

export function fetchAllPlayersSuccess(all_players){
    return {
        type: ALL_PLAYERS_FETCH_SUCCESS,
        all_players
   }
}

export function allPlayersIsFetching(isFetching){
    return {
        type: ALL_PLAYERS_IS_FETCHING,
        isFetching
    }
}

export function fetchAllPlayersHasErrored(hasErrored){
    return {
        type: ALL_PLAYERS_HAS_ERRORED,
        hasErrored
    }
}

export function playerIsFetching(bool){
    return {
        type: PLAYER_IS_FETCHING,
        isFetching: bool
    }
}

export function playerFetchSuccess(selected_player){
    return {
        type: PLAYER_FETCH_SUCCESS,
        selected_player
    }
}

export function balanceUpdate(selected_player, transaction){
    console.log(selected_player, transaction);
    selected_player.balance = (parseInt(selected_player.balance) + transaction).toFixed(2);
    return {
        type: PLAYER_UPDATE,
        updated_player: selected_player
    }
}