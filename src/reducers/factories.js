/**
 * Created by stevenwestermire on 8/11/17.
 */
import {BUILD_FACTORY, GET_FACTORY, GET_ALL_FACTORIES} from '../actions/factories';

import {factory_post, get_factory, getAllFactories} from '../indexedDB/api/factories_request';

const initialState = {
    selected_factory: null,
    factories: []
};

export default function(state=initialState, action){
    switch(action.type){
        case BUILD_FACTORY:
            return {
                ...state,
            };

        case GET_FACTORY:

            let selected_factory = get_factory(action.id);

            return {
                ...state,
                selected_factory,
                factories: null
            };

        case GET_ALL_FACTORIES:

            return {
                ...state,
                selected_factory: null,
                factories: action.factories
            };

        default:
            return state;
   }
}