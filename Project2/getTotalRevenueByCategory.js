const _ = require("lodash");

//Find the category with highest and lowest revenue
module.exports=function getTotalRevenueByCategory(categories_array,categories){
    let TotalRevenueByCategory = [];
    for (obj = 0; obj < categories_array.length; obj++) {
        TotalRevenueByCategory.push(categories_array[obj].TotalCost + categories_array[obj].TotalProfit);
    }
   // console.log("Number of categories = "+categories.length);
    const max_category = categories_array.filter(d => d.TotalCost + d.TotalProfit === _.max(TotalRevenueByCategory));
    //console.log("Category with max revenue: = "+max_category[0].Category_Name + " = " + _.max(TotalRevenueByCategory));
    const min_category = categories_array.filter(d => d.TotalCost + d.TotalProfit === _.min(TotalRevenueByCategory));
    //console.log("Category with min revenue: " + min_category[0].Category_Name + " = " + _.min(TotalRevenueByCategory));

    return "Number of categories = "+categories.length+"   "+"Category with max revenue: "+max_category[0].Category_Name+", "+"Category with min revenue: " + min_category[0].Category_Name;
}