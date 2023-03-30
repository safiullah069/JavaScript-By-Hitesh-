// console.log(`Safi`);

// ---------- Stack And Heap ---------

// Primitive Datatype (Stack) 
// Non-Primitive Datatype (Heap)

// -----Stack----
//  In Stack Concept, We Give The Copy Of The Value To The Variable
// ----Example---

let email = "user@gmail.com";

let anotherEmail = email;

// console.log(email);
// console.log(anotherEmail);

anotherEmail = "userTwo@gmail.com";

// console.log(anotherEmail);
// console.log(email);



// -----Heap----
//  In Heap Concept, We Give Reference Of The Value Of The Variable
// ----Example---

let password = {
    pass : 131313
}
let anotherPassword = password;

console.log(password.pass);
console.log(anotherPassword.pass);

// anotherPassword = {
//     pass: 121212
// }
anotherPassword.pass = 121212

// Point To Be Noted Here, As I Am Doing Research Oriented Study I Came Across This Concept That When You Reference The Second Variable To First Variable You Have Access To Change First Variable With Second Variable But If You Then, Instead Of Changing The Value You Just Create Another Instance(Of Object) You Have No Longer Access To Change The Value Of Seconde Variable

console.log(anotherPassword.pass);
console.log(password.pass);

// Note: In Heap The Second Variable Affects The Value Of The First Variable, As It Has Been Given The Reference Of The Value Of The Variable So The Second Variable Follows The Reference And Change The Value Of The Variable


