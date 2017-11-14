/**
 * Created by stevenwestermire on 8/10/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table, Button} from 'react-bootstrap';

//TODO: NEED TO FIGURE OUT HOW TO ITERATE THOUGH CIITES TO MAKE ARBITRARY NUMBER OF

class CitiesTable extends Component {
    constructor(props){
        super(props);

   }

    generateCityRows(){
        let to_return = [];

        Object.values(this.props.cities).forEach(function(city){
            to_return.push(
                `<tr><td>${city.name}</td><td>${city.population}</td></tr>`
            )
       });

        return to_return;
   }

    render(){
        //todo need to figure out how we can build arbitrary number of cities
        let city_rows = this.generateCityRows();

        return (
            <Table>
                <thead>
                    <tr>
                        <th> City Name </th>
                        <th> Population </th>
                        <th> Average Salary </th>
                        <th />
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.cities[1].name}</td>
                        <td>{this.props.cities[1].population}</td>
                        <td>${this.props.cities[1].avg_salary}</td>
                        <td><Button bsStyle="primary">Build Factory</Button></td>
                        <td><Button bsStyle="warning">See Economics</Button></td>
                    </tr>
                </tbody>
            </Table>
        )
   }

}

function mapStateToProps(state){
    return {
        cities: state.city.cities
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

   }
};

export default connect(mapStateToProps)(CitiesTable);