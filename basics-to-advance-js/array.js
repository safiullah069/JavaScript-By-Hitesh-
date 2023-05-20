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

// ------------ Array.entries ----------

const arrayIt = [0, 1, 2, 3, 4, 5];

const iterator1 = arrayIt.entries();
// Now It Has Become An Iterator Object

/* 
     It provides a standardized way to iterate over elements in a collection or sequence.
     Iterator objects are commonly used in JavaScript for iterating over arrays, strings, maps, sets, and other iterable objects. They provide a uniform way to access the elements of a collection one by one, regardless of the specific data structure or implementation details.
*/

// console.log(iterator1.next());
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);


// const another_array = [1, 2, 3, [4, 5,[2, 3], 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat()
// console.log(real_another_array);


// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({0: "hitesh", length: 3})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));

const obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    // length: 5
  };
  
  const newArray2 = Array.from(obj);
//   console.log(newArray2); // ['a', 'b', 'c']

  const nameId = `Safiullah`;

//   console.log([...nameId]);

  const myHeroes = ["Nietzsche", "Kant", "Rosseau", "Hegel"];

  const yourHeroes = ["Bin Qasim", "Ghaznavi", "Taimur", "Sher Shah Suri"];

  const ourHeroes = [...myHeroes, ...yourHeroes]

  console.log(ourHeroes);

  console.log(...myHeroes);
  console.log(...yourHeroes);

  var spreadArray = [...yourHeroes];

  console.log(spreadArray);

  const newStr = myHeroes.concat(yourHeroes).join(",");
  console.log(newStr);
  console.log( typeof newStr);


  // ----------  IMP Note --------

 // false, 0, -0, BigInt 0n, "", null, undefined, NaN

