const fs= require('fs')
/**
 * function to copying a file
 * @returns
 */
 module.exports= function copy_file(source,destination){
    fs.copyFileSync(source, destination);
    return("File copied Successfully");
  }