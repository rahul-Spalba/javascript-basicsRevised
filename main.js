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
// cosnt
const reminderInJson = JSON.stringify(reminders);
console.log('Json Array',reminderInJson);

//loopS IN jS
for (let i =0; i<reminders.length; i++){
    console.log(reminders[i]);
}
//  While
let i = 0;
while(i<reminders.length){
    console.log('while',reminders[i]);
    i++;
}
//ES6
for(let reminder of reminders){
    console.log('using of',reminder);
}

//High Order Array Method always advised

reminders.forEach(function(reminder){
    console.log('Higher Order',reminder)
});

/// example Map
const remindersInMap = reminders.map(function(reminder){
    return reminder.message;
});
console.log('remindersInMap', remindersInMap);
// example Filter
const remindersInFilter = reminders.filter(function(reminder){
    return reminder.done==true;
});
console.log('Filter', remindersInFilter);

//Chaining ArrayMethods 

const remindersWithChaining = reminders.filter(function(reminder){
    return reminder.done==true;
}).map(function(reminder){
    return reminder.message;
});
console.log('Chaining', remindersWithChaining);

//Conditionals

const dumb = '10';
const intelligent = 10;
if(dumb===10){
    console.log('dumb is 10');
}
else if (intelligent==10){
    console.log('intelligent is 10');
}
else{
    console.log('dumb is not 10');
}

/// Ternary Operators:
 const alpha = 10;
  const color = alpha>10 ? 'yellow': 'blue';
  console.log(color);


  switch (color) {
      case 'red':
          console.log('color is red');
          break;
      case 'blue':
        console.log('color is blue');
            break;    
      default:
          console.log('No color');
          break;
  }
// Function 

function addNumbers(a=10,b=30){
    return(a+b);
}
console.log(addNumbers());
console.log(addNumbers(100,300));

/// Arrow Functions  introduced in ES6
const addNum = (a = 10, b =20)=> a+b;
console.log(addNum());
const addNum2 = a => a+5;
console.log(addNum2(5));
// Using  the for each with arrow function
reminders.forEach((reminder) => console.log(reminder));


/// ***************** OOPS in Java Script ***********

//Constructor function
function MyData(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
//Instantiate an object

const rahul = new MyData('rahul', 'banjare');
console.log(rahul.firstName);

// using date object
function MyDateOfBirth(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
const rahulDOB = new MyDateOfBirth('kumar','rishabh','2-14-1995');
console.log(rahulDOB.getBirthYear());
console.log(rahulDOB.getName());

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.nationality = "English";
  const newPerson = new Person('rohit','sharma','24','black');
  console.log(newPerson);

  // ****************** SELECTORS*******************//

  //single element  

//   const form =document.getElementById('my-form');
//   console.log(form);

  console.log('querySelector select the first h1 tag', document.querySelector('h1'));
  console.log('querySelector select the first myForm tag', document.querySelector('.container'));

  //Multiple element selector 
  console.log(document.querySelectorAll('.item'));
//   console.log(document.getElementsByClassName('item'));
 
const items  = document.querySelectorAll('.item');
items.forEach((item)=>console.log('iterating elements of DOM',item));

// DOM manipulation
const ul = document.querySelector('.items'); // grabs ul with item class
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'GoodMorning';

// ul.lastElementChild.innerHTML = '<h2>HE HE HE</h2>'

const btn  = document.querySelector('.btn');
btn.style.background ='red';


btn.addEventListener('mouseover', (e)=>{
    e.preventDefault();
    console.log(e.target);

    // document.querySelector('#my-form').style.background='#ccc';
    // document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML= '<h1>Hello</h1>';
} );

const formData = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList =  document.querySelector('#users');

formData.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    if(nameInput.value ==='' || emailInput.value===''){
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';
        setTimeout(()=>msg.remove(), 3000);
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);
        //clear input
        nameInput.value='';
        emailInput.value='';
    }
  
}