const _= require('lodash');

//Find the category for which maximum units sold
module.exports=function getTotalUnitsSoldByCategory(categories_array){
    let TotalUnitsSoldByCategory = [];
        for (obj = 0; obj < categories_array.length; obj++) {
            TotalUnitsSoldByCategory.push(categories_array[obj].TotalUnitsSold);
        }
        const max_units = categories_array.filter(d => d.TotalUnitsSold === _.max(TotalUnitsSoldByCategory));
        // console.log("Category with max units sold: " + max_units[0].Category_Name + " = " + _.max(TotalUnitsSoldByCategory));

        return "Category with max units sold: " + max_units[0].Category_Name;
    }
    