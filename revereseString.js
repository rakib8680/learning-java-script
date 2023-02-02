

// function makeReverse(str) {
//     let newStr = '';
//     for (i = str.length - 1; i >= 0; i--) {
//         let result = str[i];
//         newStr = newStr.concat(result);
//     }

//     return newStr;
// }


// let str = 'I live in Bangladesh'
// let reversed = makeReverse(str);
// console.log(reversed);








// reverse word ....................................................................................
function getReversed(str) {
    let array = [];
    
    let cut = str.split(' ');
    for (i = cut.length - 1; i >= 0; i--) {
        let reversed = cut[i];
        array.push(reversed);
    }
    const sentence =array.join(' ');
    return sentence;
}


var myStr = 'Dhaka is the capital of Bangladesh'
let result = getReversed(myStr);
console.log(result);