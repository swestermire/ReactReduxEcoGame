/**
 * Created by stevenwestermire on 8/10/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';

import {buildFactory} from '../../actions/factories';

//TODO: NEED TO CREATE A BUILD FACTORY SECTION TO THIS VIEW

class City extends Component {
    constructor(props){
        super(props);
        this.buildFactory = this.buildFactory.bind(this);

   }

    buildFactory(){
        let level = 1;
        let cost = 100;
        let playerId=1;
        let game_date = this.props.game_date;
        this.props.buildFactory(this.props.city.id, playerId, cost, level, game_date)
   }

    render(){
        return (
            <div>
                <Button onClick={this.buildFactory} bsStyle="success">
                    Build Factory in {this.props.city.name}!
                </Button>
            </div>
        );
   }
}

//todo: This needs to be updated to take a specific id to retrieve city info
function mapStateToProps(state){
    return {
        city: state.city.cities[1],
        game_date: state.gameDate.game_date

   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buildFactory: (cityId, playerId, cost, level) => {
            dispatch(buildFactory(cityId, playerId, cost, level))
       }
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(City);