// Array specific for loops

// For of loop 

// syntax

for (const iterator of object) {
    
}

// Eg

const arr = [1,2,3,4,5]

for (const num of arr){      // Apne aap looping hojati hai array ki 
    console.log(num)      // Result : 1 2 3 4 5 
}

// MAPS 
// stores unique values and remembers the order of insertion 
// Key and value pairs 

const map = new Map()

map.set('IN' , "INDIA")
map.set('USA',"United States of India")
map.set('Fr' , "France")

// Syntax of looping on map 

for (const [key,value] of map) {         // key and value both can be accesed here this way seperately 
    console.log(key , ':-' , value) ;
}

// Objects are not iterable through the For-of loops 


// LOOPING FOR OBJECTS 

// For-in loop is used 

const myObject = {
    js : 'javascript' ,
    cp : 'c++'
}

for (const key in myObject ) {
    console.log(`${key} shortcut is for ${myObject[key]}`) ; // Result : prints both key and value of object used 
}

// For-in loop on array 

const array = [1 ,2 , 3 , 4 , 5 ]

for (const key in array) {
    console.log(key)      // Result : 0 1 2 3 4 5  , prints keys of the array 
}

for (const key in array) {
    console.log(array[key])  // prints all the values 
}

// Maps are not iterable by for-in loop 

 