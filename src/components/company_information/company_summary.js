import React, {Component} from 'react';
import {getPlayer} from '../../indexedDB/api/players_request';
import {List, ListItem} from 'material-ui/List';
import {Card} from 'material-ui/Card';

const cardStyle = {
    marginBottom: 20,
    marginTop: 10,
};

const liStyle = {

};

// comment: Not Done.
export default class CompanySummary extends Component{
    constructor(props){
        super(props)
        // console.log('selected_player is');
        // console.log(this.props)
   }

    componentDidMount(){
        // this.player_info = getPlayer(this.props.player.selectedId);
        this.debt = '';
        this.name = '';
        this.balance = '';
   }

    render(){
        if (this.props.player.selected) {
            this.balance = `Balance: $${this.props.player.selected.balance}`;
            this.debt = `Debt: $${this.props.player.selected.debt}`;
            this.name = `CEO: ${this.props.player.selected.name}`;
            this.company_name = `Company: Name`;
       }

        return (
            <Card style={cardStyle}>
                <List>
                    <ListItem primaryText={this.company_name}
                              hoverColor="transparent"
                              style={liStyle}/>
                    <ListItem primaryText={this.name}
                              hoverColor="transparent"
                              style={liStyle}/>
                    <ListItem primaryText={this.name}
                              hoverColor="transparent"
                              style={liStyle}/>
                    <ListItem primaryText={this.balance}
                              hoverColor="transparent"
                              style={liStyle}/>
                    <ListItem primaryText={this.debt}
                              hoverColor="transparent"
                              style={liStyle}/>
                    <ListItem primaryText="Something else: Something else"
                              hoverColor="transparent"
                              style={liStyle}/>
                </List>
            </Card>
        )
   }
}