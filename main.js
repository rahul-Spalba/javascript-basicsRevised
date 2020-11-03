//Windows Object alert method 
// alert("Hi Rahul");

//conole object log method to print;
console.log("javaScript External");

//console object error method to  show erros
console.error("error displayed with red cross");

//console objects warning
console.warn("this is warning");


//var is globally scoped variable causes conflict with same variable names

//ES6 -> let , const

let Myname  = 'Rahul';
// name = 'Bravo';
console.log(Myname);
//Const is used when the variables are meant to be constant
const marks = 12;
// marks = 1; main.js:23 Uncaught TypeError: Assignment to constant variable
// const marks =124 gives error Uncaught SyntaxError: Identifier 'marks' has already been declared
console.log(marks);

// primitve Data types
//  type-> String
const name = 'Rahul'; 
//  type-> number
const num = 12; 
//type-> ->number ** there is noting like float and double in js
const decimal =12.5
//type-> > boolean
const x = true;  
//type-> -> null object 
const n = null;  
//type-> -> undefined
const y = undefined;
//type->undefined;
let z;

//Concatenation in js
//old way-:
console.log('My Name is'+name+'number is'+num +'old ways');
//ES6 using template literals-:
console.log(`My name is ${name} number is ${num} ES6 way using template literal`);

// **********Strings**************\
const hello = 'Hello World!';
console.log(`length of const Hello World! == ${hello.length}`); // prints length
console.log(hello.toUpperCase()); //changes  string to upper case\
console.log(hello.substring(0,5)); // take begining and ending index of substring
//****chaining two string methods*/
console.log(hello.substring(0,5).toUpperCase());
//split in strings/
console.log(hello.split('')); // take individual string and makes it an array

const phrase = 'quick brown fox jumps over the lazy dog';
console.log(phrase.split(' ')); // space is acting as separator

// **** Arrays***//
//in js arrays are dynamic

const number = new Array(1,2,3,4,5);
console.log(number);
//mixed array
const random = ['apples','oranges',123, true];
random[1]='banana';
random.push('hello');
random.unshift('first');
random.pop('banana');
console.log(random); 
console.log(Array.isArray('banana')); // shoud give false on console as banana was removed using pop    

console.log(random.indexOf(123)); // should give 3

// ******** object literals********

const information= {
    fname:'Rahul Banjare',
    college:'BIT Durg',
    address:{
        street:'866',
        city:'Bhilai',
        state:'CG',
    },
    technologies:['react','nodejs','bootstrap']
}

console.log(information);
console.log(information.address.state);
console.log(information.technologies[2]);

//desctructuring object
const{fname, college,address:{city}} = information;
console.log(fname);
console.log(city);

//Array of objects
const reminders =[
    {
        id:1,
        message:'take medicine',
        done:false,
    },
    {
        id:12,
        message:'take shower',
        done:false,
    },
    {
        id:23,
        message:'breakfast',
        done:true,
    }
];
console.log(reminders);