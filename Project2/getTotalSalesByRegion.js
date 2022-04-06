const _ = require("lodash");

//Find the Region with highest and lowest sale
 module.exports=function getTotalSalesByRegion(region_array){
    let TotalSalesByRegion = [];
    for (obj = 0; obj < region_array.length; obj++) {
        TotalSalesByRegion.push(region_array[obj].Total_Offline_Sales + region_array[obj].Total_Online_Sales);
    }
    const max_region = region_array.filter(d => d.Total_Offline_Sales + d.Total_Online_Sales === _.max(TotalSalesByRegion));
    //console.log("Region with max sales: " + max_region[0].Region + " = " + _.max(TotalSalesByRegion));
    const min_region = region_array.filter(d => d.Total_Offline_Sales + d.Total_Online_Sales === _.min(TotalSalesByRegion));
    //console.log("Region with min sales: " + min_region[0].Region + " = " + _.min(TotalSalesByRegion));

    return "Region with max sales: " +max_region[0].Region+", "+"Region with min sales: " +min_region[0].Region;
     }