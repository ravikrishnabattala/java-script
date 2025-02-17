/// Loops in Js

// For Loop 
// for(let i =0;i<1000000;i++)
// {
//     console.log("Suck");
// }

// // For of Loop
// let str = "Mallesh"

// for(let i of str)
// {
//     console.log("i = ",i)
// }

// // For in Loop 
// let student = {
//     name: "MAllesh",
//     age: 22,
//     cgpa: 7.2,
//     isPass: true
// }

// for(let j in student)
// {
//     console.log(j," = ",student[j])
// }
// let original_Num = 874;
// let usernum = prompt("Guess the correct number ");
// while(usernum != original_Num) {
//     usernum = prompt("Its Wrong answer, try again ");
// }
// alert("Congratulations you guessed it right ");
// console.log("Congratulations you guessed it right ");

// Strings in Js
// String is a sequence of characters used to represent text

// let str = "Mallesh"

// String Interpolation ---> Where strings will be created using placeholders
// Template literals 
// let special = `My name is ${str}`
// console.log(special)

// let fullName = prompt("Enter your full name ");
// alert(`Your username is ${"@".concat(fullName) + fullName.length}`);

// Arrays
// 1)
// let marks = [85,97,44,37,76,60];
// let sum =0;
// for( let i of marks)
// {
//     sum+= i;
// }
// console.log(sum,sum/marks.length);

// 2)
// let arr = [250,645,300,900,50]
// console.log(`Items price before applying offer ${arr}`)
// for(let i in arr)
// {
//     let discount = (arr[i]/100) * 10;
//     arr[i] -= discount;
// }
// console.log(`Items price after applying offer ${arr}`)

// Array Methods 
// --> Push() : add to end 
// --> Pop() : delete from end & return
// --> toString() : converts array to string
// --> Concat() : joins multiple arrays & return result
// --> unshift() : add to start
// --> shift() : delet from the start & return
// --> slice() : returns a piece of the array
// --> splice() : change original array (add,remove,replace)
// let foodItems = [];
// foodItems = ["chips","Bread","Leafs","Tomato","Lemon","Potato","Brinjal"];
// let veggies = foodItems.splice(3,1,["meat","Eggs","sam",87]);
// console.log(`Original array foodItems = ${foodItems}`);

// Practice Question
// Qs. Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end
// ---> Solution
// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
// console.log(`Companies before Changing ${companies}`)
// companies.shift();
// companies.splice(1,1,"Ola");
// companies.push("Amazon");
// console.log(`Companies after Changing ${companies}`)

//  Advanced Methods
// --> forEach() : IT terates through the array ad perform operations on single items
// --> map() : Transform each element in the array and returns a new array with the results.
// --> filter() : Creates new array with elements that pass the test provided by function 
//                Usually used to filter out or reduce the elements in the array.
// --> reduce() : IT is powerfull function in java script used to reduce the array into the
//                single elememt by performing the one of the following operations(sum,product or even an object)
//                by Iterating over each element in the array. 
//                * It will be having two parameters one is callback and another is initialValue.
// const numbers = [1,2,3,4,5,6];
// const product = numbers.reduce((acc,curr) => {return acc * curr;},1);
// const even = numbers.filter(num => num % 2 === 0);
// const squares = numbers.map(num => num*2);

/// Functions in JS
// It is a block of code that performs a specific task, can be invoked whenerver needed.

// Arrow Functions
// Arrow Functions are compact way of writing a function

// const arrowMultiple = (a,b) => {return a*b}

// Practice Problem
// normal function
// function countVowels(input) {
//     let vowelCount =0;
//     for(let i of input) if(i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') vowelCount++;
//     return vowelCount;
// }
// Arrow Function
// const countvowels = (input) =>{
//     let vowelCount =0;
//     for(let i of input) if(i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') vowelCount++;
//     return vowelCount;
// }

// CallbackFunctions
// A callback is a function passed as an argument to another function.
// 
// const arr = [1,2,3,4];
// arr.forEach((val) => { console.log(`Value = ${val} ----> Square = ${val*val}`);});

// let n = prompt("Enter an number - ");
// let arr = [];
// for(let i=1;i<=n;i++) arr[i-1] =i;
// let sum = arr.reduce((acc,curr) => { return acc + curr});
// let product = arr.reduce((acc,curr) => { return acc * curr});
// console.log(arr);
// console.log(`The sum of all numbers in the array = ${sum}`)
// console.log(`The product of all numbers in the array = ${product}`)


// ----------> DOM <----------
/* Document Object Model 
 --> Window Object
 * The window object represents an open window in a browser. it is browser's object(not JavaScript's)
   & is automatically created by browser.
 * Its a global object with lots of properties & methods.


*/
