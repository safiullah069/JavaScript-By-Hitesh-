console.log(`Checking The Files`);
//  < --------------------- Strings ---------------- >

// < -------------- Define The Strings -------------- >

// < ----------- 1. Using String Literals ("", ``, '') ------------ >
//  Converts To a string primitive
 
let myName = `Safi Ullah`
// console.log(myName);
// console.log(typeof myName);


// < ----------- 2. Using String() ------------ >
//  Converts To a string primitive

let myFather = String("M. Ajmal")

// console.log(myFather);
// console.log(typeof (myFather));


// < ----------- 2. Using new String() ------------ >

//  Converts To a string wrapper object

// ------> Warning: You should rarely find yourself using String as a constructor. <--------
 
let profession = new String("Developer")

// console.log(profession);
// console.log(typeof profession);

// ----------------------------
//  We Can Get The Value Of This String Wrapper Object By valueOf() Property Of String
// console.log(profession.valueOf());
// ----------------------------

// Concatination Of Strings 

// < ------------ 1. Using "+" (Plus) ------------- > 
 
let firstName = "Safi";
let lastName = "Ullah";

let fullName = firstName + lastName;

// console.log(fullName);

// < ---------- 2. Using Backticks ` ` --------------- >

let bookName = `Kite Runner`;
let authorName = `Khalid Hosseni`

let awardedTo = `${bookName} by ${authorName}`;

// console.log(awardedTo);


/*
        1. Strings are returned as-is.
        2. undefined turns into "undefined".
        3. null turns into "null".
        4. true turns into "true"; false turns into "false".
        5. Numbers are converted with the same algorithm as toString(10).
        6. BigInts are converted with the same algorithm as toString(10).
        7. Symbols throw a TypeError.
        8. Objects are first converted to a primitive by calling its [@@toPrimitive]() (with "string" as hint), toString(), and valueOf() methods, in that order. The resulting primitive is then converted to a string.
*/