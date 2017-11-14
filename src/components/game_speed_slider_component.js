/**
 * Created by stevenwestermire on 6/20/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeGameSpeed} from '../actions/game_speed_action';
import {ReactBootstrapSlider} from 'react-bootstrap-slider';

// GENERAL TODO:
    //1. Need to implement general pause (when timer is set to 0)


class GameSpeedSlider extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
   }

    onChange(event){
        this.props.changeGameSpeed(event.target.value);
   }

    render(){
        return (
            <div className="">
                <div className="col-lg-12 col-md-12">
                    <ReactBootstrapSlider
                        // value={this.state.currentValue}
                        value={this.props.game_speed}
                        // change={this.changeValue}
                         change={this.onChange}
                        // change = {this.props.onChange}
                        // slideStop={this.changeValue} // only need slideStop or change function
                        // slideStop={10}
                        // step={this.state.step}
                        step={1}
                        // max={this.state.max}
                        max={10}
                        // min={this.state.min}
                        min={0}
                        orientation="horiztonal"
                        // orientation="vertical" // default horizontal. not required.
                        // reversed={false}
                        // disabled="disabled"
                    />
                </div>
            </div>
        );
   }
}

// hook component up to application state
// We are slicing off data that the component needs to be aware of from the global state store
function mapStateToProps(state){
    return {game_speed: state.gameSpeedSlider.game_speed}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeGameSpeed: (game_speed) => {
            dispatch(changeGameSpeed(game_speed))
       }
   };
};

// wiring action creator
export default connect(mapStateToProps, mapDispatchToProps)(GameSpeedSlider);