

// 1.celsius to fahrenheit  function...........................................................................................

// function celsiusToFahrenheit(celsius) {
//     console.log('Enter the Celsius temp: ', celsius);
//     const formula = (celsius * 1.8)+32;
//     return formula;
// }

// let celsius = 34;
// let fahrenheit = celsiusToFahrenheit(celsius);
// console.log(fahrenheit);





// 2,fahrenheit to celsius;.......................................................................................................

// function fahrenheitToCelsius(fahrenheit) {
//     console.log('Enter the fahrenheit value: ', fahrenheit);
//     const formula = (fahrenheit - 32) / 1.8;
//     return formula;
// }

// let fahrenheit = 98.4;
// const celsius = fahrenheitToCelsius(fahrenheit);
// console.log(celsius);






// 4. Grade marks  using switch.................................................................................

// function getGrade(marks) {
//     console.log('Your marks: ', marks);
//     switch (marks) {
//         case 100:
//         case 90:
//         case 80:
//             console.log('You got A+');
//             break;

//         case 70:
//             console.log('You got A');
//             break;

//         case 60:
//             console.log('You got B');
//             break;

//         case 50:
//             console.log('You got C');
//             break;

//         default:
//             console.log('You have failed');
//     }
//     return 0;
// }

// let yourMarks = 90;
// const yourGrade = getGrade(yourMarks);
// console.log(yourGrade);





// 5. grade marks using if else ............................................................................

// function getGrade(marks) {
//     if (marks >= 80) {
//         return 'A+';
//     }
//     else if (marks > 70) {
//         return 'A';
//     }
//     else if (marks > 60) {
//         return 'A-';
//     }
//     else if (marks > 50) {
//         return 'B';
//     }
//     else if (marks > 40) {
//         return 'C';
//     }
//     else {
//         return 'Failed';
//     }
// }


// let yourMarks = 88;
// const yourGrade = getGrade(yourMarks);
// console.log('You got: ', yourGrade);


// let rakibsMark = 77;
// const grade = getGrade(rakibsMark);
// console.log('rakib got: ', grade);








// 6.leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year 
// নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।..................................................

// function leapYear(year) {
//     console.log(year, 'is a Leap Year');
//     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }


// let year = 2016;
// const isLeapYear = leapYear(year);
// console.log('You are', isLeapYear);










// 7. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। .........................................

// function multiplication(number) {
//     for (i = 1; i <= 10; i++) {
//         let a = number * i;
//         console.log(a);
//     }


// }

// let number = 6;
// const result = multiplication(number);





// 8. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ 
// এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে ...........................................................
// আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto 
// ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।

// function getFullname(a, b) {
//     let fullname = a + ' ' + b;
//     return fullname;
// }

// let firstName = 'Rakib';
// let lastName = 'Khan';
// let result = getFullname(firstName, lastName);
// console.log(result);









// 9. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে
//  সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।.....................................................................

// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।

// function getPower(number, power) {
//     let formula = Math.pow(number, power);
//     return formula;
// }

// let number = 5;
// let power = 8;
// let result = getPower(number, power);
// console.log(result);








// 10. object ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

let rakib = {
    age: 20,
    class: 100,
    fullName: 'Rakib Khan',
    fruits: ['orange', 'banana', 'apple', 'grapes'],
    eyes: 2
}


for (i = 0; i < rakib.fruits.length; i++) {

    let elements = rakib.fruits[i];
    console.log(elements);
}





