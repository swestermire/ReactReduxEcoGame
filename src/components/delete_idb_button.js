/**
 * Created by stevenwestermire on 8/20/17.
 */
import React, {Component} from 'react';
// import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {iDB} from '../indexedDB/api/index'
import idb from "idb";

export class DeleteIdbButton extends Component {
    deleteIdb(){
        iDB.deleteTables()
    }

    checkDBVersion(){
        idb.open('EcoGameIDB').then(db => {console.log(db)})
    }

    getAllPlayers(){
        idb.open('EcoGameIDB').then(db => {
            const transaction = db.transaction('FACTORIES', 'readonly');
            transaction.objectStore('FACTORIES').getAll().then( request => {
                console.log('Players are', request)
            });
        })
    }

    render(){
        return (
            <div>
                <Button onClick={this.deleteIdb.bind(this)}> Delete Indexed DB  </Button>
                <Button onClick={this.checkDBVersion}> Check DB Object </Button>
                <Button onClick={this.getAllPlayers}> Get All Players </Button>
            </div>

            )
   }
}