/**
 * Created by stevenwestermire on 8/6/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

// components
import {Panel} from 'react-bootstrap';
import {Markets} from './markets/markets';
import World_Map from './view_panels/world_map';
import CitiesTable from './cities_table';
import City from './view_panels/city';
import CompanyInfoWindow  from './company_information/window';

//actions
import {updateLumberSupply} from '../actions/market_supply_action'
import {getPlayer} from '../indexedDB/api/players_request';
import {getPlayers} from '../indexedDB/api/players_request';


//sagas
import {FETCH_PLAYER} from '../sagas/player'

import {VIEW_STORE, CONST_TO_BE_DEPRECATED} from '../DATA_CONSTANTS';

// TODO-1: need better way to change view based on state

class GameWindow extends Component {
    constructor(props){
        super(props);
        // this.sendSupply = this.sendSupply.bind(this);
   }

    componentDidMount(){
        this.props.fetchPlayer(1)
        // this.props.fetchPlayer(this.props.player.selectedId);
        // this.props.fetchAllPlayers();
   }

    render(){
        let props_view = this.props.game_window_view;

        switch(props_view){
            case VIEW_STORE.COMPANY_INFO:
                return (
                    <Panel>
                        Game Window: {this.props.game_window_view}
                        <CompanyInfoWindow
                            player = {this.props.player}/>
                    </Panel>
                );

            case VIEW_STORE.MARKETS:
                return (
                    <Markets {...this.props} />
                );


            case VIEW_STORE.COMPETITORS:
                return (
                    <Panel>
                        Game Window: {this.props.game_window_view}
                    </Panel>
                );

            case VIEW_STORE.RESEARCH:
                return (
                    <Panel>
                        Game Window: {this.props.game_window_view}
                    </Panel>
                );

            case VIEW_STORE.PROPERTIES:
                return (
                    <Panel>
                        Game Window: {this.props.game_window_view}
                    </Panel>
                );

            case VIEW_STORE.WORLD_MAP:
                return (
                    <Panel>
                        <World_Map />
                        <CitiesTable />
                    </Panel>
                );

            case CONST_TO_BE_DEPRECATED.SAN_FRANCISCO:
                return (
                    <Panel>
                        <h1> City: {CONST_TO_BE_DEPRECATED.SAN_FRANCISCO} </h1>
                        <City />
                    </Panel>
                );
       }

   }
}

function mapStateToProps(state){

    return {
        game_window_view: state.gameWindowView.game_window_view,
        lumber_demand: state.market.lumber_demand,
        lumber_supply: state.market.lumber_supply,
        lumber_price: state.market.lumber_price,
        player: state.player,
        players: state.player.all,
        game_date: state.gameDate.game_date
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateLumberSupply: (lumber) => {
            dispatch(updateLumberSupply(lumber))
       },
        fetchPlayer: (id) => {
            dispatch({type: FETCH_PLAYER, id})
       },
        fetchAllPlayers: () => {
            action('fetching')
       }

   };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameWindow);