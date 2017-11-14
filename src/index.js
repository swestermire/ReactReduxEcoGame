import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import "babel-polyfill"
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'

// initialize indexedDB
import {iDB} from './indexedDB/api/index';

import reducers from './reducers';
import GameSpeedSlider from './components/game_speed_slider_component';
import GameDate from './components/game_date_component';
import MenuToolbar from './components/menu_toolbar_component';
import GameWindow from './components/game_window_component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
const reduxStore = createStoreWithMiddleware(reducers, devTools)

import rootSaga from './sagas/watchers'
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={reduxStore}>
        <BrowserRouter>
            <MuiThemeProvider>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={0} md={8} lg={8}></Col>
                        <Col xs={12} md={4} lg={4}>
                            <GameDate />
                            <GameSpeedSlider />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3} md={3} lg={3}>
                            <MenuToolbar />
                        </Col>
                        <Col xs={9} md={9} lg={9}>
                            <GameWindow />
                        </Col>
                    </Row>
                </Grid>
            </MuiThemeProvider>
    </BrowserRouter>
    </Provider>
  , document.querySelector('.container'));
