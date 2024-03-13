// FILTER FN 

const myNumber = [1,2,3,4,5]

const myNums = myNumber.filter( (num) => num > 3)   // syntax is following implicit return

console.log(myNums);  // Result : [3,4,5]

// another syntax with explicit return 

const newNums = myNumber.filter( (num) => {
    return num > 3 
})

console.log(newNums)  // Result : [3,4,5]

// Filter mei wahi return/pass hoga jo true hoga as per the mentioned condition 

