// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// +true => 1
// +false => 0 

let loggedIn = 1

let isloggedIn = Boolean(loggedIn)

console.log(isloggedIn)

// 1 => true 
// 0 => false 
// "" => false 
// "Milind" => true 

let someNumber = 33 
let someStringnumber = String(someNumber)

console.log(someStringnumber);
console.log(typeof someStringnumber);

/*
  "02" > 1 true 
  "2" > 1  ~true 

   -> for comparison of two values their datatype "must be same" 


 null > 0    false     (0 > 0 is false)                 // comparison operators convert null to a number i.e. to 0 or to Nan 
 null == 0   false                                      //   equal operator treats null as null itself 
 null >= 0    true    ( 0 >=0  is true)

 undefined == 0 , > 0,  < 0    false 

 -> comparators ( > , < , >= , <= ) and equality check ( == or ===)  => both work differently in js 

 strict check ===   checks both datatype and value   
 "2" == 2    true  ( doesn't check datatype and converts string to number to check )
 "2" === 2   false 


 -> in summary - beware of such comparisons and avoid them 

 */ 