function a(call){
    console.log("In a")
    //document.getElementById("parent").innerHTML="In a"
    call;
}

function b(){
    console.log("In b")
    //document.getElementById("child").innerHTML="In b"
}
//a(b())
setTimeout(a,2000,b())
