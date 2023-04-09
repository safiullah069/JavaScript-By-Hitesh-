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

// < ------------- What Is This (...) Spread Operator --------------- >

// The spread operator ... is a feature introduced in ECMAScript 6 (ES6) that allows an iterable (e.g., an array, a string, or an object that implements the Iterable protocol) to be expanded or spread into individual elements. It is denoted by three dots ... preceding the iterable.

// The spread operator can be used in several ways. One common use case is to concatenate or merge arrays. For example:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Another use case is to pass an array as individual arguments to a function. For example:

const nums = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
sum(...nums); // 6


// The spread operator can also be used with objects to merge their properties. However, unlike arrays, the spread operator only works with enumerable own properties, and not with inherited properties or properties that are not enumerable. Here's an example:

const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const mergedObj = { ...obj1, ...obj2 }; // { x: 1, y: 2, z: 3 }


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