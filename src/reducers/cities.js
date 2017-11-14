/**
 * Created by stevenwestermire on 8/10/17.
 */
//TODO: need to look into nested states or if having nested objects is fine

// we'll start off with one, but we'll need to understand how we can have
// more cities with more complexity
const initialState = {

    cities: {
        1 : {
                id: 1,
                name: "San Francisco",
                population: 3000000,
                avg_salary: 70000
           }
   }

    //spending power
    //poverty
    //average salary
    //education
    //preferences???
};

export default function(state=initialState, action){
    switch (action.type){
        // case UPDATE_CITY:
        //     return {
        //
        //    };
        //
        default:
            return state
   }
}