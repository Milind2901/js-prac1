// MAP FN 

const myNums = [1,2,3,4,5]

const mynewNums = myNumbers.map( (num) => {return num +10})
console.log(mynewNums);    

// Chaining - process of using functions over fucntions 

// .map().filter()
// .map().map()

/* in chaining the result of first chain passes to the chain declared later 
for eg -   .map().filter 

the resulting array of map will be passed to the filter fn and filter will operate on the array 
that resulted from the map fn

*/


const newNums = myNums
                    .map( (num) => num * 10 )  // [10,20,30,40,50]
                    .map( (num) => num + 1 )    // [11,21,31,41,51]
                    .filter ( (num) => num >= 40 )  // [41,51]

console.log(newNums) ;  

/* Map is different from filter cause map jo hai woh kluch bhi return karega like
any operation you perform on the values par filter jo hai woh true and false ke basis pe
work karta hai .   
*/