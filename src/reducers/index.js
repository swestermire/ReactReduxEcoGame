import {combineReducers} from 'redux';
import gameSpeedSliderReducer from './game_speed_slider_reducer';
import gameDateReducer from './game_date_reducer';
import gameWindowViewReducer from './game_window_reducer';
import marketReducer from './market';
import cityReducer from './cities';
import {player,
        playerIsFetching,
        fetchPlayerHasErrored,
        fetchAllPlayersHasErrored,
        allPlayersIsFetching} from './player';
import factoriesReducer from './factories';
import resources from './resources'

const rootReducer = combineReducers({

    market: marketReducer,
    gameSpeedSlider: gameSpeedSliderReducer,
    gameDate: gameDateReducer,
    gameWindowView: gameWindowViewReducer,
    city: cityReducer,
    player,
    playerIsFetching,
    fetchAllPlayersHasErrored,
    allPlayersIsFetching,
    fetchPlayerHasErrored,
    factories: factoriesReducer,
    resources,

});

export default rootReducer;
