console.log(`Checking Files`);

// Unlike most global objects, Math is not a constructor. You cannot use it with the new operator or invoke the Atomics object as a function. All properties and methods of Math are static.

// ---------------- Math.PI --------------- 

// const calculateCircumference = (radius) => 2 * Math.PI * radius;

const calculateCircumference = function (radius) {
    return (2 * Math.PI * radius)
}

// console.log(calculateCircumference(2));

// ----------------- Math.SQRT1_2 ------------ 

const squareRoot = () => Math.SQRT1_2;

// console.log(squareRoot());

// --------------- Math.SQRT2 ------------ 

const squareRoot_2 = () => Math.SQRT2;

// console.log(squareRoot_2());

// -------------- Math.max Math.min ----------- 

const arrayMax = [1, -4, 200, 43]

const largeNum = (e) => Math.max(...e);
const smallNum = (e) => Math.min(...e);

// console.log(largeNum(arrayMax));
// console.log(smallNum(arrayMax));

// --------------- Math.round() -----------

const randomNumber = () => Math.floor(Math.random() * 11)

// console.log(randomNumber());

const randomGenerator = (min, max) => Math.floor(Math.random() * (max-min) + 2);

// console.log(randomGenerator(1, 3));




