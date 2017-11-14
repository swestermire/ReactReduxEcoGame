/**
 * Created by stevenwestermire on 7/1/17.
 */
import React, {Component} from "react";
import moment from "moment";
import Moment from "react-moment";
import {connect} from "react-redux";

// TODO: Deprecate updateLumberDemand and updateLumberMarket
// actions
import {changeGameDate} from "../actions/game_date_action";
import {updateLumberDemand} from "../actions/market_demand_action";
import {updateLumberMarket, updateResource} from "../actions/market";
import {balanceUpdate} from "../actions/players"

import {calcTransactions} from "../actions/market"


class GameDate extends Component{
    constructor(props){
        super(props);

        this.increment_game_date = this.increment_game_date.bind(this);
        this.get_timer_speed = this.get_timer_speed.bind(this);
        this.trigger_timer = this.trigger_timer.bind(this);
   }
    // comment: Once component is mounted, timer is triggered
    componentDidMount(){
        this.trigger_timer();
   }

    trigger_timer(){
        let game_speed = this.get_timer_speed();
        if (game_speed){
            // TODO: we could add all the game events in proc timer
            // and then have a transactions completed int he increment game date
            this.props.updateLumberDemand(5);
            this.props.updateLumberMarket(this.props.lumber_supply,
                                          this.props.lumber_demand,
                                          this.props.lumber_price,
                                          this.props.selected_player);

            this.props.updateResources(this.props.resources);
            // this.props.calcTransactions();
            setTimeout(this.increment_game_date, game_speed);
       } else {
            this.pause_timer();
       }
   }

    // this will check the game speed to see if trigger_timer needs to be recalled
    pause_timer(){
        setTimeout(this.trigger_timer, 1000) // watch game_speed every second
   }

    get_timer_speed(){
        if (this.props.game_speed){
            return 1000/this.props.game_speed;
       }
        return 0;
   }

    // increment game date will control sequence of actions
    increment_game_date(){
        let new_game_date = moment(this.props.game_date).add(1, "days");
        this.props.updateDate(new_game_date);
        this.trigger_timer();
   }

    render(){
        return (
            <Moment>{this.props.game_date}</Moment>
        );
   }
}

// From the global store, props/data is transferred to component
function mapStateToProps(state){

    return {game_date: state.gameDate.game_date,
             game_speed: state.gameSpeedSlider.game_speed,
             lumber_supply: state.market.lumber_supply,
             lumber_demand: state.market.lumber_demand,
             lumber_price: state.market.lumber_price,
             selected_player: state.player.selected,
             resources: {lumber: state.resources.lumber,
                         steel: state.resources.steel,
                         oil: state.resources.lumber}};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        // takes a resources object and calculates/performs supply/demand model.
        updateResources: (resources) => {
            Object.keys(resources).forEach(key => {
                let resource = resources[key];
                dispatch(updateResource(resource))
           })
       },

        updateDate: (game_date) => {
            dispatch(changeGameDate(game_date))
       },

        updateLumberDemand: (lumber) => {
            dispatch(updateLumberDemand(lumber))
       },

        updateLumberMarket: (supply, demand, price, player) => {
            //TODO-1: maybe game logic should go into mapDispatchToProps
            //TODO-1: so that we can spawn multiple dispatches based on game logic
            dispatch(updateLumberMarket( supply, demand, price) );
            //TODO-2: Dummy transaction initially
            if ( supply ){
                let trans_val;
                if ( supply > demand){
                    trans_val = demand*price
               } else {
                    trans_val = supply*price
               }

                dispatch(balanceUpdate(player, trans_val))
           }
       },

        // calcTransactions: () => {
        //     dispatch(calcTransactions())
        //}


   }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameDate);