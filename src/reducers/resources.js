import {UPDATE_LUMBER,
         UPDATE_OIL,
         UPDATE_STEEL} from '../actions/market'

const resources = {
    lumber: {
        name: "lumber",
        price: 100,
        demand: 100,
        supply: 0,
        // year_active: 1900
   },
    oil: {
        name: "oil",
        price: 50,
        demand: 1000,
        supply: 100,
   },
    steel: {
        name: "steel",
        price: 30,
        demand: 200,
        supply: 0
   }
};

class Resource {
    // comment: I wonder if I should attach other functions to this
    constructor(name, price=0, supply=0, demand=0){
        this.name = name;
        this.price = price;
        this.supply = supply;
        this.demand = demand;
   }
};

function constructInitState(){
    let to_return = {};
    Object.keys(resources).forEach( resource => {
        let name = resources[resource].name;
        let price = resources[resource].price;
        let demand = resources[resource].demand;
        let supply = resources[resource].supply;
        let obj = new Resource(name, price, demand, supply);
        to_return[obj.name] = obj;
   });
    // to_return[active_resources];
    // to_return[inactive_resources];
    return to_return;
}

export default function(state=constructInitState(), action){

    switch (action.type){
        case UPDATE_LUMBER:
            return {
                ...state,
                lumber: action.payload
           };

        case UPDATE_OIL:
            return {
                ...state,
                oil: action.payload
           };

        case UPDATE_STEEL:
            return {
                ...state,
                steel: action.payload
           };

        default:
            return state
   }
}





















