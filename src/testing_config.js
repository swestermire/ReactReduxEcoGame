import {TABLE_NAMES} from './DATA_CONSTANTS';

export const start_up_data = {
    PLAYERS: [
        {
            name: 'Proteus Prime',
            balance: 1000,
            debt: 0
        },
        {
            name: 'Barren Wuffet',
            balance: 10000000,
            debt: 100000
        },
        {
            name: 'Gill Bates',
            balance: 100000000,
            debt: 10000
        }
    ],
    CITIES: [
        {
            name: 'Fran Sancisco',
            population: 30000000,
        }
    ],
    FACTORIES: [
        {
            playerId: 1,
            cityId: 1,
            size: 3,
            productId: 1,
        },
        {
            playerId: 1,
            cityId: 1,
            size: 3,
            productId: 2,
        },
        {
            playerId: 2,
            cityId: 2,
            size: 2,
            productId: 2,
        }
    ],
    PRODUCTS:[
        {
            name: 'Lumber'
        },
        {
            name: 'Wood Planks'
        },
        {
            name: 'Table'
        }
    ]
};