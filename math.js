// let a = 34;
// let b = 64;
// parthokko .........................................................................
// const difference = Math.abs(a - b);
// console.log(difference);


// let c = 4.4423;
// const purnoSongkha = Math.round(c);
// console.log(purnoSongkha);

// const ceiling = Math.ceil(c);
// // console.log(ceiling);
// const flooring = Math.floor(c);
// console.log(flooring);

// /////////////////////////////////////////////
// random ...........................................................................
// var e = Math.round(Math.random() * 100)
// console.log(e);



// swapping ...............................................................................
// let num1 = 3;
// let num2 = 4;
// const temp = num1;
// console.log(num1, num2);
// num1 = num2;
// num2 = temp;
// console.log(num1, num2);

// system 2 
// [num1, num2] = [num2, num1];
// console.log(num1, num2);




// find the largest number using function and if/else  ..........................................................
// function getLargest(num1, num2, num3) {
//     console.log('Your three numbers are: ', num1, num2, num3);
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1, ' is the largest');
//     }
//     else if (num2 > num1 && num2 > num3) {
//         console.log(num2, '  is the largest');
//     }
//     else {
//         console.log(num3, ' is the largest');
//     }
// }

// let num1 = 44;
// let num2 = 4;
// let num3 = 11;
// // largestNumber = getLargest(num1, num2, num3);


// function getMinimum(num1, num2, num3) {
//     console.log("Your numbers are:", num1, num2, num3);
//     let result = Math.min(num1, num2, num3);
//     return result;
// }

// let Minimum = getMinimum(num1, num2, num3);
// console.log("The smallest number is:", Minimum);




// Find the smallest from an Array using function............................................................................

// function getSmallest(numbers) {
//     let elements = numbers[0];
//     for (i = 0; i < numbers.length; i++) {
//         let number = numbers[i];
//         if (number < elements) {
//             elements = number;
//         }
//     }
//     return elements;

// }

// let ages = [44, 64, 34, 11, 75, 45, 74, 23, 33];
// let smallest = getSmallest(ages);
// console.log(smallest);





// Find the largest from an Array using function............................................................................

function getLargest(array) {
    let firstElement = array[0];
    for (i = 0; i < array.length; i++) {
        let element = array[i];
        if (element > firstElement) {
            firstElement = element;
        }
    }
    return firstElement;
}


let ages = [44, 64, 34, 11, 75, 45, 74, 23, 33];
const result = getLargest(ages);
console.log('The largest number is:', result);