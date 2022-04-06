const fs= require('fs')
/**
 * function for counting no of words in file
 * @returns 
 */
 module.exports= function count_words(data){
    return (data.split(" ").length);
}
