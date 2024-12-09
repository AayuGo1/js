"use strict"; //treat all js code as newer version 

// alert (3 + 3)
// we are using nodejs and not browser 

console.log(3+3); 

console.log("aayush");

// code readability should be high

let name = "aayush"
let age= "12"
let isLoggedIn ="true"
let state;

// number =>2 to the power 53 
// bigint 
// string => ""
// boolean =>true or false
// null => standalone value in javascript => representation of empty value
// undefined => value not asigned 
// symbol => to find uniqueness 


// object

console.log(typeof "aayush");
console.log(typeof age);
console.log(typeof null);



// primitive

//  7 categories: string, Number, boolean, null, undefined, symbol, bigInt.

//  JavaScript is a dynamically typed language.
//  This means that the type of a variable is determined at runtime, rather than at compile time.
//  In dynamically typed languages, you do not need to explicitly declare the type of a variable when you create it.
//  Instead, the type is inferred from the value assigned to the variable.
const score=false
 console.log(typeof score);
 

// reference or non primtive

// reference directly allocated
// array, objects, functions

// ******************************************************************

// stack(primitive)=>we get a copy of the value to use  , heap memory(non primitive)=>we get reference of the original value 

let myYoutubename= "aayushgoel"

let anothername= myYoutubename
anothername= "aayushandcode"
console.log(anothername);
console.log(myYoutubename);

let userone = {
    email: "kushgoel998@gmail.com",
    upi: "aayush"
}

let usertwo=userone
usertwo.email= "hitesh@gmail.com"
console.log(userone.email);
console.log(usertwo.email);

