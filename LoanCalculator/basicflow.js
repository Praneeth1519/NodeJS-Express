function takeorder(){
    console.log("1: Order taken");
}
function orderdelivered(){
    console.log("2: Order delivered");
}

let shopstatus=true;
if(shopstatus){
    takeorder();
    orderdelivered();
}
else{
    console.log("Shop closed")
}