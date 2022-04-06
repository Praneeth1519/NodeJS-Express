//taking input from html page using arrow functions
const getHomeLoanAmount=()=>{return Number(document.getElementById("HomeLoanAmount").value)};
const getLoanTenure=()=>{return document.getElementById("LoanTenure").value};
const getInterestRate=()=>{return document.getElementById("InterestRate").value};

/**
 * function to calculate loanTenure in months
 * @returns 
 */
function months(){
   return getLoanTenure()*12;
}

/**
 * function to calculate emi
 * @param {*} monthlyInterest
 * @param {*} temp
 * @param {*} emi
 * @returns emi
 */
function getEmi(){
    //P * R * ((1+R)^N / [(1+R)^N-1])
    //P= PrincipalLoanAmount --> getHomeLoanAmount()
    //R= AnnualRateOfInterest/12/100 --> monthlyInterest
    //N= LoanTenure*12 --> months
    
    const monthlyInterest=getInterestRate()/12/100;
    const temp=Math.pow(1+monthlyInterest,months());
    let emi= getHomeLoanAmount()*monthlyInterest*(temp/(temp-1));
    return emi;
}

/**
 * function to calculate TotalAmountPayable
 * @param {*} Total
 * @returns Total
 */
function getTotal(){
    let Total=getEmi()*months();
    return Total;
}

/**
 * function to display the detailed calculations on web page
 */
function output(){
    //ouput in webpage
    document.getElementById("EMI").innerHTML= getEmi().toFixed();
    document.getElementById("LoanTaken").innerHTML= getHomeLoanAmount();
    document.getElementById("Interest").innerHTML= (getTotal()-getHomeLoanAmount()).toFixed();
    document.getElementById("TotalAmount").innerHTML= getTotal().toFixed();
}

/**
 * function to calculate the monthly detailed calculations
 * @param {*} Total
 * @param {*} list[]
 * @param {*} monthIntrest
 * @param {*} principal
 * @param {*} balanceLeft
 * 
 * @returns list
 */
function table(){
    output();
    emi=getEmi();
    let Total=getHomeLoanAmount();
    let list=[];
    //adding monthly details in array
    for(i=1;i<months()+1;i++){
        let monthIntrest=(Total*(getInterestRate()/12/100));
        let principal= emi-monthIntrest;
        let balanceLeft= Total-principal;
        if(balanceLeft<0){balanceLeft=0;}
        //Month= month -->list[1]
        //Total = Begining Loan Balance --> list[2]
        //emi = EMI --> list[3]
        //Princial = emi-monthIntrest --> list[4]
        //monthIntrest= monthIntrest--> list[5]
        //balanceleft= Closing Balance--> list[6]
        list[i]={Month: i,
            LoanAmount:Total.toFixed(),
            EMI:emi.toFixed(),
            Principal: (emi-monthIntrest).toFixed(),
            MonthlyIntrest: monthIntrest.toFixed(),
            ClosingBalance: Math.max(0,Total-principal).toFixed()
        };
        Total= Number(Total-principal);
    }
    
    return list;
}
/**
 * function to display table in html page
 * @param {*} arr
 * @param {*} html
 */
function printTable(){
   let arr=table();
   //console.log(arr)
   var html = "<table>";
   html+="<th>Month</th><th>LoanAmount</th><th>EMI</th><th>Principal</th><th>MonthlyIntrest</th><th>ClosingBalance</th>"
for (var i = 1; i <=arr.length; i++) {
    html+="<tr>";
    for(j in arr[i]){
    html+="<td>"+arr[i][j]+"</td>";
    }
    html+="</tr>";
}
html+="</table>";
document.getElementById("table").innerHTML = html;
}
