console.log(`Testing Done`);

// If the element at pos is a UTF-16 high surrogate, returns the code point of the surrogate pair.
// If the element at pos is a UTF-16 low surrogate, returns only the low surrogate code point

const name = `Safi Ullah`;
console.log(name.charAt(0));
console.log(name.charCodeAt(0));
console.log(name.codePointAt(0));

// so Whats the difference between charCodeAt() And codePointAt() 
// charCodeAt() Represents the UTF-16 Characters While codePointAt() Represents The Characters That Have Two UTF-16 Values, High Surrogate And The Low Surrogate

console.log("ABC".codePointAt(0));; // 65
console.log("ABC".codePointAt(0).toString(16));; // 41

// toString(16) Converts the decimal value of codePointAt(0) which is 65 into base 16 Value which is 41

console.log("😍".codePointAt(0));; // 128525
console.log("\ud83d\ude0d".codePointAt(0)); // 128525
console.log("\ud83d\ude0d".codePointAt(0).toString(16)) // 1f60d

console.log("😍".charCodeAt(1));
console.log("\ud83d\ude0d".charCodeAt(0)); 


console.log("😍".codePointAt(1));; // 56845
console.log("\ud83d\ude0d".codePointAt(1));; // 56845
console.log("\ud83d\ude0d".codePointAt(1).toString(16));; // de0d

console.log("ABC".codePointAt(42));; // undefined
