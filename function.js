

// // Function declaration 
// function beyamKor() {
//     console.log('Stand Up');
//     console.log('Sit Down');
//     console.log('Push Up');
// }

// // Calling Function 
// beyamKor();


// function taka(a , b){
//     console.log(a , b);
//     var sum = a+b;
//     return sum;
// }

// var total =taka(5 , 3);
// console.log(total);



// function makingChips(alu){
//     var moshla = 4;
//     var tel = 6;
//     var potatoChips= tel+moshla+alu;
//     return potatoChips;
// }

// var alurKG = 8;
// var chipsDone = makingChips(alurKG);
// console.log(chipsDone);



// function averageMaker(assignment1, assignment2, assignment3, assignment4){
//     console.log(assignment1, assignment2, assignment3, assignment4);
//     var total = assignment1+assignment2+assignment3+assignment4;
//     console.log(total);
//     var average = total/4;
//     return average;
// }

// var a=57;
// var b=57;
// var c=60;
// var d=55;
// var averageMarks = averageMaker(a, b, c, d);
// console.log(averageMarks);


// var averageMarks = averageMaker(9,7,9,9);
// console.log('This is 2nd call : ',averageMarks);




function powerMaker(a , b){
    console.log('The main number is : ', a, 'The power is :' , b );
    var power = Math.pow(a,b);
    return power;
}

var a = 5;
var b = 2;
var result = powerMaker(a,b);
console.log('and the result is : ', result);