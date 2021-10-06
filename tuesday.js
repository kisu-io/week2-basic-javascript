// Intro Ziff Zubb

function ziffZubb(start, end) {
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log("ZiffZubb")
        } else if (i % 5 === 0) {
            console.log("Zubb")
        } else if (i % 3 === 0) {
            console.log("Ziff")
        } else {
            console.log(i)
        }
    }
}
// ziffZubb(2, 9);

// GCD

function gcd(a, b) {
    if(b === 0) {
        return a;
    }
    return gcd(b, a % b)
}
// console.log(gcd(9,18));

// LCM
// function lcm(a,b) {
// let min = (a > b) ? a : b;

// while (true) {
//     if (min % a == 0 && min % b == 0) {
//         console.log(`The LCM of ${a} and ${b} is ${min}`);
//         break;
//     }
//     min++;
//     }
// }
// lcm (10,20);

//Prime Number
// function prime(n){
//     if (n===1) {
//       return ("1 is neither prime nor composite number.");
//     }else if(n === 2){
//       return true;
//     }else{
//       for(var x = 2; x < n; x++){
//         if(n % x === 0){
//           return false;
//         }
//       }
//       return true;
//     }
//   }

//   console.log(prime(20));

// 6. Capture Time
function captureTime () {
    var a = Date.now();
    console.log(`minutes ${a / 60000}`)
    console.log(`hours ${a / 3600000}`)
    console.log(`years ${a / (60000 * 60 * 24 * 365)}`)
    console.log(`months ${a / (60000 * 60 * 24 * 30)}`)
    console.log(`seconds ${a / 1000}`)
    console.log(`days ${a / 60000 * 60 * 24}`)
}

//Advance Random Number
function getNum() {
  for (var i = 0; i < 5; i++){
      console.log(Math.random())
  }

}
// getNum();

function getRandomInt() {
    for (var i = 0; i < 100; i++) {
        var a = Math.floor(Math.random() * 10);
        if (0 < a < 10) {
            console.log(a)
        }
        }
    }
// getRandomInt()

function getRandom(start,end) {
    for (var i = 0; i < 100; i++) {
        var a = Math.floor(Math.random() * (end-start+1) + start);
        if (start < a < end) {
            console.log(a)
            break;
        }
    }
}
// getRandom(5,8)

// get random item from array
function getRandomItem(arr) {
    var randomIndex =Math.floor(Math.random() * arr.length)
    console.log(randomIndex);
    return arr[randomIndex]
}
var arr = ["cat", "dog", "human", "wife"]
// console.log(getRandomItem(arr))

// Nested loop
function nestedLoop(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            string += i;
        }
    string += " \n";
    }
console.log(string)
}
// nestedLoop(5);

function gridSize(n) {
for (let y = 0; y< n; y++) {
  let line = '';
  for (let x=0; x< n; x++) {
    line += ((x+y)%2) ? ' ' : '#';
  }
  console.log(line);
    }
}
// gridSize(8);


//Iterate over Arrays
var workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
function payDay(){
    for (var i = 0; i < workingHours.length; i++){

        console.log(`Peter earned ${workingHours[i]*25} today!`);
    }
}
// payDay()

function sum(){
    var a = 0
    for (var i = 0; i < workingHours.length; i++){
        a += (workingHours[i])
    }
    console.log(a*25)
}
// sum(workingHours)


// const sumOfMoney = (numOfWeek) => {
//     const max = 8;
//     const min = 6;
//     let sum = 0;
//     let result = [];
//     for(let i = 0; i < numOfWeek * 5; i++) {
//         let numOfHourPerDay = Math.floor(Math.random() * (max - min + 1) + min); // random số giờ một ngày
//         result.push(numOfHourPerDay); // push số giờ vào array
//         sum += numOfHourPerDay * 25; // tính tổng số tiền
//     }

//     console.log(sum); // in ra tổng
//     console.log(result); // in ra array
// }

// sumOfMoney(50);

const sumOfMoney = (numOfWeek) => {
    const max = 8;
    const min = 6;
    let sum = 0;
    for(let i = 0; i < numOfWeek * 5; i++) {
    let numOfHourPerDay = Math.floor(Math.random() * (max - min + 1) + min);
    sum += numOfHourPerDay * 25;
}
    console.log(sum);
    }

    sumOfMoney(3);

// Truthy/Flasy
// const one = 1;
// if(one) {
//     console.log("Is truthy")
// }
// const zero = 0;

// if (zero) {
//   console.log("Is truthy");
// } else {
//   console.log("Isn't truth");
// }