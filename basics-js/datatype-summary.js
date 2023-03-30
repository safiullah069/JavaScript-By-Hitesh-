// console.log(`Safi`);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */
      
//    ----------- Primitive Datatypes ------------ 
      
const name = `Safi`;
let id = 134;
let loggedIn = true;
let weather = null;
let me;

//  -------- Symbol --------
const tryId = Symbol("124");
const anotherId = Symbol("124");

// console.log(tryId == anotherId);

// Write Symbol In Capital Letter First Letter  

const bigNumber = 13425353423423542n

// "n" Is Used TO Convert It Into BigInt 

// console.log(typeof bigNumber);

// ----------------- Reference Type Or Non-Primitive Datatype ------------------

//  -------- Arrays --------

const firstArray = ["Safi", "Shuja", "Hamza", "Ahsam", "AbdulHadi"]
// console.log(firstArray);

// -------- Object --------

const aboutMe = {
    name : "Safi Ullah",
    age : 23, 
    education : "Master", 
    profession : "Developer"
}

// console.log(aboutMe);
// console.log(aboutMe.education);
// console.log(aboutMe.age);
// console.log(aboutMe.name);

// console.table([aboutMe, aboutMe.name, aboutMe.age, aboutMe.education, aboutMe.profession]);

// --------------- Functions -------------

// ----------Part 1

function addition(a, b) {
    return a + b;
}


// console.log(addition(2, 3));

// ------Part 2

const myFunctionTry = function additionPro(a, b) {
    console.log(a + b);
}

// myFunctionTry(2, 4)

// --------Part 3

const checkAdd = function additionProMax(a, b) {
    return a + b;
}


// console.log(checkAdd(2, 31));

