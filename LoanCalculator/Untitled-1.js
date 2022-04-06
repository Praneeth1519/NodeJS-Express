/*
the execution is in the following order .
*/
console.log(" I ");
console.log(" want ");
console.log(" admission ");
/*
the execution is in the following order  
 first line  and the third line then prints after 2 seconds the
 second line.
*/
console.log("I");
setTimeout(()=>{
  console.log("want");
},2000)
console.log("Admission")
/*
*input 
*/
let webSeries = {
    location : ["you", "13", "peaky"],
}
 /*
  * using callBacks
  */
//  let selection = (call_decision) =>{
//     console.log("Order placed. Please call production")
//     // function  is being called  here
//       call_decision();
//     };
//     // 2nd Function
//     let decision = () =>{
//     console.log("Production has started")
//     };
// // to call the function
//     selection(decision);
    /** 
     * using callbacks with settimeout function
     */
     let selection = (call_decision) =>{
        console.log("this method is called first")
        // function  is being called  here
          setTimeout(() => {
            call_decision();
          }, 5000); 
        };
        // 2nd Function
        let decision = () =>{
        console.log("The method decision is called 2nd after 5 seconds")
        };
    // to call the function
        selection(decision);
/**
 * using promises
 */
 let is_shop_open = true;
 let order = ( time, work ) => {
  return new Promise( ( resolve, reject )=>{
    if( is_shop_open ){
      setTimeout(()=>{
       // work is 👇 getting done here
        resolve( work() )
// Setting 👇 time here for 1 work
       }, time)
    }
    else{
      reject( console.log("Our shop is closed") )
    }
  })
}
order( 2000, ()=>console.log(`${admin.location[0]} was selected`))
.then(()=>{
  return order(0000,()=>console.log('production has started'))
})
.catch(()=>{
  console.log("Customer left")
})
.finally(()=>{
  console.log("end of day")
})
// asyunc funtion
/**
 * 
 */
async function kitchen(){
  try{
  }
  catch(error){
     console.log("abc does not exist", error)
  }
  finally{
     console.log("Runs code anyways")
  }
}
kitchen()  // run the code