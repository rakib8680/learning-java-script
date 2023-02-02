let mySelf = 'Amar nam Abdullah Al Rakib';

// const exists = 'RakiB';

// let DoesExist = mySelf.toLowerCase().includes(exists.toLowerCase());
// console.log(DoesExist);

// console.log(mySelf[10]);
// console.log(mySelf.indexOf('Rakib'));

// if (mySelf.indexOf('khan') != -1) {
//     console.log('Tumi acho');
// }
// else {
//     console.log('Tumi nai');
// }

// slice 
let ordek = mySelf.slice(9, 17);
// console.log(ordek);

let ordek2 = mySelf.substring(9, 17);
// console.log(ordek2);


// split 
let wordSlice = mySelf.split(' ');
let charSlice = mySelf.split('');
let sentence = mySelf.split('.');
// console.log(sentence);

// concat . join
const firstName = 'Rakib';
const lastName = 'Khan';
let adjust = firstName.concat( ' ',lastName);
console.log(adjust);