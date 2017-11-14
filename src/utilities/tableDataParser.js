import {CitiesSchema} from '../indexedDB/schema/cities'
import {getTableEntryById} from "../indexedDB/api/general_table_entry_requests";
import _ from 'lodash'

// comment: not done, maybe done???
// todo: maybe have a parser object be returned that can process column and row data? Might look nicer
// Purpose: To redux state data to fetch idb data in accordance
// to provided table column data
export class TableDataParser {
    constructor(tableConfig){
        this.tableConfig = tableConfig;
        this.validateConfig(this.tableConfig)
    }

    parse = (data, tableConfig=this.tableConfig) => {
        const mapping = this.getTableToIdMapping(tableConfig);

        // transforming data to be {cityId: [1,2,3,4,5], product_id: [1,2,3,4,5], etc}
        let transformed = {};

        _.forEach(data, (tableRow) => {
            _.forEach(tableRow, (id, state) => {
                if (mapping.hasOwnProperty(state)){
                    (transformed[state] || (transformed[state] = [])).push(id)
                }
            })
        });

        // Unique-ify hash values
        const tableKeyToEntryId = _.mapValues(transformed, (values) => {
            return _.sortedUniq(
                values.sort()
            )
        });

        // flatten data and have it structured by tableName: entityID: entityData
        this.iDBRowDataArray = this.fetchData(tableKeyToEntryId, mapping).then(response =>{
            let res = _.flatten(response);
            let finData = {};
            _.forEach(res, entity => {
                let id = entity.id;
                let tableName = entity.tableName;
                if (!_.has(finData, tableName)){finData[tableName] = {}}
                finData[tableName][id] = entity
            });
            return finData
        });
        return this.iDBRowDataArray;
    };


    fetchData(uniqueIds, mapping){
        return Promise.all(
            _.map(uniqueIds, (entryIds, tableKey) => {
                let tableName = mapping[tableKey];
                return new TableColumn(tableName, entryIds).getiDBEntries()
            })
        ).then(response => {
            if (_.isEmpty(response)){
                console.warn('Null response received when fetching table row')
            }

            return response
        }).catch(error => {
            console.error(`Error occurred when fetching tableData from iDB, ${error}`)
        })

    }

    tableData = (reduxState, data, tableConfig=this.tableConfig) => {
        let tableData = [];
        _.forEach(reduxState, (row) => {
            let tableDataRow = {};
            _.forEach(tableConfig, rowConfig => {
                let key = `${rowConfig.tableName}_${rowConfig.tableEntityAttr}`;
                let id = row[rowConfig.tableId];
                let value;
                if (!id){
                    value = row[rowConfig.tableEntityAttr]
                } else {
                    value = data[rowConfig.tableName][id][rowConfig.tableEntityAttr]
                }

                tableDataRow[key] = value;
            });
            tableData.push(tableDataRow)
        });

        return tableData;
    };

    columns = (nextProps, iDBTableData, tableConfig = this.tableConfig) => {
        return _.map(tableConfig, rowConfig => {
            return {
                key: `${rowConfig.tableName}_${rowConfig.tableEntityAttr}`, // this maps to reduxState,
                label: rowConfig.tableColumnName, // label for column
                render: (name) => name
            }
        })
    };

    getTableToIdMapping(tableConfig){
        return _.filter(tableConfig, entry => {
            return entry.tableId;
        })
            .reduce((result, entity) => {
                let state = entity.tableId;
                let tableName = entity.tableName;
                if (!result.hasOwnProperty(state)) {
                    result[state] = tableName
                }
                return result
            }, {})
    }

    validateConfig(tableConfig) {
        // thinking about putting this in a decorator at the redux reducers
    };
}



class TableColumn{
    constructor(tableName, ids){
        this.tableName = tableName;
        this.ids = ids
    }

    getiDBEntries(){
        return Promise.all(
            _.map(this.ids, id => {
                    return getTableEntryById(this.tableName, id)
                }
            )
        ).then( response => {
            if (_.isEmpty(response)){
                console.warn('Null response received getting table data')
            }
            // return {[this.tableName]: response}
            return _.map(response, entity => {
                entity.tableName = this.tableName;
                return entity
            })
        }).catch(error => {
            console.error(`error occurred when fetching table data, ${error}`)
        })
    }
}