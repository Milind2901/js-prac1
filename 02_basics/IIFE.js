// IIFE Immediately invoked Function Expression 

// Matlab jese hi apne fn likha usko turant execute karwana hai 

// syntax 
()()   // first paranthesis is of definition of fn , second is of execution 


/*  Why do we use iffe ?

Global scope ke pollution se problem hoti hai kaibar , toh global scope ke jo bhi 
variable ya declaration hai uske pollution ko hatane ke liye hamne iffe ka use kiya 
2nd reason : so that the fn executes immediately 
*/ 

/* Humne iffy mai , chai() , chai se reference karke aur fir () lagake execute karne ki bajaye 
function ko hi () mai wrap karke ek block banake , aur aage () lagake directly hi execute karwa diya 
*/ 

// Semicolon stops the code and allows another iffe to execute 


(function chai(){
    // named IFFE
    console.log(`DB CONNECTED`)
})();  


( (name) => {
    console.log(`DB CONNCETED ${name}`)
}) ('Milind')
