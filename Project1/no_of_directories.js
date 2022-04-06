const fs= require('fs')
/**
 * function to find no of files in directory
 * @param {*} dir
 * @returns 
 */

 module.exports= function no_of_directories(path){
    return(fs.readdirSync(path).filter(file => (fs.lstatSync(file).isDirectory() && file !== "node_modules")).length);
}
