// const programmers = [];

// programmers[0] = "Bill";
// programmers[1] = "Mark";
// programmers[2] = "Elon";
// programmers[1] = "Alan";
// programmers.shift();

// // console.log(programmers);

// const myCompanies = ["grab", "vingroup"];
// const theirCompanies = ["microsoft", "facebook"];

// const techCompanies = myCompanies.concat(theirCompanies);

// console.log(techCompanies);


// function reverseArray() {
//     let arr = ["A", "B", "C"]

//     return arr.reverse()
// }
// console.log(reverseArray(["A", "B", "C"]));
// let arr = [1, 2, 3, 4, 5];

// function reverseArray(input) {
//     var ret = new Array;
//     for(var i = input.length-1; i >= 0; i--) {
//         ret.push(input[i]);
//     }
//     return ret;
// }
// console.log(reverseArray(arr))
// console.log(arr)

// var arr = [1, 2, 3, 4, 5];
// function reverseArray(arr2) {
//   var half = Math.floor(arr2.length / 2);
//   for (var i = 0; i < half; i++) {
//     var temp = arr2[arr2.length - 1 - i];
//     arr2[arr2.length - 1 - i] = arr2[i];
//     arr2[i] = temp;
//   }
//   return arr2;
// }
// console.log(arr)
// console.log(reverseArray(arr))

function splitOddAndEven() {
    let odd = [];
    let even = [];
  
    for (let i = 0; i < 100; i++) {
        var a = Math.floor(Math.random()* 101);
        if (0 < a && a < 100) {
            if (a % 2 !== 0) {
                odd.push(a)
            } else {
                even.push(a)
            }
        } 
    }
    console.log(odd);
    console.log(even);
}
// splitOddAndEven();

const mark = {};

mark.fullName = "Mark Zuckerberg";
mark.company = "Google";
mark["company"] = "Facebook"; // 2nd way to set property on object
mark.age = 18;
mark.city = "San Francisco";

// console.log(mark);

const elon = {
    age: 33,
    city: "Austin",
    fullName: "Elon Musk",
    company: ["Space-X", "Tesla"],
  };
  
//   console.log(elon);

const charles = {
    age: 33,
    city: "HoChiMinh",
    fullName: "Charles Lee",
    company: "CoderSchool",
  };

  function isAnAdult(person) {
    if (person.age > 17) {
      console.log("Is adult!");
    }
  }
  
//   isAnAdult(charles);

function isCoderSchoolStaff(person) {
    if (person.company === "CoderSchool") {
      console.log("Is working at CoderSchool!");
    } else {
        console.log("Is not working at CoderSchool!")
    }
}
  
// isCoderSchoolStaff(charles);

function describePerson(person) {
    console.log(`full name ${person.fullName}`)
    console.log(`age ${person.age}`)
    console.log(`company ${person.company}`)
}

function logLastName(person) {
    console.log(`last name ${person.fullName.split(' ').slice(-1).join(' ')}`)
}
// logLastName(elon)

function getInitial(person) {
    person = person.fullName;
    
    let initials = person.split(' ');
    if(initials.length > 1) {
      initials = initials.shift().charAt(0) + initials.pop().charAt(0);
    } else {
      initials = person.substring(0, 2);
    }
    console.log(initials);
}
//   getInitial(elon)

function ageOneYear(person) {
    console.log(`age ${person.age + 1}`)

}
// ageOneYear(elon)

function getBirthYear(person) {
    console.log(`birth ${2021 - person.age}`)
}
// getBirthYear(elon)


//OBJECTMETHOD
// var userA = {
//     id: 123456,
//     name: "Peter Parker",
//     email: "peter.parker@gmail.com",
//     role: "student",
//     courseId: 112233,
//   };
//   console.log(Object.keys(userA))
  
//   console.log(Object.values(userA))
  
//   const result = Object.keys(userA).length;
//   console.log(result);

//   function printAllKeys(x){
//     var listOfKeys = Object.keys(x);
//     for (let index = 0; index < listOfKeys.length; index++) {
//         const keyName = listOfKeys[index];
//         console.log(`The value of ${keyName} is ${x[keyName]}`)
//     }
//   }
//   phrintAllKeys(charles)

//   console.log(userA.hasOwnProperty('email'));

//   console.log(userA.hasOwnProperty('age'));

//   userA.age = 15

//   console.log(userA.hasOwnProperty('age'));

var data =
{
    id: 123456,
    name: "Peter Parker",
    email: "peter.parker@gmail.com",
    role: "student",
    courseId: 112233,
    age:15,
    tasks: [
      { name: "Task 1", status: "Done"},
      { name: "Task 2", status: "Not Started"},
      { name: "Task 3", status: "In Progress"},
      { name: "Task 4", status: "Not Started"},
      { name: "Task 5", status: "Done"},
      { name: "Task 6", status: "In Progress"},
      { name: "Task 7", status: "Not Started"},
      { name: "Task 8", status: "Done"},
      { name: "Task 9", status: "Done"},
      { name: "Task 10", status: "In Progress"}
    ]
  };

  //OPTION1
function listListNotStarted(data) {
    var listOfTasks = data.tasks
    listOfTasks.forEach(function(element){  
        if (element.status === "Not Started") {
            console.log(`${element.name} is ${element.status}`);
        }
    });
}    
// listListNotStarted(data);

//OPTION2
function flOption(data) {
    var listOfTasks = data.tasks;
    for (let index = 0; index < listOfTasks.length; index++) {
        const element = listOfTasks[index];
        if (element.status === "Not Started") {
            console.log(`${element.name} is ${element.status}`);
        }
    }
}
// flOption(data);

function formatedTaskList(data) {
    var listOfTasks = data.tasks;
    console.log("Not Started");
    listOfTasks.forEach(function name(singleTask) {
        if (singleTask.status === "Not Started") {
            console.log(`- ${singleTask.name}`);
        }
    });
    console.log("Done");
    listOfTasks.forEach(function name(singleTask) {
        if (singleTask.status === "Done") {
            console.log(`- ${singleTask.name}`);
        }
    });
    console.log("In Progress");
    listOfTasks.forEach(function name(singleTask) {
        if (singleTask.status === "In Progress") {
            console.log(`- ${singleTask.name}`);
        }
    });
} 
// formatedTaskList(data)

function generateFakeTask(n) {
    var res = [];
    var numberOfTask = n;
    var statusOptions = ["Not Started","Done","In Progress"];
    for (let index = 0; index < n; index++) {
        var random = statusOptions[Math.floor(Math.random() * 3)]
        var singleTask = {name: `task ${index + 1}`, status: random}
        res.push(singleTask)
    }
    // console.log(res);
    return res;
}

data.tasks = generateFakeTask(10);

formatedTaskList(data);