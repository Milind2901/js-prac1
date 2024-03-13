// For-each 

const arr = [ 'js' , 'arr' , 'cpp']

arr.forEach( function (val) {             // call back fn does not have a name 
    consoe.log(val)                        // Result : js arr cpp
} )


// another syntax 

arr.forEach( ( item ) => {    
    console.log(item)          // Result : js arr cpp
} )              

// In case we want to pass a fn in For Each 

function printMe(item){
    console.log(item)
}

arr.forEach(printMe)  // just give reference of the fn 

// For-Each  has the access of items , index , array 

arr.forEach( ( item , index , array) => {
    console.log(item, index , array) ;
})

// For-each loop on array of Objects 

const myCoding = [ 
    {
        languageName : "js" ,
        languageFile : "hulla"
    } ,
    {
        languageName : "js" ,
        languageFile : "hulla"
    } ,
    {
        languageName : "js" ,
        languageFile : "hulla"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})