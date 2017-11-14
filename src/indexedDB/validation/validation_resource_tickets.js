/**
 * Created by stevenwestermire on 8/27/17.
 */


// How is this going to work with product quality.... maybe we can have requirements to say
// max/min quality and of course price...

import {SALE_REQUIREMENTS,
         PURCHASE_REQUIREMENTS} from '../api/resource_tickets_request';

// validate ticket will return a response status of 1 if its valid; otherwise, 0 if not validated
function validate_ticket(ticket, validation_key){

    let response = {missing_info: [], validated: true};
    let purchase_reqs = Object.values(validation_key);

    purchase_reqs.forEach = ( req ) => {
        if (!ticket.hasOwnProperty(req) || ticket[req] === undefined) {
            response.missing_info.push(req);
            response.validated = false;
       }
   };

    if (!response.validated){
        response.error_msg = build_error_msg(response.missing_info);
   }

    return response;
}

export function validate_purchase_ticket(ticket){
    return validate_ticket(ticket, PURCHASE_REQUIREMENTS)
}

export function validate_sale_ticket(ticket){
    return validate_ticket(ticket, SALE_REQUIREMENTS)
}

function build_error_msg(missing_info){
    let error_msg = '';
    missing_info.forEach( info => {
        error_msg += `\nMissing ${info}`
   });
    return error_msg;
}
