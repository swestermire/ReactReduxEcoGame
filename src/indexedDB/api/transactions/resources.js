/**
 * Created by stevenwestermire on 8/27/17.
 */
import {TABLE_NAMES} from '../../../DATA_CONSTANTS'
import {iDB} from '../index';
import {PURCHASE_REQUIREMENTS, SALE_REQUIREMENTS} from '../resource_tickets_request'


let purchaseResourceTable = TABLE_NAMES.PURCHASE_RESOURCE_TICKETS;
let saleResrcTable = TABLE_NAMES.SALE_RESOURCE_TICKETS;

// // intention of this function is to execute resource transactions from resource_purchase_tickets queue.
// export function calc_resource_transactions(){
//     // get all purchase resource tickets
//     let openRequest = indexedDB.open(iDB.name);
//
//     openRequest.onerror = (event) => {
//         console.log(`iDB error occurred when fetching purchase resource tickets.`, event)
//    };
//
//     openRequest.onsuccess = (event) => {
//         let db = event.target.result;
//
//         // getting purchases from indexDB here
//         let purchTransaction = db.transaction(purchaseResourceTable, 'readwrite');
//         let purchObjectStore = purchTransaction.objectStore(purchaseResourceTable);
//         let purchaseRequests = purchObjectStore.getAll().target;
//
//         // getting sales from indexDB here
//         let saleTransaction = db.transaction(saleResrcTable, 'readwrite');
//         let saleObjectStore = saleTransaction.objectStore(saleResrcTable);
//
//         purchaseRequests.onsuccess = (request) => {
//             console.log(`purchaseRequests is ${purchaseRequests}`);
//
//             // now that we have all our purchase request... let's do stuff with them
//             purchaseRequests.forEach = (request) => {
//                 let quantity = request[PURCHASE_REQUIREMENTS.QUANTITY];
//                 let indices_query, value_query = indexDB_query_builder(query);
//
//                 // TODO-1: There might be multiple scenarios here... but maybe not.  default min purchase
//                 // TODO-1: should get the highest quality.
//                 let salesRequests = saleObjectStore.index(indices_query).get(value_query);
//
//                 while (!salesRequests) {
//
//                }
//
//                 console.log(`salesRequests ${salesRequests}`);
//
//                 // // fullfill order until its completed or no more purchases
//                 // while (quantity){
//                 //     let curr = salesRequests
//                 //}
//            }
//        };
//
//         purchaseRequests.onerror = (event) => {
//             console.log(`Purchase requests were not received`, event)
//        };
//
//    };
//
//     // for each resource ticket, query indexedDB to see if criteria is met.  Hopefully indexedDB
//     // has decent query functionality
//
//     // post completed transactions to COMPLETE_TRANSACTIONS_TABLE
//     // Modify or delete resource tickets.
//
//}
//
// // Clean up function.  Orders over a year old will be deleted.
// export function cleanup_purcahse_tickets(){
//
//}
//
// function indexDB_query_builder(request) {
//     let min_price = request[PURCHASE_REQUIREMENTS.MIN_PRICE];
//     let max_price = request[PURCHASE_REQUIREMENTS.MAX_PRICE];
//     let min_quality = request[PURCHASE_REQUIREMENTS.MIN_QUALITY];
//     let max_quality = request[PURCHASE_REQUIREMENTS.MAX_QUALITY];
//     let return_indices = [];
//     let return_compiled_query = [];
//
//     // range bound (lower, upper) and equality bound left then right (true or false (default), option)
//     // false is bound, true is unbound
//
//     // determine which indices to search and applicable search query
//     if (min_price !== 0 || max_price !== Infinity){
//         return_indices.push(PURCHASE_REQUIREMENTS.PRICE);
//         let query;
//         if (min_price !== 0 && max_price !== Infinity){
//             query = IDBKeyRange.bound(min_price, max_price)
//        } else if ( min_price !== 0 ){
//             query = IDBKeyRange.lowerBound(min_price)
//        } else {
//             query = IDBKeyRange.upperBound(max_price)
//        }
//         return_compiled_query.push(query);
//    }
//
//
//     if (min_quality !== 0 || max_quality !== Infinity){
//         return_indices.push(PURCHASE_REQUIREMENTS.PRICE);
//         let query;
//         if (min_quality !== 0 && max_quality !== Infinity){
//             query = IDBKeyRange.bound(min_quality, max_quality)
//        } else if (min_quality !== 0){
//             query = IDBKeyRange.lowerBound(min_quality);
//        } else {
//             query = IDBKeyRange.upperBound(max_quality);
//        }
//         return_compiled_query.push(query)
//    }
//
//     return return_indices.toString(), return_compiled_query
//}