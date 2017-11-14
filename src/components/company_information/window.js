import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Panel, Button} from 'react-bootstrap';
import {Financials} from "../../containers/financials";
import CompanySummary from './company_summary';
import Properties from "../../containers/properties";
import {Tabs, Tab} from 'material-ui/Tabs';

// comment: not done
export default class CompanyInfoWindow extends Component {
    constructor(props){
        super(props);
        // this.renderFinancialsView = this.renderFinancialsView.bind(this)
    }

    render(){
        return (
            <div>
                <CompanySummary
                    player={this.props.player}
                />

                <Tabs>
                    <Tab label="Tab One">
                        <Properties />
                    </Tab>
                    <Tab label="Financials">
                        <Financials />
                    </Tab>
                    <Tab label="Tab Three">
                        <Panel>
                            Something equally stupid
                        </Panel>
                    </Tab>
                </Tabs>

            </div>
        )
   }

}