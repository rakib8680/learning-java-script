// 1 // what is java script ?
// =>an object-oriented computer programming language commonly used to create interactive effects within web browsers.


// 2. How does JavaScript work ?
// => In contrast, JavaScript has no compilation step.Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it.More modern browsers use a technology known as Just - In - Time(JIT) compilation, which compiles JavaScript to executable byte code just as it is about to run.


// 3.What is variable ?
// => A JavaScript variable is simply a name of storage location.There are two types of variables in JavaScript : local variable and global variable.There are some rules while declaring a JavaScript variable(also known as identifiers).Name must start with a letter(a to z or A to Z), underscore(_), or dollar($) sign.


//4.How to declare variables in JavaScript ?
// =>4 Ways to Declare a JavaScript Variable:
// Using var
// Using let
// Using const
// Using nothing


// 6.Data Types in JavaScript ?
// => In Javascript, there are five basic, or primitive, types of data.The five most basic types of data are strings, numbers, booleans, undefined, and null.


// // 14
// var numbers =[34, 54, 2, 65 , 234, 54, 64, 34, 22, 67, 687 , 21 , 4, 75 , 12];
// var totalIndex= numbers.length;
// console.log(totalIndex);
// // 15
// var IndexSearching = numbers.indexOf(234);
// console.log(IndexSearching);
// // 17
// var number = numbers[3];
// console.log(number);
// // 18
// numbers[10]= 69;
// console.log(numbers);


// 21
// var numbers = [34, 54, 2, 65, 234, 54, 64, 34, 22, 67, 687, 21, 4, 75, 12];
// var bairo = numbers.pop();
// var haro =numbers.shift();
// numbers.push(13);
// numbers.unshift(13);
// console.log(numbers);
// console.log(haro);
// console.log(bairo);


// 24
// var myBudget = 52000;
// var macbook = 80000;
// var laptop = 60000;
// var yoga = 40000;
// var oldLaptop = 20000;

// if(myBudget > macbook){
//     console.log("I will buy macbook");
// }
// else if(myBudget > laptop){
//     console.log("I will buy laptop");
// }
// else if(myBudget > yoga){
//     console.log("I will buy yoga");
// }
// else if(myBudget > oldLaptop){
//     console.log("I will buy Potato Laptop");
// }
// else{
//     console.log("I will buy Phone");
// }



// 25

// for(i=1; i<=39; i++){
//     console.log(i,'আসকে আমার মন ভালো নেই');
// }


// 29
// for(i=58; i <=98; i++){
//     console.log(i);
// }



// 30
// for(i=412; i <=456; i+=2){
//     console.log(i);
// }



// 31
// for(i=581; i <=623; i+=2){
//     console.log(i);
// }



// 33
// var names = ['variable', 'dataType', 'function', 'loop', 'javascript'];
// for(i=0; i<5; i++){
//     var ArrayName = names[i];
//     console.log(i, ArrayName);
// }


// 34
// var names = ['variable', 'dataType', 'function', 'loop', 'javascript'];
// var i = 0;
// while (i < 5) {
//     var arrayName = names[i];
//     console.log(arrayName);
//     i++;

// }




// 35
// for(i=30; i <= 86; i++){
//     if(i==44){
//         break;
//     }
//     console.log(i);
// }



// 36
var numbers = [34, 54, 2, 65, 234, 54, 64, 34, 22, 67, 687, 21, 4, 75, 12];
for (i = 0; i < numbers.length; i++) {
    var elements = numbers[i];
    if (elements > 55) {
        continue;
    }
    console.log(elements);
}

