console.log(`Checking Files`);

// < ---------- Constructor ---------- > 

const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
a instanceof String; // is true
b instanceof String; // is false
typeof a; // "object"
typeof b; // "string"

/*
When String is called as a constructor (with new), it creates a String object, which is not a primitive.

When String is called as a function String(), it coerces the parameter to a string primitive.
*/

// < --------------- .length ------------ > 

const str = `Safi Check`;

console.log(str.length);

console.log(`Hi I'm Angry`);

console.log(`testing`);