module.exports= function Analytics(){
    
    //Find the Region with highest and lowest sale
    function getTotalSalesByRegion(){
    let TotalSalesByRegion = [];
    for (obj = 0; obj < region_array.length; obj++) {
        TotalSalesByRegion.push(region_array[obj].Total_Offline_Sales + region_array[obj].Total_Online_Sales);
    }
    const max_region = region_array.filter(d => d.Total_Offline_Sales + d.Total_Online_Sales === _.max(TotalSalesByRegion));
    console.log("Region with max sales: " + max_region[0].Region + "-" + _.max(TotalSalesByRegion));
    const min_region = region_array.filter(d => d.Total_Offline_Sales + d.Total_Online_Sales === _.min(TotalSalesByRegion));
    console.log("Region with min sales: " + min_region[0].Region + "-" + _.min(TotalSalesByRegion));
    }

    //Find the country with highest and lowest sale
    function getTotalSalesByCountry(){
    let TotalSalesByCountry = [];
    for (obj = 0; obj < countries_array.length; obj++) {
        TotalSalesByCountry.push(countries_array[obj].TotalSales);
    }
    const max_country = countries_array.filter(d => d.TotalSales === _.max(TotalSalesByCountry));
    console.log("Country with max sales: " + max_country[0].Country_Name + "-" + _.max(TotalSalesByCountry));
    const min_country = countries_array.filter(d => d.TotalSales === _.min(TotalSalesByCountry));
    console.log("Country with min sales: " + min_country[0].Country_Name + "-" + _.min(TotalSalesByCountry));
}


    //Find the region with highest with online sale
    function getTotalOnlineSalesByRegion(){
    let TotalOnlineSalesByRegion = [];
    for (obj = 0; obj < region_array.length; obj++) {
        TotalOnlineSalesByRegion.push(region_array[obj].Total_Online_Sales);
    }
    const max_onlinesales_region = region_array.filter(d => d.Total_Online_Sales === _.max(TotalOnlineSalesByRegion));
    console.log("Region with max Online sales: " + max_onlinesales_region[0].Region + "-" + _.max(TotalOnlineSalesByRegion));
}
//Find the region with highest with offline sale
function getTotalOfflineSalesByRegion(){
    let TotalOfflineSalesByRegion = [];
    for (obj = 0; obj < region_array.length; obj++) {
        TotalOfflineSalesByRegion.push(region_array[obj].Total_Offline_Sales);
    }
    const max_offlinesales_region = region_array.filter(d => d.Total_Offline_Sales === _.max(TotalOfflineSalesByRegion));
    console.log("Region with max Offline sales: " + max_offlinesales_region[0].Region + "-" + _.max(TotalOfflineSalesByRegion));
}
//Find the category with highest and lowest revenue
function getTotalRevenueByCategory(){
    let TotalRevenueByCategory = [];
    for (obj = 0; obj < categories_array.length; obj++) {
        TotalRevenueByCategory.push(categories_array[obj].TotalCost + categories_array[obj].TotalProfit);
    }
    console.log("Number of categories-"+categories.length);
    const max_category = categories_array.filter(d => d.TotalCost + d.TotalProfit === _.max(TotalRevenueByCategory));
    console.log("Category with max revenue: " + max_category[0].Category_Name + "-" + _.max(TotalRevenueByCategory));
    const min_category = categories_array.filter(d => d.TotalCost + d.TotalProfit === _.min(TotalRevenueByCategory));
    console.log("Category with min revenue: " + min_category[0].Category_Name + "-" + _.min(TotalRevenueByCategory));
}
//Find the category for which maximum units sold
function getTotalUnitsSoldByCategory(){
let TotalUnitsSoldByCategory = [];
    for (obj = 0; obj < categories_array.length; obj++) {
        TotalUnitsSoldByCategory.push(categories_array[obj].TotalUnitsSold);
    }
    const max_units = categories_array.filter(d => d.TotalUnitsSold === _.max(TotalUnitsSoldByCategory));
    console.log("Category with max units sold: " + max_units[0].Category_Name + "-" + _.max(TotalUnitsSoldByCategory));
}
}