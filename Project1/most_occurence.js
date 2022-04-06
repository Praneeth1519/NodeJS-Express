const { countReset } = require('console');
const fs= require('fs');
const countWords = require("count-words");
/**
 * function to find most occured word in file
 * @param {*} data
 * @param {*} words[]
 * @param {*} occurances{}
 * @param {*} max
 * @param {*} mostRepeatedWord
 * @returns mostRepeatedWord
 */

 module.exports=function most_occurence(data) {
  //let data = read_file(path);
  let wordCount = countWords(data,true);
  let words = Object.keys(wordCount);
  let count = 0;
  let mostRepeatedWord = '';
  for (let word of words) {
      if (wordCount[word] > count) {
          count = wordCount[word];
          mostRepeatedWord = word;
      }
  }
  return("Word with highest occurance: " + mostRepeatedWord + " (" + count + " times)");
}