/**
 * Created by stevenwestermire on 8/27/17.
 */
import {TABLE_NAMES} from '../../DATA_CONSTANTS'
import {validate_purchase_ticket,
         validate_sale_ticket} from '../validation/validation_resource_tickets'
import {iDB} from './index'

const CREATE_RESOURCE_TICKET = 'CREATE_RESOURCE_TICKET';

export const SALE_REQUIREMENTS = {PLAYER_INDEX: 'PLAYER_INDEX',
                                  RESOURCE_INDEX: 'RESOURCE_INDEX',
                                  PRICE: 'PRICE',
                                  BUILDING_INDEX: 'FACTORY_INDEX',
                                  QUALITY: 'QUALITY',
                                  QUANTITY: 'QUANTITY',
                                  DATE: 'DATE',
                                  COST: 'COST'};

export const PURCHASE_REQUIREMENTS = {PLAYER_INDEX: 'PLAYER_INDEX',
                                      RESOURCE_INDEX: 'RESOURCE_INDEX',
                                      MIN_PRICE: 'MIN_PRICE',
                                      MAX_PRICE: 'MAX_PRICE',
                                      BUILDING_INDEX: 'LOCATION',
                                      MIN_QUALITY: 'MIN_QUALITY',
                                      MAX_QUALITY: 'MAX_QUALITY',
                                      QUANTITY: 'QUANTITY'};

let sale_resrc_ticket_table = TABLE_NAMES.SALE_RESOURCE_TICKETS;
let purchase_resrc_ticket_table = TABLE_NAMES.PURCHASE_RESOURCE_TICKETS;
export function post_sale_ticket(ticket){

    // validate ticket
    let validate_ticket = validate_sale_ticket(ticket, SALE_REQUIREMENTS);
    if (!validate_ticket.validated){
        console.log(`Sale ticket not validated\n${validate_ticket.error_msg}`);
        return;
   }

    let openRequest = indexedDB.open(iDB.name);

    openRequest.onerror = (event) => {
        console.log(`An iDB error occurred when submitting resource sale ticket.`, event)
   };

    openRequest.onsuccess = (event) => {
        let db = event.target.result;
        let transaction = db.transaction(sale_resrc_ticket_table, 'readwrite');
        let objectStore = transaction.objectStore(sale_resrc_ticket_table);
        objectStore.add(
            ticket[SALE_REQUIREMENTS.PLAYER_INDEX],
            ticket[SALE_REQUIREMENTS.RESOURCE_INDEX],
            ticket[SALE_REQUIREMENTS.PRICE],
            ticket[SALE_REQUIREMENTS.BUILDING_INDEX],
            ticket[SALE_REQUIREMENTS.QUALITY],
            ticket[SALE_REQUIREMENTS.QUANTITY],
            ticket[SALE_REQUIREMENTS.COST],
            ticket[SALE_REQUIREMENTS.DATE]
        )
   };
}

export function post_purchase_ticket(ticket){

    // validate ticket
    let validate_ticket = validate_purchase_ticket(ticket, PURCHASE_REQUIREMENTS);
    if (!validate_ticket.validated){
        console.log(`Purchase ticket not validated\n${validate_ticket.error_msg}`);
        return;
   }

    let openRequest = indexedDB(iDB.name);

    openRequest.onerror = (event) => {
        console.log(`An iDB error occurred when posting a resource purchase ticket`, event)
   };

    openRequest.onsuccess = (event) => {
        let db = event.target.result;
        let transaction = db.transaction(purchase_resrc_ticket_table, 'readwrite');
        let objectStore = transaction.objectStore(purchase_resrc_ticket_table);
        objectStore.add(
            ticket[PURCHASE_REQUIREMENTS.QUANTITY],
            ticket[PURCHASE_REQUIREMENTS.PLAYER_INDEX],
            ticket[PURCHASE_REQUIREMENTS.RESOURCE_INDEX],
            ticket[PURCHASE_REQUIREMENTS.MIN_PRICE],
            ticket[PURCHASE_REQUIREMENTS.MAX_PRICE],
            ticket[PURCHASE_REQUIREMENTS.MIN_QUALITY],
            ticket[PURCHASE_REQUIREMENTS.MAX_QUALITY],
            ticket[PURCHASE_REQUIREMENTS.BUILDING_INDEX],
        )
   }
}