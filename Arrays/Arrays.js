 //let fruits=['banana','apple','mango'];
 let fruits = new Array('banana','apple','mango');

 console.log(fruits[2]);// access value

 fruits[0]='pear';
 console.log(fruits);

 for (let i=0; i<fruits.length; i++){
     console.log(fruits[i]);
 }

 // array common methods
 console.log('to string',fruits.toString());
 console.log(fruits.join(' - '));
 console.log(fruits.pop(),fruits); // removes last item
 console.log(fruits.push('pineapple'),fruits); // appends

fruits[fruits.length]='orenge';//same as push
console.log(fruits);

fruits.shift(); //remove first element
console.log(fruits);

fruits.unshift('kiwi'); // add first element
console.log(fruits);

let vegetables=['carrot','tomato','beatroot'];
let garden = fruits.concat(vegetables); //combine arrays
console.log(garden);

console.log(garden.slice(1,4));
console.log(garden.reverse());

let someNum =[3,5,7,23,4,56,78,45,25,89,90,67];
console.log(someNum.sort(function(a,b){return a-b}));// sorted in ascending
console.log(someNum.sort(function(a,b){return b-a}));//sorted in desending 

let emptyArray = new Array();
for (let num=0; num<=10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);