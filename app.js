//                  TASK 1
// let num1 = +prompt("enter 1st number");
// let num2 = +prompt("enter 2nd number");
// if (num1 > num2) {
//     console.log("num1 is greater ");
// } else {
//     console.log("num2 is greater");
// }

//               TASK 2
// let numb = +prompt("enter any integer");
// if (numb < 0) {
//     console.log("The number" + numb + " is negative ")
// } else {
//     console.log("the number " + numb + " is positive");
// }
//             TASK 3
// let n1 = +prompt("Enter n1: ");
// let n2 = +prompt("Enter n2: ");
// let n3 = +prompt("Enter n3: ");
// let n4 = +prompt("Enter n4: ");
// let n5 = +prompt("Enter n5: ");
// let max = n1;
// if (n2 > max) {
//     max = n2;
// }
// if (n3 > max) {
//     max = n3;
// }
// if (n4 > max) {
//     max = n4;
// }
// if (n5 > max) {
//     max = n5;
// }
// console.log("The largest number among the 5 numbers is: " + max);

//           TASK 4

// for (let i = 0; i < 5; i++) {
//     let n = i % 2;
//     if (n === 0) {
//         console.log(i + "is even");
//     } else {
//         console.log(i + "is odd")
//     }

// }

//              TASK 5
// let marks = +prompt("Enter your programming marks");
// if (marks <= 60) {
//     console.log("Your Grade is F ");

// } else if (marks <= 70) {
//     console.log("Your Grade is D");
// } else if (marks <= 80) {
//     console.log("Your grade is C");

// } else if (marks <= 90) {
//     console.log("Your Grade is B");
// } else {
//     console.log("your Grade is A");
// }
//                TASk 6
// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }

//             TASK 7
for (let i = 0; i < 6; i++) {
    let n = " ";
    for (let j = 0; j < i; j++) {
        n += "* "
    }

    console.log(n);
}