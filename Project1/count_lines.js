const fs= require('fs')

/**
 * function to count no of lines in file
 * @returns 
 */
 module.exports= function count_lines(data){
    return (data.split("\n").length);
}
