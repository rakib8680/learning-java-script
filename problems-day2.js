// problem 1 
var fruits = ['apple', 'Banana', 'orange'];
var index = fruits.indexOf('Banana');
console.log(index);
fruits[1] = ('Mango');
fruits.pop();
fruits.push('watermelon');
console.log(fruits);


// Problem 2
var myScore = 85;
var tom =66;
var jane = 95;
var peter = 56;
var john = 40;

if (myScore >= 80){
    console.log('A+');
}
else if (myScore >= 60){
    console.log('B');
}
else if (myScore >= 50){
    console.log('C');
}
else if (myScore >= 40){
    console.log('D');
}
else{
    console.log('Failed');
}


// Problem 3

var a = 39;
var b = 324;
var c = 69;

if (a > b && a > c) {
    console.log('A is the largest');
}
else if (b > a && b > c) {
    console.log('B is the largest');
}
else{
    console.log('C is the largest');
}

