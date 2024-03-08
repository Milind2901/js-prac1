// Arrays 
const Array = [0,1,2,true,"Milind"]   // different datatypes in same array are valid 

/*

Copying operation in arrays create Shallow Copies 

Shallow copies - variables share the same refernece object , any change made is a change reflected in all 
Deep copies - variables do not share the same refernece points , changes made are seperate and unique

*/

const newArray = [0,1,2,3,4]

newArray.push(4)  // adds 4 to end of array 
newArray.pop()    // removes the last element from the array 

newArray.unshift(7)  // adds 7 to the front of array
newArray.shift()     // removes the first element from array

newArray.join()       // binds the elements of array and convert them to string 

newArray.slice(1,3)         // gives a portion of array from index 1,2 - endpoint excluded , does not manipulates original array 
newArray.splice(1,3)        // gives portiono of array of index 1,2,3 - endpoint included , manipulates original array 

/* Difference betweeen slice and Spilce ?

Slice 

->  endpoint excluded from range
->   Original array not manipulated

Splice 

-> endpoint  included in range 
-> Original array manipulated 

*/ 

let marvel_heroes = ["ironman" , "spiderman" ,"Thor "]
let dc_heroes = ["Superman" , "batman" ,"flash"]


marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)  //  [ 'ironman', 'spiderman', 'Thor ', [ 'Superman', 'batman', 'flash' ] ]   

// push just inserts the array as an element in another array and modifies the original array 

let combinedArr = marvel_heroes.concat(dc_heroes)      
console.log(combinedArr)  // [ 'ironman', 'spiderman', 'Thor ', 'Superman', 'batman', 'flash' ]

// concat merges both arrays and returns it as a new array , it does not modify the original arrays 

// SPREAD OPERATOR - works same as concat but returns individual elements ( MORE USED )

const new_heroes = [...marvel_heroes , ...dc_heroes]  /* [ 'ironman', 'spiderman', 'Thor ', 'Superman', 'batman', 'flash' ]
                                                           can combine mutliple strings simply 
                                                      */ 

// FLAT OPERATOR 
const another_array = [1,2,3, [2,3,4] , 7 , 6 , [2,3,[4,5]] ]

const real_another = another_array.flat(Infinity)    // 1, 2, 3, 2, 3, 4, 7, 6, 2, 3, 4, 5]    returns all embedded arrays as a single arr
    
Array.isArray() // returns true or false based on argument passed
Array.of()        // converts variables passed as arguments in a new array 
Array.from()       // converts iterable objects ( eg . Strings ) into arrays  

