const fs= require('fs')
/**
 * function to find no of files in directory
 * @returns 
 */

 module.exports=function no_of_files(path) {
    return(fs.readdirSync(path).filter(file => (fs.lstatSync(file).isFile() && file != ".gitignore")).length)
}
