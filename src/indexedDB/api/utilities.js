export function errorHandler(err, name=null){
    let err_desc = ``;
    if (table_name){
        err_desc = `Error in ${name}.\n`;
   }
    let err_msg = `\n${err_desc}. Error is ${err}`;
    console.log(`\nERROR: ${err_msg}`)
}