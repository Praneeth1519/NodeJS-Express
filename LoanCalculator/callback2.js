
    let order=(call_production)=>{
        console.log("Order processed");
        call_production();
    }
   
    
    
    // order(production=()=>{
    //     console.log("Order delivered");
    // })
    
    setTimeout(order(production=()=>{
             console.log("Order delivered");})
             ,2000);