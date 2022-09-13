// Hoisted for var

// invisivally hare- var x; hoisted next line.
// invisibally hare- var = undefiend; value take memory space.
x = 5; // Assign 5 to x
console.log(x);     // Find an element // Display x in the element           
var x; // Declare x

// Hoisted for let

// invisivally hare- let carName; hoisted but next line.
// hare is'nt let = undefiend value, and not take memory space. so get ReferenceError 
carName = "Volvo";
console.log(carName); //hare is get ReferenceError .coz let not allowed this
let carName;

// Hoisted for const

country = "Bangladesh";
console.log(country); //hare is get SyntaxError 
const country; // hare not allow in const donot write musti time same name variable