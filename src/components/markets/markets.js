/**
 * Created by stevenwestermire on 8/19/17.
 */
import React, {Component} from "react";
import {Panel, Media, Button} from "react-bootstrap";
import {Transaction} from "../transactions/window";

export class Markets extends Component {
    sendSupply(){
        this.props.updateLumberSupply(5);
   }

    return_balance(){
        if (this.props.playerIsFetching){
            return "Loading...";
       } else if (this.props.fetchPlayerHasErrored){
            return "Loading error...";
       } else {
            return this.props.player.selected.balance
       }

   }

    render(){
        let lumber_demand = this.props.lumber_demand;
        let lumber_price = this.props.lumber_price;
        let lumber_supply = this.props.lumber_supply;
        let balance = this.return_balance();

        return (
             <Panel>
                <Media>
                    <Media.Left>
                        <img
                            width={64}
                            height={64}
                            src="../public/images/products/raw_resources/lumber.jpg"
                            alt="image" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading> Lumber </Media.Heading>
                        <p> This is lumber... like wood. </p>
                    </Media.Body>
                </Media>
                <Button onClick={this.sendSupply.bind(this)}> + </Button>
                <Button> - </Button>

                <Panel> Demand: {lumber_demand} </Panel>
                <Panel> Stockpile: {lumber_supply} </Panel>
                <Panel> Price: ${lumber_price} </Panel>

                 <Transaction
                     resource_type="Lumber"
                     quantity_avail = {this.props.lumber_supply}
                     price = {this.props.lumber_price}
                     player= {this.props.player}
                     game_date = {this.props.game_date}
                 />
            </Panel>
        )
   }
}