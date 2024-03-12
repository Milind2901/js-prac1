/* CONTROL FLOW 

==   Just compares the value 
===  Compares value as well the type


*/ 

// Implicit scope statetments 

if(balance > 500) console.log("test") , console.log("test2") ; 

// SWITCH STATEMENT Syntax
switch (key) {
    case value:
        
        break;

    default:
        break;
}

/* If break statement is not there 
then the code executes all the code after the matched case -except the default one  
*/

// TRUTHY & FALSY VALUES 

//Falsy Values - matlab kin kin values ko false assume kiya jata hai 

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// Truthy Values - assumed true values

// "0" , 'false' , " ", [] , {} , function(){}

// Checking for empty array 

const Empty_arr = []

if (Empty_arr.length === 0){
    console.log("Array is empty") ;
}

// Checking for empty Object 

const Empty_obj = {}

if (Object.keys(Empty_obj).length === 0 ){
    console.log("Object is empty") ; 
}

// Some imp Comparison results 

false == 0  // true
false == '' // true 
0 == '' // true 

// NULL COALESCING OPERATOR (??) : null , undefined 
// yeh operator null and undefined ka safety check kardeta hai , yeh hamare in case of errors fallbacks assign kardeta hai 
let val1;

val1 = 5 ?? 10 // 5 
val1 = null ?? 10 // 10 
val1 = undefined ?? 15  // 15 
val1  = null ?? 10 ?? 20 // 10 

// Terniary Operator ( completely diff from Null Coalescing Operator)

condition ? true : false  // syntax 

const iceTeaPrice = 100 
iceTeaPrice <= 80 ? console.log("less than 80 ") : console.log("more than 80")  // more than 80 