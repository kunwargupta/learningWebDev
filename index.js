// console.log("Babbar");

// function definition
// function sayMyName() {
//     console.log("Kunwar Gupta");
// }

// function use - function call
// sayMyName();



// function printCounting() {
//     for (let i = 1; i <=100; i++) {
//         console.log(i);

//     }
// }

// printCounting();

/* here in the function parameter(num) you don't have to write let or var or const. You can just write parameter name(in this case num) that's it. */

// function printNumber(num) {
//     console.log(`Printing Number: ${num}`);
// }


/* here in function call 100 is argument not parameter */
// printNumber(100);


// Multiple Parameters function
// function getAverage(num1, num2) {
//     console.log((num1+num2)/2);
// }

// getAverage(7,8);



// return function
// function getSum(a,b,c) {
//     return a+b+c;
// }

// let sum = getSum(1,2,3);
// console.log(sum);



// function getUserName(firstName, lastName) {
//         let numbers = "0123456789";
//     let symbols = "!#$%^&*_+~`|:;?></-=";

//     // Build the username
//     let userName = firstName + lastName + numbers[Math.floor(Math.random() * numbers.length)];
//     userName += symbols[Math.floor(Math.random() * symbols.length)]; 

//     // Convert to lowercase
//     userName = userName.toLowerCase();
    
//     return userName;
    
// }

// console.log(getUserName("Kunwar", "Gupta"));


// Another way to write down a function


// First Way
// function mul(a,b) {
//     return a*b;
// }

// let ans = mul(2,10);
// console.log(ans);


// // Second Way
// let multiplication = function (a,b) {
//     return a*b;
// }

// console.log(multiplication(2,10));



// **Arrow Function
// syntax: functionName = function[(parameters) => {//code here}];
let multiplication = (x,y) => {
    return x*y;
}

console.log(multiplication(2,10));