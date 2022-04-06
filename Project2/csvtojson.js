const csv = require('csvtojson');
const _ = require("lodash");
const http = require('http');


var getTotalSalesByRegion= require('./getTotalSalesByRegion.js')
var getTotalSalesByCountry= require('./getTotalSalesByCountry.js')
var getTotalOnlineSalesByRegion= require('./getTotalOnlineSalesByRegion.js')
var getTotalOfflineSalesByRegion=require('./getTotalOfflineSalesByRegion.js')
var getTotalRevenueByCategory= require('./getTotalRevenueByCategory.js')
var getTotalUnitsSoldByCategory= require('./getTotalUnitsSoldByCategory.js')


const converter = csv().fromFile('./SalesRecords.csv')
    .then(jsondata => { return getRegions(jsondata) })
 
function getRegions(jsondata) {
    const jsondata_copy = jsondata;
    let regions = [];
    let category_itr = 0;
    for (let json_itr = 0; json_itr < jsondata.length; json_itr++) {
        if (regions.includes(jsondata[json_itr].Region) == false) {
            regions[category_itr] = jsondata[json_itr].Region;
            category_itr++;
        }
    }
    createRegionObjects(regions, jsondata_copy);
}
function createRegionObjects(regions, jsondata_copy) {
    let region_array = [];
    let countries_array = [];
    let categories_array = []; 
    let countries = []; 
    let categories = [];
    for (let reg_itr in regions) {
        let TotalRevenue = 0, TotalCost = 0, TotalProfit = 0, Total_Cost = 0, Total_Profit = 0, Totalcost = 0, Totalprofit = 0; TotalSales = 0;
        let category_itr = 0, country_itr = 0;
        let online_sales = 0, offline_sales = 0;
        countries = [];
        categories = [];
        for (let json_itr in jsondata_copy) {
            if (regions[reg_itr] == (jsondata_copy[json_itr].Region)) {
                TotalRevenue = parseFloat(TotalRevenue) + parseFloat(jsondata_copy[json_itr]['Total Revenue'])
                TotalCost = parseFloat(TotalCost) + parseFloat(jsondata_copy[json_itr]['Total Cost'])
                TotalProfit = parseFloat(TotalProfit) + parseFloat(jsondata_copy[json_itr]['Total Profit'])
                if (jsondata_copy[json_itr]['Sales Channel'] === "Online")
                    online_sales++;
                else {
                    offline_sales++;
                }
                TotalSales = online_sales + offline_sales;
                if (categories.includes(jsondata_copy[json_itr]['Item Type']) == false) {
                    categories[category_itr] = jsondata_copy[json_itr]['Item Type'];
                    category_itr++;
                }
                if (countries.includes(jsondata_copy[json_itr].Country) == false) {
                    countries[country_itr] = jsondata_copy[json_itr].Country;
                    country_itr++;
                }
            }
        }
        for (let category in categories) {
            Total_Cost = 0;Total_Profit = 0;TotalUnitsSold = 0; OnlineSales = 0, OfflineSales = 0; TotalSales = 0;
            for (let json_itr in jsondata_copy) {
                    if (categories[category] === jsondata_copy[json_itr]['Item Type']) {
                        TotalUnitsSold = parseFloat(TotalUnitsSold) + parseFloat(jsondata_copy[json_itr]['Units Sold'])
                        Total_Cost = parseFloat(Total_Cost) + parseFloat(jsondata_copy[json_itr]['Total Cost'])
                        Total_Profit = parseFloat(Total_Profit) + parseFloat(jsondata_copy[json_itr]['Total Profit'])
                        if (jsondata_copy[json_itr]['Sales Channel'] == "Online") {
                            OnlineSales++;
                        }
                        else { OfflineSales++; }
                        TotalSales = OnlineSales + OfflineSales;
                    }
            }
            let category_obj = {
                Category_Name: categories[category],
                TotalUnitsSold: TotalUnitsSold,
                TotalProfit: Total_Profit,
                TotalCost: Total_Cost,
                OnlineSales: OnlineSales,
                OfflineSales: OfflineSales,
                TotalSales: TotalSales
            };
            categories_array.push(category_obj);
        }
        for (let country in countries) {
            TotalSales = 0; Totalcost = 0, Totalprofit = 0
            for (let i in jsondata_copy) {
                if (regions[reg_itr] == jsondata_copy[i].Region) {
                    if (countries[country] == jsondata_copy[i].Country) {
                        Totalcost = parseFloat(Totalcost) + parseFloat(jsondata_copy[i]['Total Cost'])
                        Totalprofit = parseFloat(Totalprofit) + parseFloat(jsondata_copy[i]['Total Profit'])
                        if (jsondata_copy[i]['Sales Channel'])
                            TotalSales++;
                    }
                }
            }
            let country_obj = {
                Country_Name: countries[country],
                TotalProfit: Totalprofit,
                TotalCost: Totalcost,
                TotalSales: TotalSales
            };
            countries_array.push(country_obj);
        }
        let obj = {
            Region: regions[reg_itr],
            TotalRevenue: TotalRevenue,
            TotalCost: TotalCost,
            TotalProfit: TotalProfit,
            Total_Online_Sales: online_sales,
            Total_Offline_Sales: offline_sales,
            Total_Categories: categories_array,
            Array_of_Countries: countries_array
        };
        region_array.push(obj);
    }

    getTotalSalesByRegion(region_array);
    getTotalSalesByCountry(countries_array);
    getTotalOnlineSalesByRegion(region_array);
    getTotalOfflineSalesByRegion(region_array);
    getTotalRevenueByCategory(categories_array,categories);
    getTotalUnitsSoldByCategory(categories_array);
}