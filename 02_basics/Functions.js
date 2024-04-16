// FUNCTIONS

function saymyName(){
    // content of fn 
}

saymyName  // this is reference of fn 
saymyName() // this is executing fn 

// Parameters - values passed in paranthesis when defining a function 
function Add_numbers(number1,number2){   // number1 & 2 are parameters
}
// Arguments - values passed in paranthesis when calling a function 
Add_numbers(3,4) // 3,4 are arguments

// Imp point : Nothing executes inside a fn after the return statement , i.e. fn is over 
// after a return statement is executed 

// Syntax example with return type

function loginUsername(username){
    return `${username} just logged in `
}
console.log(loginUsername('Milind')) 

// If no argument is passed while calling a function , 'undefined' is returned 

// To set a dafult value if no argument  is passed 

function loginUsername(username =  'sam'){
    // blah blah 
}

// Rest Operator 

function CalculateCartPrice(...num1){
    return num1
}
console.log(CalculateCartPrice(200,400,500))   // Result : [200,400,500]

// Rest Operator just bundles all arguments and returns them 

function CalculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(CalculateCartPrice(200,400,500,2000)) // Result : [500,200] , this is because 200 goes in val1 and 400 in val2

// Passing Object as Argument 

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject({
    username : 'Milind',
    price : 399 
})

// Passing Array as Argument 

const myNewArray = [200 , 400 , 100 , 600 ]

function returnArray(getArray){
    return getArray[2]
} 

console.log(returnArray(myNewArray))


// SCOPE OF Functions

{ }  // in fns and if-else statements this is called scope 

// Global scope elements are available inside block but not vice versa

// Don't use var - it just ruins the scope shit 

// Global scope - when code is run into browser console and when run into the code environment through node  , is different for both . 

// Child function can access the variables of the parent fn , but not vice versa .  

function outer(){
    const name = 'Milind'
    function inner(){
        const surname = 'Chaturvedi' 
        console.log(name)      // will print name because child fn inner can access variable name of parent fn - outer
    } 
    console.log(surname)        // will throw error because surname scope is ended inside the inner fn 
}
 
// Different ways to declare a fn 

function addOne(num){        
    return num + 1 
}
addOne(5)

const addTwo = function(num){   // This is called EXPRESSION 
    return num + 2
}
addTwo(5)

// Expression will throw an error if the function is called before declaration , but not in the other fromat above . 



