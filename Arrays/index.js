// const kunwarObj = { //Object
//     // Properties of object
//     name : "Kunwar",
//     rollNo : 123,
//     isMarried : false,
//     "full name" : "Kunwar Ji Gupta",
//     age : 19,
//     greet : function () {
//         console.log("Hello ji kaise ho saere");
//     }
// };

// console.log(kunwarObj);
// kunwarObj.greet();

// Creation of arrays
// let arr = [1,2,3,4,5];
// console.log(arr);

// creation of array using constructor
// let array = new Array(1,2,3,4,5);
// console.log(array);

// console.log(typeof arr);
// console.log(typeof array);

// console.log(array[2]);

/* Built in methods */

// Push & Pop
// array.push(7);
// console.log(array);
// array.pop();
// console.log(array);

// Shift & Unshift
// console.log(array);
// array.shift();
// console.log(array);
// array.unshift(0);
// console.log(array);

// Slice 
// console.log(array);
// console.log(array.slice(2));
// console.log(array.slice(1,3));
// console.log(array);

// Splice
// console.log(array);
// array.splice(1, 2, "Kunwar");
// console.log(array);

// array.splice(1, 0, "Kunwar");    
// console.log(array);


// MAP, FILTER & REDUCE
    // let arr = [10,20,30,40,50,60];
    // let ansArr = arr.map((num) => {
    //     return num**2;
    // });    
    // console.log(ansArr);

    // arr.map((num) => {
    //     console.log(num);
    // });

    // arr.map((num, idx) => {
    //     console.log(`index of ${num} is: ${idx}`);
    // });


    // let ansArr = arr.filter((num) => {
    //     // if (num % 3 == 0) {
    //     //     return true;
    //     // } else {
    //     //     return false;
    //     // }

    //     return num % 3 == 0;
    // });

    // console.log(ansArr);

    // let arr = [10,20,"kunwar", true, "gupta", null];
    // let ansArr = arr.filter((val) => {
    //     return typeof(val) === 'string';
    // });

    // console.log(ansArr);

    // let arr = [10,20,30,40,50,60];
    // let ans = arr.reduce((prev, curr) => {
    //     return prev + curr;
    // });
    // console.log(ans);

    // SORT
    // let arr = [1,5,7,3,2,0,4,6,-8];
    // console.log(arr.sort());
    // arr.sort((a,b) => {
    //     return b - a;
    // });
    // console.log(arr);



    // INDEXOF
    // let arr = [10,20,30,40,50,60];
    // console.log(arr.indexOf(50));


    // FIND
    // let arr = [10,20,30,40,50,60];
    // let ans =  arr.find((num) => {
    //     return num > 60;
    // });

    // console.log(ans);


    // FOREACH, FOR-OF & FOR-IN
    // let arr = [10,20,30,40,50,60];
    // arr.forEach((num) => {
    //     console.log(num);
    // });

    const obj = {
        name: "kunwar",
        age: 20,
        city: "delhi",
        isMarried: false
    };

    /*================================================= For in loop works with objects but for...of loop, which only works with iterable objects like arrays, strings, Maps, or Sets. Objects themselves are not directly iterable with for...of. ==================================================*/
    // for (const key in obj) {
    //     console.log(key, ":" ,obj[key]);
    // }


    // let arr = [10,20,30,40,50];
    // for (const element of arr) {
    //     console.log(element);
    // }

    // HOW WORKS WITH FUNCTIONS?
    let arr = [10,20,30,40,50];
    let totalSum = 0;
    // function getSum(arr) {
    //     let sum = 0;
    //     arr.forEach(element => {
    //         sum += element;
    //     });
    //     return sum;
    // }

    // VARIABLE FUNCTION
    // let getSum = function(arr) {
    //     let sum = 0;
    //     arr.forEach(element => {
    //         sum += element;
    //     });
    //     return sum;
    // }


    // ARRAOW FUNCTION
    let getSum = (arr) => {
        let sum = 0;
        arr.forEach(element => {
            sum += element;
        });
        return sum;
    }

    totalSum = getSum(arr);
    console.log(totalSum);