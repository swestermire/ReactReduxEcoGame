/**
 * Created by stevenwestermire on 8/9/17.
 */
export const UPDATE_LUMBER_MARKET = "UPDATE_LUMBER_MARKET";
export const CALC_TRANSACTIONS = "CALCULATE_TRANSACTIONS";
export const UPDATE_LUMBER = 'UPDATE_LUMBER_RESOURCE';
export const UPDATE_OIL = 'UDPATE_OIL_RESOURCE';
export const UPDATE_STEEL = 'UPDATE_STEEL_RESOURCE';

// resource should be updated using this method prior to dispatch
import {calc_resource_transactions} from '../indexedDB/api/transactions/resources'
export function calcTransactions(resource){
    calc_resource_transactions(resource.name)
}

export function updateResource(resource){
    switch (resource.name){
        case 'lumber':
            return {
                type: UPDATE_LUMBER,
                payload: resource
           };

        case 'oil':
            return {
                type: UPDATE_OIL,
                payload: resource
           };

        case 'steel':
            return {
                type: UPDATE_STEEL,
                payload: resource
           };
   }
}

export function updateLumberMarket(_lumber_supply, _lumber_demand, _lumber_price){
    let lumber_demand, lumber_supply, lumber_price;
        if (_lumber_supply >= _lumber_demand) {
            lumber_supply = _lumber_supply - _lumber_demand;
            lumber_demand = 0;
            lumber_price = (0.995*_lumber_price).toFixed(2)


       } else {
            lumber_demand = _lumber_demand - _lumber_supply;
            lumber_supply = 0;
            lumber_price = (1.005*_lumber_price).toFixed(2)

   }

    return {
        type: UPDATE_LUMBER_MARKET,
        lumber_demand,
        lumber_supply,
        lumber_price
   }


}