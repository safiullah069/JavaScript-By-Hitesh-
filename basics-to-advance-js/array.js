console.log(`Checking Files`);


const fruits = ["Mango", "Banana", "Apple"];

// console.log(fruits.push('Oranges')); // Return The Length Of New Array
// console.log(fruits);

// console.log(fruits.length);

fruits.length = 10;

// console.log(fruits.length);

// console.log(fruits); // [ 'Mango', 'Banana', 'Apple', 'Oranges', <6 empty items> ];

// console.log(fruits[fruits.length-1]); // undefined

// ---------- Array With Constructor -----------

const newArr = new Array(20, 312, 123, 3); // Array Length Is 4
const newArr2 = new Array(20); // Array Length Is 20
// Array With Singule Number Arguments Take It As A Lenght Not A Value

const newArr3 = new Array(20, 'safi'); // Array Length Is 2

newArr[0] = `Safi`;

// console.log(newArr);
// console.log(newArr.length);
// console.log(newArr2.length);
// console.log(newArr3.length);

newArr2[0] = 'safi';
// console.log(newArr2.length);
// console.log(newArr2);

//  ----------- Array Methods -------------

//  ---- Array.at And Array[]

const colors = ['red', 'green', 'blue'];

// console.log(colors);
// console.log(colors.at(-1));

// Function That Returns Last Element
const returnLast = (e) => e.at(-1);

// console.log(returnLast(colors));

// console.log(colors[colors.length-1]);

// console.log(colors.slice(-1)); // Return Array Not A Value
// console.log(((colors.slice(-1)).entries()).next().value); // ANother Way TO Get A VAlue And Key From Array

// -------------- Array.concat() ------------- 

const info = ['Name', 'Id', 'Number', 'Address'];
const professionalInfo = ['Profession', 'Salary', 'Company'];

const totalInfo = info.concat(professionalInfo);

// console.log(totalInfo);
// console.log(info);
// console.log(professionalInfo);

info.concat("Safi"); // It Will Not Change The Existing Array
// console.log(info);

// console.log(info.concat('Safi'));

// ---------------- Array.copyWithin

const newArray = [1, 2, 3, 4, 5];

// console.log(newArray.copyWithin(newArray.length-1));
// console.log(newArray.copyWithin(3, 0, 1)); // Changes The Array
// console.log(newArray);

// ------------ Array.

