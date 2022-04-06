const copy_file= require('./copy_file.js')
const read_file= require('./read_file.js')
const count_words= require('./count_words.js')
const count_lines= require('./count_lines.js')
const most_occurence= require('./most_occurence.js')
const no_of_directories=require('./no_of_directories.js')
const no_of_files=require('./no_of_files.js')
const memory_used=require('./memory_used.js')


console.log(copy_file.copy_file('source/dummy.txt','destination/copy_dummy.txt'));
const data=read_file.read_file("source/dummy.txt")
console.log("No of words: "+ count_words.count_words(data));
console.log("No of lines: "+ count_lines.count_lines(data));
console.log("Most repeated word: "+most_occurence.most_occurence(data));
no_of_directories.no_of_directories('C:/Users/praneeth.sai.chippa/JavaScript/Project1');
no_of_files.no_of_files('C:/Users/praneeth.sai.chippa/JavaScript/Project1');
console.log(memory_used.memory_used());