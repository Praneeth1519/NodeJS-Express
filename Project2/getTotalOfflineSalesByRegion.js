const _ = require("lodash");

//Find the region with highest with offline sale
module.exports=function getTotalOfflineSalesByRegion(region_array){
    let TotalOfflineSalesByRegion = [];
    for (obj = 0; obj < region_array.length; obj++) {
        TotalOfflineSalesByRegion.push(region_array[obj].Total_Offline_Sales);
    }
    let max_offlinesales_region = region_array.filter(d => d.Total_Offline_Sales === _.max(TotalOfflineSalesByRegion));
    //console.log("Region with max Offline sales: " + max_offlinesales_region[0].Region + " = " + _.max(TotalOfflineSalesByRegion));
    return "Region with max Offline sales: " +max_offlinesales_region[0].Region;
}