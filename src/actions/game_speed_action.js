/**
 * Created by stevenwestermire on 6/20/17.
 */

export const CHANGE_GAME_SPEED = 'CHANGE_GAME_SPEED';

export function changeGameSpeed(value){
    return {
        type: CHANGE_GAME_SPEED,
        payload: value
   };
}