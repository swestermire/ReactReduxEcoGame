/**
 * Created by stevenwestermire on 8/8/17.
 */

export const UPDATE_LUMBER_SUPPLY = "UPDATE_LUMBER_SUPPLY";

export function updateLumberSupply(value){
    return {
        type: UPDATE_LUMBER_SUPPLY,
        payload: value
   }
}