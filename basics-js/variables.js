var account_Password = "123";
let accountName = "Safi Ullah";
const account_Id = 132144;

accountState = true;

console.log(accountName);
console.log(account_Id)
console.log(account_Password);
console.log(accountState);

// console.table()


var account_Password = "2344cs";
accountName = "Samiullah";

// --------------Will Through an Error----------
// let accountName = "Hamza"
// const account_Id = 122202;

console.table([accountName, account_Id, account_Password, accountState]);

/*
    Why We Should Not Use var As A Variable

    1. Mainly Due to Block Scope And Functional Scope 
    Sometimes Programmers use Same Name At Different times And Due To Scoping in JS It Creates Complexity 
*/