import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FETCH_ALL_FACTORIES_BY_playerId} from '../sagas/factories'
import DataTables from 'material-ui-datatables';
import {getCity} from '../indexedDB/api/cities_request';
import {TableDataParser} from '../utilities/tableDataParser'
import _ from "lodash";

// todo: Not complete.  What if player_selectedId prop is null???
// todo: need more general method to get column structures.  Have it be dynamic!
export class Properties extends Component{
    constructor(props){
        super(props);

        this.state = {
            tableData: []
        };
        this.columns = [];
        this.fetchCityName = this.fetchCityName.bind(this);
    }

    updateTableData(newState){
        if (!newState){
            console.log('updateTableData() missing input variable');
            return;
        }

        this.setState((prevState, props) => {
            return {
                ...prevState,
                tableData: newState,
            }
        })
    }

    renderTableEntry(name, all){
        return name
    }

    // Need someway to fetch data
    fetchCityName(cityId) {
        return getCity(cityId).then(response => {
            return response.name;
        });
    }

    componentDidMount(){
        if (this.props.selected_playerId){
            this.props.fetchAllFactoriesByPlayerId(this.props.selected_playerId);
        }
    }

    shouldComponentUpdate(){
        return true
    }

    // comment: we can improve this.  Only send one request for unique data.
    componentWillReceiveProps(nextProps) {
        // when we have props updated, now let's fetch all data
        if (this.props !== nextProps){
            // testing datatable
            const parser = new TableDataParser(
                [
                    {
                        tableName: 'CITIES',
                        tableEntityAttr: 'name',
                        tableColumnName: 'City',
                        tableId: 'cityId',

                    },
                    {
                        tableName: 'CITIES',
                        tableEntityAttr: 'population',
                        tableColumnName: 'City Population',
                        tableId: 'cityId',

                    },
                    {
                        tableName: 'FACTORIES',
                        tableColumnName: 'Factory Size',
                        tableEntityAttr: 'size',
                        tableId: '',
                    },
                    {
                        tableName: 'PRODUCTS',
                        tableColumnName: 'Manufactured Product',
                        tableEntityAttr: 'name',
                        tableId: 'productId',
                    },

                ]
            );

            // comment: comeback and replace with more concise method.
            // comment: Should probably put in my tableDataParser.js
            parser.parse(nextProps.factories).then(response => {
                this.tableData = parser.tableData(nextProps.factories, response);
                this.columns = parser.columns(nextProps.factories, response);
                this.updateTableData(this.tableData);
            });
        }
    }

    render(){
        return (
            <DataTables
                height = {'auto'}
                // selectable = {true}
                columns = {this.columns}
                data = {this.state.tableData}
            />
        )
    }
}

function mapStateToProps(state){
    return {
        selected_playerId: state.player.selectedId,
        factories: state.factories.factories,
        selected_factory: state.selected_factory,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchAllFactoriesByPlayerId: (playerId=null) => {
            dispatch({type: FETCH_ALL_FACTORIES_BY_playerId, playerId})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Properties)