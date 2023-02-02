// practices 


// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 


// function namta(a) {
//     var mainNum = a;
//     for (i = 1; i <= 10; i++) {
//         var gun = mainNum * i;
//         console.log(gun);
//     }
// }

// var number = 5;
// var multiplication = namta(number);



// 2
// Write a function that will take hour as the input parameter and will
// convert it into minutes and will return the result in minutes.

// function converter(hour) {
//     var min = 60;
//     var hourToMin = hour*min;
//     return hourToMin;
// }

// var hour = 3;
// var result = converter(hour);
// console.log(result);




// 3. feet to inch 
// function converter(height){
//     console.log(height);
//     var inch = 12;
//     var inchToFeet = height/inch;
//     return inchToFeet;
// }

// var height = 83;
// var result = converter(height);
// result=result.toFixed(1);
// console.log(result, "feet");

// var anotherHeight = 74;
// var result = converter(anotherHeight);
// result=result.toFixed(1);
// result = parseFloat(result);
// console.log(result, "feet");





// 4.miles to kilometers 
// function converter(miles) {
//     console.log('The mile is: ', miles);
//     let kilo = 1.60934;
//     let milesToKilo = miles * kilo;
//     return milesToKilo;
// }

// let distanceInMiles = 4;
// let result = converter(distanceInMiles);
// result = result.toFixed(2);
// result = parseFloat(result);
// console.log(distanceInMiles ,'miles is: ',  result, 'kilometers'); 







// 5/ Is the number even ?
// function isEven(num) {
//     console.log(num, ': this is an Even number');
//     let even = num % 2;
//     if (even == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// let number = 7;
// let result = isEven(number);
// console.log('You are: ',result);



// 6.leap year 
// function isLeapYear(year) {
//     console.log(year, ': is a leap year');
//     let leapYear = year % 4;
//     if (leapYear == 0) {
//         return true;
//     }
//     return false;

// }

// let year = 2016;
// let result = isLeapYear(year);
// console.log('You are: ', result);






// 7.sum of odd numbers from an Array 
function sumFromArray(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        let elements = array[i];
        let index = i;
        sum = sum + elements;
        console.log(index, '+', elements, '=', sum);
    }
    return sum;
}

// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result2 = sumFromArray(array2);
// console.log('Total sum of the array is: ', result2);

// 8.sum of odd numbers from an Array 
function findOddSum(array) {
    let oddNumbers = [];
    for (i = 0; i < array.length; i++) {
        let elements = array[i];
        if (elements % 2 != 0) {
            // console.log(i, elements);
            oddNumbers.push(elements)
        }
    }
    return oddNumbers;
}

// calling oddNumbers function
let array = [5, 7, 8, 10, 45, 30];
let result = findOddSum(array);
console.log(result);

// calling sum function 
let sumOfOddNumbers = sumFromArray(result);
console.log(sumOfOddNumbers);