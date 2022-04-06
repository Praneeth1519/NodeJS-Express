const _ = require("lodash");

//Find the country with highest and lowest sale
    module.exports=function getTotalSalesByCountry(countries_array){
        let TotalSalesByCountry = [];
        for (obj = 0; obj <countries_array.length; obj++) {
            TotalSalesByCountry.push(countries_array[obj].TotalSales);
        }
        const max_country = countries_array.filter(d => d.TotalSales === _.max(TotalSalesByCountry));
        //console.log("Country with max sales: " + max_country[0].Country_Name + " = " + _.max(TotalSalesByCountry));
        const min_country = countries_array.filter(d => d.TotalSales === _.min(TotalSalesByCountry));
        //console.log("Country with min sales: " + min_country[0].Country_Name + " = " + _.min(TotalSalesByCountry));

        return "Country with max sales: " + max_country[0].Country_Name+", "+"Country with min sales: " + min_country[0].Country_Name;
    }