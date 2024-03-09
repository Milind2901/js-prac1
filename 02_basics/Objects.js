// OBJECTS 


/*

Objects can be declared into two ways :- 

- Constructor   : Singleton is created , means its unique and  
- Literal       : Singleton not created , multiple instances are created

*/


// Syntax 

// 1. Constructor 

const obj_Const = new Object() 

// 2. Literal 

const obj_Lite = { a : "Milind "}

// Merging two objects 
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = Object.assign( {} , obj1 , obj2)  // Result : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// More useful syntax for merging 
// SPREAD OPERATOR 

const obj_spread = {...obj1, ...obj2}   // Result : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



// Fetching Keys and Values from objects 

Object.keys(obj1)    // returns keys in array format 
Object.values(obj1)  // returns values in array format
Object.entries(obj1)  // returns key value pair as array

// Checking if some property exists or not in object 

obj1.hasOwnProperty('email')  // returns as boolean 





