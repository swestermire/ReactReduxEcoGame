/**
 * Created by stevenwestermire on 8/6/17.
 */

export const GAME_WINDOW_VIEW = 'GAME_WINDOW_VIEW';

export function changeGameWindowView(value){
    return {
        type: GAME_WINDOW_VIEW,
        payload: value
   };
}