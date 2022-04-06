let shopstatus=true;

function takeorder(shopstatus,call_orderdelivered){
    if(shopstatus){
    setTimeout(()=>{
        console.log("1: Order taken"); 
        //call_orderdelivered();
   },2000);
   call_orderdelivered();
}
else{
    console.log("Shop closed");
}  }

function orderdelivered(){
     console.log("2: Order delivered");
}


takeorder(shopstatus,orderdelivered);