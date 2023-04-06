console.log(`Testing Successful`);

//  < ------------- Strings.at() ------------- >

const myName = `Safiullah`;

console.log(myName.at(1));
console.log(myName.at(-5));

// You can give both positive and negative number in the parameter

/* 
        ------------ Example From Mdn ---------- 
*/

const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// Expected output: "Using an index of 5 the character returned is u"

index = -4;

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// Expected output: "Using an index of -4 the character returned is d"


//  --------- Getting Last Character Of String ----------

const myProfession = `Developer`;
console.log(myProfession.at(-1));
console.log(myProfession.charAt(myProfession.length - 1));

//  ------------ By Using The Function How TO Get LAst Character --------- 

const funcLastChar = function (array) {
    return array.at(-1)
}

console.log(funcLastChar(myProfession));
console.log(funcLastChar(myName));
