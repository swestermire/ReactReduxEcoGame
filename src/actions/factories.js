/**
 * Created by stevenwestermire on 8/10/17.
 */

import {factory_post} from '../indexedDB/api/factories_request';

export const BUILD_FACTORY = 'BUILD_FACTORY';
export const GET_FACTORY = 'GET_FACTORY';
export const GET_ALL_FACTORIES = 'GET_ALL_FACTORIES';

export function buildFactory(cityId, playerId, cost=100, level=1, date){
    factory_post(
        cityId,
        playerId,
        cost,
        level,
    );

    return {
        type: BUILD_FACTORY,
        playerId,
        cityId,
        cost,
        level,
        date,
   }
}

export function getFactory(factoryId){
    return {
        type: GET_FACTORY,
        id: factoryId,
   }
}