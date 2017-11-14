/**
 * Created by stevenwestermire on 8/8/17.
 */

export const UPDATE_LUMBER_DEMAND = "UPDATE_LUMBER_DEMAND";

export function updateLumberDemand(value){
    return {
        type: UPDATE_LUMBER_DEMAND,
        payload: value
   };
}