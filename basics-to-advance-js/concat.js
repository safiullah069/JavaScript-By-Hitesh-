console.log(`Checking File`);

const name = `Safi`;
const helloo = `hello`
console.log(helloo.concat(` ${name}`));
console.log("hello".concat(` ${name}`));

console.log("".concat(`${helloo} ${name} `));

console.log("".concat(["Safi", "Shuja", "Hadi"]));
const infoMe ={name: 'Safii'}
console.log("".concat(infoMe.name));
console.log("".concat({}));

console.log("".concat(true));

const hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.

const greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"

"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"

/*
n the first example you provided, the concat() method is called on the string "Hello, ", passing in the string "Kevin" and the string ". Have a nice day." as arguments. The method then returns a new string that is the result of concatenating these three strings together, resulting in the string "Hello, Kevin. Have a nice day.". This new string is then logged to the console using console.log().

In the second example, the concat() method is called on an empty string, passing in the elements of an array greetList using the spread operator .... The greetList array contains the strings "Hello", " ", "Venkat", and "!". The concat() method concatenates these elements together to form the string "Hello Venkat!".

The remaining examples show that the concat() method can be used to concatenate not just strings, but also other data types like objects, arrays, null, boolean values, and numbers. When a non-string argument is passed in, the concat() method converts it to a string before concatenating it to the original string.

*/