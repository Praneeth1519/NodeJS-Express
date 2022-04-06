const fs= require("fs");
var process = require('process');
/**
 * @param {*} memoryData
 */
module.exports =function memory_used() {
    const memoryData = process.memoryUsage()
    return(`${Math.round(memoryData.heapUsed / 1024 / 1024 * 100) / 100} MB`);
}