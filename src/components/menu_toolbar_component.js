/**
 * Created by stevenwestermire on 8/6/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeGameWindowView} from '../actions/game_window_action';
import {ButtonGroup, Button} from 'react-bootstrap'
import {VIEW_STORE, CONST_TO_BE_DEPRECATED} from '../DATA_CONSTANTS';

import {DeleteIdbButton} from './delete_idb_button';

//TODO-1: Have text overflow and expand tile.
//TODO-2: Look into having this menu bar be hideable

class MenuToolbar extends Component{
    constructor(props){
        super(props);
        this.changeView = this.changeView.bind(this);
   }

    changeView(event){
        this.props.changeGameWindowView(event.target.name);
   }

    render(){
        return (
            <div>
                <ButtonGroup vertical block>
                    <Button name={VIEW_STORE.COMPANY_INFO} onClick={this.changeView}> Company Information </Button>
                    <Button name={VIEW_STORE.COMPETITORS} onClick={this.changeView}> Competitors </Button>
                    <Button name={VIEW_STORE.MARKETS} onClick={this.changeView}> Markets </Button>
                    <Button name={VIEW_STORE.PROPERTIES} onClick={this.changeView}> Properties </Button>
                    <Button name={VIEW_STORE.RESEARCH} onClick={this.changeView}> Research </Button>
                    <Button name={VIEW_STORE.WORLD_MAP} onClick={this.changeView}> World Map </Button>
                    <div>BUTTONS TO BE DEPRECATED</div>
                    <Button name={CONST_TO_BE_DEPRECATED.SAN_FRANCISCO} onClick={this.changeView}> San Francisco </Button>
                    < DeleteIdbButton />
                </ButtonGroup>
            </div>
        );
   }
}

function mapStateToProps(state){
    return {

   };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeGameWindowView: (game_window_view) => {
            dispatch(changeGameWindowView(game_window_view))
       }
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuToolbar);
