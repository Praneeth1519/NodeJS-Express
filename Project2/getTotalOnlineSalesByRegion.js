const _ = require("lodash");

    //Find the region with highest with online sale
module.exports=function getTotalOnlineSalesByRegion(region_array){
        let TotalOnlineSalesByRegion = [];
        for (obj = 0; obj < region_array.length; obj++) {
            TotalOnlineSalesByRegion.push(region_array[obj].Total_Online_Sales);
        }
        const max_onlinesales_region = region_array.filter(d => d.Total_Online_Sales === _.max(TotalOnlineSalesByRegion));
        //console.log("Region with max Online sales: " + max_onlinesales_region[0].Region + " = " + _.max(TotalOnlineSalesByRegion));
    return "Region with max Online sales: " + max_onlinesales_region[0].Region;
    }