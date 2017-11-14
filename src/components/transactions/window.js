/**
 * Created by stevenwestermire on 8/20/17.
 */
// Transactions in this game (selling and buying of resources) will be modeled
// by transaction tickets, essentially, a ticket is posted (price, quantity, etc)
// to a transaction store that will be evaluated.
// I think modeling after stock exchange makes sense... i.e. purchase ticket will
// buy resources up to a certain price, not necessarily at its stated buy point.

// This idea really only works for resources that are not differentiated by brands.
// Still... there may be some advantages of this buy maintaining this idea of tickets when it comes to programming
// the AI of the game.  We could use this to affect the decision making process of the AI/

// Another thing to take into account with branded product, is that availability of supply should be taken into account.
// If AI chooses a high demand product with no/little opportunity of obtaining resources... then it should be less
// attractive for an AI to purchase said resource.

// With this idea however, we need to make sure AI's decision doesn't bounce around from buy and not buying this resource
// because of demand.  It might be prudent to have an AI re-evaluate the supply attractiveness every so often.

import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Panel, FormGroup, ControlLabel, FormControl, Form} from "react-bootstrap";
import {post_sale_ticket} from "../../indexedDB/api/resource_tickets_request";

function FieldGroup({id, label, resource_type, ...props}) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
}

// comment: let's have this window inherit props from the window its propogated from.
export class Transaction extends Component {

    getValidationState(){
        // comment: Any need to validate here? Probably...
        return;
   }

    postSaleTicket(event){
        let price = this.input_price;
        let qty = this.input_quantity;
        let date = this.props.game_date.unix();
        // prevents from page reloading
        event.preventDefault();
        return;
   }

    render(){
        return (
            <Panel>
                <Form onSubmit={this.postSaleTicket.bind(this)}>
                    <b>Resource Type</b>: {this.props.resource_type}
                    <FieldGroup
                        type="text"
                        id = "price-field"
                        label="Sale Price"
                        placeholder={`$${this.props.price}`}
                        inputRef={(ref)=>{this.input_price = ref}}
                    />
                    <FieldGroup
                        type="text"
                        id = "quantity-field"
                        label="Quantity to Sell"
                        placeholder={this.props.quantity_avail}
                        inputRef={(ref)=>{this.input_quantity = ref}}
                    />
                    <Button
                        type="submit"
                        // onClick = {this.postSaleTicket}
                        >
                        Submit
                    </Button>
                </Form>
            </Panel>
        )
   }
}

