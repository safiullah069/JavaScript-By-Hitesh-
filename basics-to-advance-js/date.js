console.log(`Checking Files`);

const birthday = new Date('August 19, 1975 23:15:30');
const date1 = birthday.getDate();

console.log(date1);
// Expected output: 19

const eventBirthday = new Date(`2002-4-23`);

console.log(eventBirthday.getDate());
const day = eventBirthday.getDay();
const dayArray = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, ]
console.log(dayArray[day]);


