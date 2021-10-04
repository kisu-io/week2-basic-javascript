// Area of a circle
function areaOfCircle(){
console.log("Area of a circle");

var pi = 3.14;
console.log(typeof pi);

var radius = 5;
console.log(typeof radius);

var area = pi * (radius**2);
console.log(area);

var result = "The area of a circle given the radius " + (radius) + "(m) is "+ (area)+ "(m2)"
console.log(result);

radius = 7
console.log(`The area of a circle given the radius ${radius}(m) is ${pi * radius**2}(m2)`);
};
// areaOfCircle(),



// Operators & Comparison
// // Part 1 : Operators expressions
// 10 + 24 === 34; // true 
// console.log(10+24);
// console.log(10 + 24 === 34)
// // expected result of 10 + 24 is number 34, so compare it with number 34 lead to true

// "10" + "24" === "1024" // true
// console.log("10" + "24");
// console.log("10" + "24" === "1024" );
// // expected result of string "10" + "24" is string "1024", so compare it with string "1024" lead to true

// "Hello" + " " + "2021" === "Hello 2021" // true
// console.log("Hello" + " " + 2021);
// console.log("Hello" + " " + "2021" === "Hello 2021")
// // expected result of string "Hello" + " " + 2021 is string "Hello 2021", so compare it with string "Hello 2021" lead to true

// 1 + 2 * 3 === 7 //true
// console.log(1 + 2 * 3);
// console.log(1 + 2 * 3 === 7);
// // expected result of 1 + 2 * 3 is number 7, so compare it with number 7 lead to true

// (1 + 3) ** 2 === 16 //true
// console.log((1 + 3) ** 2);
// console.log((1 + 3) ** 2 === 16);
// // expected result of (1 + 3) * 3 is number 16, so compare it with number 16 lead to true

// 1/0 === Infinity // true
// console.log(1 / 0);
// console.log(1 / 0 === Infinity);
// // expected result of 1 / 0 is number Infinity, so compare it with number Infinity lead to true

// 6 % 2 === 0 //true
// console.log(6 % 2);
// console.log(6 % 2 === 0);
// // expected result of 6 % 2 is number 0, so compare it with number 0 lead to true

// 5.5 % 2 === 1.5 //true
// console.log(5.5 % 2);
// console.log(5.5 % 2 === 1.5);
// // expected result of 5.5 % 2 is number 1.5, so compare it with number 1.5 lead to true

// Number("123") === 123 // true
// console.log(Number("123"));
// console.log(Number("123") === 123);
// expected result of Number("123") is number 123. so compare it with number 123 lead to true

// typeof(1 + "") === "string" // true
// console.log(typeof(1 + ""));
// console.log(typeof(1 + "") === "string");
// expected result of typeof(1 + "") is type "string". so compare it with type "string" lead to true

// // Part 2 : Comparison expressions

// 5 == "5" === true // true
// console.log(5 == "5");
// console.log(5 == "5" === true);
// expected result of 5 == "5" is boolean true. so compare it with boolean true lead to true

// 8 != 8.0 === false // true
// console.log(8 != 8.0);
// console.log(8 != 8.0 === false);
// expected result of 8 != 8.0 is boolean false, so compare it with boolean false lead to true

// 8 !== 8.0 === false // true
// console.log(8 !== 8.0);
// console.log(8 !== 8.0 === false);
// expected result of 8 !== 8.0 is boolean false, so compare it with boolean false lead to true

// "true" === true === false /// true
// console.log("true" === true);
// console.log("true" === true === false);
// expected result of "true" === true is boolean false, so compare it with boolean false lead to true

// 4 <= 4.0 === true // true
// console.log(4 <= 4.0);
// console.log(4 <= 4.0 === true);
// expected result of 4 <= 4.0 is boolean true, so compare it with boolean true lead to true

// 7 >= 7 === true // true
// console.log(7 >= 7);
// console.log(7 >= 7 === true);
// expected result of 7>= 7 is boolean true, so compare it with boolean true lead to true

// //Part 3 : Logical expressions

// true && true === true // true
// console.log(true && true);
// console.log(true && true === true);
// expected result of true && true is boolean true, so compare it with boolean true lead to true

// true && false === false // true
// console.log(true && false);
// console.log(true && false === false);
// expected result of true && false is boolean false, so compare it with boolean false lead to true

// true || true === true
// console.log(true || true);
// console.log(true || true === true)
// // expected result of true || true is boolean true, so compare it with boolean true lead to true

// false || true === true
// console.log(false || true);
// console.log(false || true === true)
// expected result of false || true is boolean true, so compare it with boolean true lead to true

// !true === false // true
// console.log(!true);
// console.log(!true === false);
// // expected result of !true is boolean false, so compare it with boolean false lead to true

// !false === true // true
// console.log(!false);
// console.log(!false === true);
// expected result of !false is boolean true, so compare it with boolean true lead to true

// false && (true || true) === false // true
// console.log(false && (true || true));
// console.log(false && (true || true) === false);
// expected result of false && (true || true) is boolean false, so compare it with boolean false lead to true

// false && true || true === true // true
// console.log(false && true || true);
// console.log(false && true || true === true);
// // expected result of false && true || true = is boolean true, so compare it with boolean true lead to true


// Conditonals

// function posNev(x){
//     var x ;
//     if (x > 0) {
//         console.log(`${x} is a positive number`)
//     } else if(x < 0) {
//         console.log(`${x} is a negative number`)
//     } else{
//         console.log(`${x} is equal to 0`)
//     }
// }
// posNev(20);

// function compareNum() {
//     var a = 33;
//     var b = 2;
//     var c = 83;
//     if (a > b && b > c) {
//         console.log(`${c} is the smallest number, and ${a} is the biggest number between c = ${c}, b = ${b}, and a = ${a}`);
//     } else if ( a > c && c > b) {
//         console.log(`${b} is the smallest number, and ${a} is the biggest number between b = ${b}, c = ${c}, and a = ${a}`);
//     } else if ( b > c && c > a) {
//         console.log(`${a} is the smallest number, and ${b} is the biggest number between a = ${a}, c = ${c}, and b = ${b}`);
//     } else if ( b > a && a > c) {
//         console.log(`${c} is the smallest number, and ${b} is the biggest number between c= ${c}, a = ${a}, and b = ${b}`);
//     } else if ( c > a && a > b) {
//         console.log(`${b} is the smallest number, and ${c} is the biggest number between b = ${b}, a = ${a}, and c = ${c}`);
//     } else if ( c > b && b > a) {
//         console.log(`${a} is the smallest number, and ${c} is the biggest number between a = ${a}, b = ${b}, and c = ${c}`);
//     } else {
//         console.log('There is something wrong with the logic. Check again');
//     }
//     }
// compareNum();



// Loops

// loop1
// function count() {
//     var a = 7;
//     var b = 2;
//     if (a < b) {
//         for (var i = a; i <= b; i++) {
//             console.log(i)
//         }
//     } else {
//         for (var i = a; i >= b; i--) {
//             console.log(i)
//         }
//     }
// }
// count();

//loop2
// function sum() {
//     var sum = 0;
//     var x = 1;
//     var y = 10
//     for (var i = x; i <=y;i++){
//         sum += i;
//     }
//     console.log(`Sum of number from ${x} to ${y} is ${sum}`);
// }
// sum();

//loop3
// function getSum(n){
//     var sum = 0;
//     var m = n;
//     while (m != 0) {
//         sum = sum + m % 10;
//         m = parseInt(m / 10);
//     }
//     console.log(`Sum of digits of ${n} is ${sum}`);
//     }
//     getSum(2313);


// Function
// function problem1() {
//     console.log("Wow, it worked!");
// }
// problem1();

// function problem2() {
//     console.log("Mad Max");
// }
// problem2();

// function problem3(myName) {
//     console.log(`Print ${myName} as my name`);
// }
// problem3('Khoi');

// function condition(a,b,c) {
//     if (a > b && b > c) {
//         console.log(`${c} is the smallest number, and ${a} is the biggest number between c = ${c}, b = ${b}, and a = ${a}`);
//     } else if ( a > c && c > b) {
//         console.log(`${b} is the smallest number, and ${a} is the biggest number between b = ${b}, c = ${c}, and a = ${a}`);
//     } else if ( b > c && c > a) {
//         console.log(`${a} is the smallest number, and ${b} is the biggest number between a = ${a}, c = ${c}, and b = ${b}`);
//     } else if ( b > a && a > c) {
//         console.log(`${c} is the smallest number, and ${b} is the biggest number between c= ${c}, a = ${a}, and b = ${b}`);
//     } else if ( c > a && a > b) {
//         console.log(`${b} is the smallest number, and ${c} is the biggest number between b = ${b}, a = ${a}, and c = ${c}`);
//     } else if ( c > b && b > a) {
//         console.log(`${a} is the smallest number, and ${c} is the biggest number between a = ${a}, b = ${b}, and c = ${c}`);
//     } else {
//         console.log('There is something wrong with the logic. Check again');
//     }
// }
// condition(3,97,32);

// function seriesOfNumbers(a,b){
//     if (a < b) {
//         for (var i = a; i <= b; i++) {
//             console.log(i)
//         }
//     } else {
//         for (var i = a; i >= b; i--) {
//             console.log(i)
//         }
//     }
// }
// seriesOfNumbers(9, 3)

// function sum(x,y) {
//     var sum = 0;
//     for (var i = x; i <=y;i++){
//         sum += i;
//     }
//     console.log(`Sum of number from ${x} to ${y} is ${sum}`);
// }
// sum(1, 10);

// function getSum(n){
//     var sum = 0;
//     var m = n;
//     while (m != 0) {
//         sum = sum + m % 10;
//         m = parseInt(m / 10);
//     }
//     console.log(`Sum of digits of ${n} is ${sum}`);
//     }
//     getSum(2446);

// function getLeapYears(start, end) {
//     var output = "";
//     for(var i = start; i <= end; i++) {
//         if((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
//             output += i  + " ";
//         }
//     }
//     console.log(output);
// }
// getLeapYears(2000, 2020);


// Swapping value
// function swappingValues(a,b) {
//     var temp = 0;
//     temp = a;
//     a = b;
//     b = temp;
//     console.log(`Originally a = ${b}, b = ${a}. Now after swapping, a = ${a}, b = ${b}`);
// }
// swappingValues(9,11);


// Magic 8-ball
// function play() {
//     const randomNumber = Math.floor(Math.random() * 2);
//     if (randomNumber === 0) {
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }
// }
// play();