
// var car = {
//     color : 'purple',
//     brand : 'tesla',
//     price : 423423,
//     speed : '500hp'
// }

// car.color= 'black';

// var Keys = Object.keys(car);
// var values = Object.values(car);
// console.log(Keys);
// console.log(values);




var myBag = {
    pen: 4,
    pencil: 2,
    book: 6,
    eraser: 3,
    paper: 5
}



var keys = Object.keys(myBag);
const values = Object.values(myBag);
// console.log(keys);
// console.log(values);


for (i = 0; i < keys.length; i++) {
    var properties = keys[i];
    var propertyValues = myBag[properties];
    // console.log(properties);
}

for(properties in myBag){
    var elements = myBag[properties];
    console.log(properties , elements);
}
