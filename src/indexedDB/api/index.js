/**
 * Created by stevenwestermire on 8/11/17.
 */

// indexedDB will be used as a client-side data store.  Data through idxDB is persistent
// but data will be lost when a user deletes/clears browser cache/data

import {TABLE_NAMES} from "../../DATA_CONSTANTS";
import {errorHandler} from "./utilities";
import {start_up_data} from "../../testing_config";
import {config} from "../../config";
import idb from "idb";

class IndexedDB {
    constructor(name, table_names, start_up_data=null){
        // startup_data:: (optional) {table_name: [list/array of objects]}
        // Array of table names
        this.name = name;
        this.tableNames = Object.values(table_names);
        this.startUpData = start_up_data;
        this.startUp();
        // this.bumpVersion();
   }

    startUp(){
        // check to see if browser support idb
        if (!('indexedDB' in window)){
            console.log('This browser does not support indexedDB');
            return;
        }

        // cycle through tables and make sure they're up to date
        idb.open(this.name, 1, db => {
            switch (db.oldVersion){
                case 0:
                    this.tableNames.forEach((tableName)=>{
                        this.createStore(tableName, db)
                    });

                    this.createStore('isUpdated', db)
            }
        }).then(db => {
            if (db.version === 1){
                this.tableNames.forEach(tableName => {
                    this.addStartUpData(tableName, db)
                });

                // this.markDBUponCreation(db)
            }
        })
    }

    markDBUponCreation(db){
        const transaction = db.transaction('isUpdated', 'readwrite')
        transaction.objectStore('isUpdated').get(1).then(result => {
            if (!result){
                transaction.objectStore('isUpdated').put(true);
            }
        })
    }

    createStore(tableName, db){
        db.createObjectStore(tableName, {keyPath: "id", autoIncrement: true})
    }

    addStartUpData(tableName, db){
        if (this.startUpData.hasOwnProperty(tableName)){
            let data = this.startUpData[tableName];
            let transaction = db.transaction(tableName, 'readwrite');
            data.forEach((entry)=>{
                console.log(`Adding`, entry);
                transaction.objectStore(tableName).put(entry);
            });
            transaction.complete;
        }
    }

    add_table(table_name){

    }

    // this should probably check to see if DB exists and what revision DB is at.
    // Decide if the table needs to be updated or not.
    table_exists(table_name){

    }

    check_table_version(table_name){

    }

   deleteTables(){
        idb.delete(this.name).then(() => {
            console.log(`${this.name} was deleted.`)
        })
   }

   openDB(){
       return idb.open(this.name)
   }
}

let init_data;
if (config.development === true){init_data = start_up_data}
export const iDB = new IndexedDB(`EcoGameIDB`, TABLE_NAMES, init_data);
