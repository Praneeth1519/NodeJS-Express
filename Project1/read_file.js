const fs= require('fs');

/**
 * function for Reading a file
 * @param {*} data
 * @returns data
 */
 module.exports= function read_file(path){
    var data= fs.readFileSync(path,"utf8");
    //console.log("Stored in variable 'data' successfully");
    return data;
}
