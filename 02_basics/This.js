// THIS Keyword

// This -> refers the current context of the scope of object 

const user = {
    username : 'Milind',
    price : 999 ,
    
    welcomeMessage : function message(){
        console.log (`${this.username} is cool kid !`)
    }
}          

console.log(this)  // Result : {} , Current context is empty because we are inside the node environment , and inside the node enviroenment there is no global object 

// Inside a browser if we console log 'this' , the global object is Window object

// 'This' can't be used as context inside functions to retrieve variables or to set context . 'This' can't be used inside arrow fns too . 


function chai(){
    let username = 'Milind'
    console.log(this.username) ; 
}

chai()  // result : undefined ( reason explained above)



// ARROW FN

// Basic Syntax 

() => {}
() => ()

// fn held inside a variable 

const chai = () => {
    //.....
}

// Implicit return 

// Implicit means Mai Maan leta hu , so it means ki mai maan leta hu ki aapka ek hi line ka fn hai so return likhne ki jarurat nahi hai 

const addTwo = (num1 , num2) => num1 + num2

// another way 

const  addtwo = (num1 , num2) => (num1 + num2)

// Curly braces mai likha toh return keyword likhna hi padega , paranthesis mei likha toh return keyword nahi likhna padega 


// Explicit return just means when you have to use return keyword 

// Implicitly returning the object 

const addone = (num1,num2) => {username : "Milind"}   // Result : undefined 

const addTWo = (num1,num2) => ({username : "Milind"}) // Result - username : "Milind" , this is the advantage of using paranthesis for returning 

// object ko implicitly return karne ke liye usko paranthesis mai wrap karna hi padega 

