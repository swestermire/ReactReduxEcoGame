/**
 * Created by stevenwestermire on 7/1/17.
 */
export const CHANGE_GAME_DATE = "CHANGE_GAME_DATE";

export function changeGameDate(value){
    return {
        type: CHANGE_GAME_DATE,
        payload: value,
    };
}