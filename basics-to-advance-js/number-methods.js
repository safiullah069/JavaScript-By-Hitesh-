console.log(`Checking File`);

// < -------------- Numbers.toString() --------------- >
const str1 = `125`
// console.log(str1);
// console.log(typeof str1);

let numCheck = Number(str1);
// console.log(numCheck);
// console.log(typeof numCheck);

let numToStr = 12354;
// console.log(numToStr);
// console.log(typeof(numToStr.toString()));
// console.log(typeof numToStr)

const num1 = 8;
// console.log(num1.toString(16));

// < ------------------- Number.toExponential() ----------------- >

const str2 = 564;
// console.log(str2.toExponential(2));

const str3 = 65.678798;
// console.log(str3.toExponential());
// console.log(str3.toExponential(2));
// console.log(str3.toExponential(3));
// console.log(str3.toExponential(4));
// console.log(str3.toExponential(5));

// < ------------- Number.toFixed() ---------------- >

const num = 12.2734;
// console.log(num.toFixed());
// console.log(num.toFixed(2));

// < ------------- Number.valueOf() ------------------ >

const strNum = new Number(12.342);
// console.log(typeof strNum);
// console.log(strNum.valueOf().toFixed());
// console.log(strNum.valueOf());

// < -------------- Number.toPrecision() --------------- >

const numStr = 123.2143;
// console.log(numStr.toPrecision(3));
// console.log(numStr.toPrecision(1));
// console.log(numStr.toPrecision(4));
// console.log(numStr.toPrecision(2));

const numStr3 = 0.0042;
// console.log(numStr3.toPrecision(1)); 

// < ------------ Number.toLocaleString ----------------- >

const numStr2 = 123;

console.log(numStr2.toLocaleString(`ar-EG`));
