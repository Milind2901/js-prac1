/* 

On basis of how data is stored in memory and how it can be accesed ,
data is divide into 2 types - 

-- primitive                 ( original value ke sang chedchad "nahi" kar sakte memory mei )
-- non primitive              (original value ke sang chedchad kar sakte hai memory mei )

# Primitive : 7 types  - Strings  , Numbers , Boolean , Null , Undefined , Symbol (used to set uniqueness), BigInt , 

# Reference Type/ Non Primitive  ( direct access of valuess in memory is allocated )
- Arrays , Objects , Functions 

=> JS is dynamically typed language cause the datatype of variable is determined by the value it holds during the runtime 
   and can change throughout the protgram as we assign different values to it 


Return type of variables in JavaScript

1) Primitive Datatypes

       Number => number
       String  => string
       Boolean  => boolean
       null  => object (*****)
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function(object)
       Object  =>  object
       
*/ 
//                                          X-----------------------------------X

/*                                                   Memory types 

Stack -> Primitive datatype  - you get a copy of the variable you declared 
Heap -> Non Primitive datatypes  - get reference of the original value , any change made will be reflected in the original
 
*/ 


//                                          X-----------------------------------X
//                                                      Strings




const Name = "Milind"
const repoCount = 60 

console.log(`My name is ${Name} and my repo count is ${repoCount}. Coding is fun ! `) ; 




/* 
   
   slice method arguments can take negative values 
   substring method arguments are not taken as negative , substring would ignore it .
   Trim function would trim all the extra spaces in the name and them .  
   .replace -> used to replace the value of asked argument with the other value inserted
   .includes -> used to query if the asked value is present there or not 
   .indexOf -> returns the index of the first occurence of the queried aubstring or the specified Character 
   
*/

const halal = "Milind"
const mirza = "Lmao"

console.log(halal.concat(" " ,mirza))


//                                            X --------------------- MATHS -------------------- X
console.log(Math.round(4.5))

/* 
   .ceil() -> rounds off the number to the next bigger integer 
   .floor() -> rounda off the number to the previous lower interger  

   Math.random  ->  throws values between 0 & 1 (including 0 , excluding 1)
*/


console.log(Math.floor(Math.random()*10)+1) // gives integer values between 1 and 10 (both included)


const min = 10 
const max = 20 
console.log(Math.floor(Math.random()  *  (max-min+1) ) + min ) // in case of min and max defined cconstants , this formula gives the integers between 
//  between both those numbers (including both)


//                                          X --------------------- DATE & TIME ------------------X

// date is an object in JavaScript

let myDate = new Date()  // created the object of the date 


// Different methods for date formats
console.log(myDate.toDateString())   // Fri Mar 08 2024  
console.log(myDate.toString())       // Fri Mar 08 2024 07:58:21 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toJSON())          // 2024-03-08T07:58:51.729Z
console.log(myDate.toLocaleString())  // 3/8/2024, 7:59:29 AM


let GetDate = new Date(2023,0,23)       // syntax to get specific date 
console.log(GetDate.toDateString()) // Mon Jan 23 2023   -> in array format of declaring date months start from 0  


let myCreatedDate = new Date("01-14-2023")   // to get date in a defined format, here  mm-dd-yy


// Values in Milliseconds from 1 JAN 1970 

let TimeStamp = Date.now()       // milliseconds for current date 

console.log(myCreatedDate.getTime())   // gets values for milliseconds for the specified date 

console.log(Math.floor(Date.now()/1000))  // current date in seconds              *** imp *** 


myDate.toLocaleString("deafult" , {                 // customised date with desired properties can be obtained with this syntax
   weekday: "long" ,
})