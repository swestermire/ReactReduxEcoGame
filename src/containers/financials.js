import React, {Component} from 'react';
import {connect} from 'react-redux';
import DataTables from 'material-ui-datatables';


// comment: Look into react-bootstrap-table
// comment: Table should really be something log material transactions

// comment: not done
export class Financials extends Component {
    constructor(props) {
        super(props);

        this.data = [
            {
                date: 'stupid',
                quantity: '$1',
                product_name: '100',
                transaction_type: '12392180',
                unit_price: 'aadjsl',
                transaction_value: 'asdsd'
            },
        ];

        const column_entries = [
            ['date', 'Date'],
            ['transaction_type', "Transaction Type"],
            ['product_name', 'Product Name'],
            ['quantity', 'Quantity'],
            ['unit_price', 'Unit Price'],
            ['transaction_value', 'Transaction Value']
        ];

        this.columns = column_entries.map(entry =>{
            return {
                key: entry[0],
                label: entry[1]
            }
        });
    }

    render(){
        return (
            <DataTables
                height = {'auto'}
                // selectable = {true}
                columns = {this.columns}
                data = {this.data}
            />
        )
   }
}

const mapStateToProps = (state) => {
    return {
        player: state.player,
        // players: state.player.all,
    }
};

export default connect(mapStateToProps,)(Financials);