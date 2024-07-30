/**
 * -----------------------------------------
 * Chapter 1 - Intro and Basic of JS
 * (i) how to add js
 * (ii) Variables, Constants and Comments
 * (iii) Datatypes
 * (iv) Strings
 * (v) Strings methods
 * (vi) Numbers
 * (vii) Type conversions
 * (viii) Arrays
 * (ix) Boolean values and comparisons
 * -----------------------------------------
 *
 * Chapter 2 - Control Flow
 * (i) For loops
 * (ii) While Loops
 * (iii) Do-while Loops
 * (iv) If, else, else-if
 * (v) nested if
 * (vi) Break and Continue
 * (vii) Logical Operators
 * (viii) Variables and Block Scope
 * (ix) Ternary operators
 * (x) Switch statement
 */

// chapter-1 -----------------------------------------------------------------------------

// variables in js
// 3 type - var, let, const. This all are keyword which are using to declare variable.
// var score = 75
// var score = 56
// let score = 56;
// score = 95;
// const score = 88
// score = 99
// console.log(score)
// console.log("The value of the score is: ",score)
// document.write(score)

//----------------------------------------------------
// Datatypes
// Numbers = 1, 2, 22, 33, 7.55, 3.4
// String = "I am a string", "34", 'I am also string'
// Bollean = true or false
// Null = if we create a variable which don't have any value store initially
// let score = null
// score = 55
// console.log(score)

// undefined = if a variable declare but not initialize
// let score
// console.log(score)

// object = complex data structure (array)

//----------------------------------------------------

// Strings

// print a simple string value
// let fname= "INDRANIL";
// let sname = "chakraborty"
// console.log(fname,sname)

// string concatination
// method 1 using + operator
// let fullName = fname + " " + sname;
// console.log(fullName);
// method 2 using template literals (most use)
// let fullName  = My First name is ${fname} and my last name is ${sname};

// console.log(fullName);

// Getting string character
// console.log(fname[3]);

// string methods
// console.log(fname.toLowerCase())
// console.log(sname.toUpperCase())

// commmon string methods

// let hobbies = "Coding is my passion";
// console.log(hobbies);
// trim mrthods
// let result  = hobbies.trim();
// console.log(result)
// includes methods
// let result = hobbies.includes("  ");
// console.log(result);
// slice methods
// slice(start index, end inde)
// end index
// index = n
// end index  = n-1
// let v=5 -> 4
// let result  = hobbies.slice(13,20);
// console.log(result);

// convert a string into array
//  let stringToArray=hobbies.split("");
//  console.log(stringToArray)
//  console.log(stringToArray.length)

// js string are Immutable
// let str = "Hello"
// console.log(str)
// str[0] = "h"
// console.log(str)

//--------------------------------------------

// Numbers

// Mathematical operators
// * / % **(power) + -
// let score = 50;
// let result = 5**3;
// console.log(result);
// operator precendence and priority
// 1 () any type {} []
// 2 **
// 3 * / % (left to right)
// 4 + -  (left to right)

// let result = score * 2 + ( 4 * 3) - 8 / 2 % 4;
// console.log(result);
// solusation:-score*2+(12)-8/2%4;
//             100+12-8/2%4;
//             100+12-4%4;
//             100+12-0;
//             112-ANS

// Concatination of numbers
// let  result2 = "My total 'score' is: " + result;
// console.log(result2);

// Loose Equality(==) vs strong Equality(===) Operator

// loose equality
// let age = 2.5; // type number
// console.log(age=="2.5"); // focus only value not type

// console.log(age==="22"); // focus type not value



// ---------------------------------------------

// Type conversion
// let stringType = "98.5";
// console.log(stringType,typeof(stringType));

// // number method
// let numberType = Number(stringType);
// console.log(numberType,typeof(numberType))

// let numberType = 85;
// console.log(numberType,typeof(numberType));

// // number method
// let stringType = String(numberType);
// console.log(stringType,typeof(stringType))
//----------------------------------------------

// Arrays
// let dishes = ["Biriyani", "Fried Rice", "Ice Cream", "Gulap Jamun"]

// // access
// console.log(dishes[3])
// // modify
// dishes[1] = "Chilli Chcicken"
// console.log(dishes);
// // join method
// console.log(dishes.join('     '));
// // indexOf()
// console.log(dishes.indexOf("Ice Cream"));
// // concat method
// let newDishes = ["Mutton Kosha", "Rosogolla" , "Fish Fry"]
// console.log(dishes.concat(newDishes));
// // Length property
// console.log(dishes.length);
// // Push()
// dishes.push("Ilish mach")
// console.log(dishes)
// dishes.push("apple")
// console.log(dishes)

// pop()
// let res = dishes.pop()
// console.log(res)
// console.log(dishes)
// let res2 = dishes.pop()
// console.log(res2)
// console.log(dishes)

// let arr = ["apple", 'a' , 12, 12.5]
// console.log(arr)
// chapter-1 --------------------------------------------------------------------------------

// chapter-2 -----------------------------------------------------------------------------

//-------------------------
// For loops
// for(let i=1; i<=100; i++){
//     console.log("Run task is: "+ i)
// }
// use case of for loops
// let dishes = ["Biriyani", "Fried Rice", "Ice Cream", "Gulap Jamun", "Fish Fry"]
// for(let i=0; i<dishes.length; i++){
//     console.log(dishes[i])
// }
// while loops
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }
// do while loops
// let i= 1;
// do{
//     console.log(i);
//     i++;
// }while(i<=5)
//--------------------------

// if, else, else-if
// let budget = 3000;
// if(budget>6000){
//     console.log("Will do dinner in 5 start hotel");
// }else if(budget>4500){
//     console.log("Will do dinner in 3 start hotel");
// }else{
//     console.log("Will do dinner in local hotels");
// }
//--------------------------

// Break and Continue

// Break
// for(let i=1;i<=10;i++){
//     if(i==5){
//         break;
//     }
//     console.log("value of i = ", i);
// }
// Continue
// for(let i=1;i<=10;i++){
//     if(i==5){
//         continue;
//     }
//     console.log("value of i = ", i);
// }
//--------------------------

// Logical Operators
// and && or || not !
// let password = "qwerty@";
// if(password.length>5 || password.includes('*')){
//     console.log("password is strong")
// }else{
//     console.log("change your password")
// }

// let status = true;
// if(!status){
//     console.log("your stattus is: " , status)
// }else{
//     console.log("hii hello")
// }
//--------------------------

// Variable and Block scope
// let score = 90; // variable scope or global scope or global variable
// if(true){
//     let score1=50;//block scope or local variable
//     console.log("Under IF scope",score1)
// }
// console.log("Outside of any scope",score1)
//-------------------------

// Ternary Operators
// let age=12;
// if(age<18){
//     console.log("not eligible for vote");
// }else{
//     console.log("eligible for vote");
// }

// teranary
// let result = age<18 ? "not eligible for vote" : "eligible for vote";

// console.log(result)
//------------------------

// Switch case statement
// let age= "15";
// switch(age){
//     case 15:
//         console.log("you are kids");
//         break;
//     case 18:
//         console.log("you are adult");
//         break;
//     default:
//         console.log("you are LGBTQ");
// }
//------------------------

// chapter-2 -----------------------------------------------------------------------------