

// 1. Factorial value using loop in function
// function factorial(numbers) {
//     let multiply = 1;
//     for (i = numbers; i >= 1; i--) {
//         multiply *= i;
//     }
//     return multiply;
// }

// let number = 3;
// let result = factorial(number);
// console.log('The factorial value of', number, 'is: ', result);




// Practice Problem 2
// 2.Write a function findLeapYear() that will take the array
// [2023, 2024, 2025, 2028, 2030] as the input parameter and will check if
// each year is a leap year.If a year is a leap year insert that year in a
// new array, return the new array and print the result.

// function findLeapYear(array) {
//     let leapYears = [];
//     for (i = 0; i <= array.length; i++) {
//         let elements = array[i];
//         if (elements % 4 == 0) {
//             leapYears.push(elements);
//         }
//     }
//     return leapYears;
// }

// let array = [2023, 2024, 2025, 2028, 2030];
// let result = findLeapYear(array);
// console.log('These are leap years: ', result);



// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

function toLowerCase(name) {
    let result = name.toLowerCase();
    return result;
}

let names = 'RAkib KHaN'
let lowerCase = toLowerCase(names);
console.log(lowerCase);
