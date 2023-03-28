
//grab html element by id 
const titleEl = document.getElementById('title');
//change style from dom - improve UI  - camelCase
titleEl.style.backgroundColor = 'purple';
titleEl.style.padding = '15px';
titleEl.style.fontFamily = 'Arial';
titleEl.style.color = '#FFF'

console.dir(titleEl);

//query selector like css selector - select by element, id, class 
const h2 = document.querySelector('h2');  //will return first h2
const h1 = document.querySelector('.main-title');
const h1ID = document.querySelector('#title')
//no h3 will return null
const h3 = document.querySelector('h3')


console.dir(h1);
console.dir(h2)
console.dir(h1ID)
console.dir(h3) //returns null 

 //return all h2 elements
const h2Elements = document.querySelectorAll('h2')

console.log(h2Elements);
console.dir(h2Elements);

//console table
// const arr = ['hello', '123', 'array']
// console.table(arr);

const p = document.querySelector('p');
// p.innerText = "New string value";
p.innerHTML = "New string <strong>value</strong>"; //can wrap in tag

console.dir(p);

//Shopping list
const lis = document.querySelectorAll('li')
console.log(lis);

//adds class to an element classList 
lis[0].classList.add('selected');

lis[1].classList.add('removed')

//remove a class from the classList
lis[2].classList.add('selected');
lis[2].classList.remove('selected')

//check if the element contains the class argument
console.log(lis[0].classList.contains('selected'));

const comments = document.querySelector('#comments');
comments.classList.toggle('selected') //toggle adds the class 
comments.classList.toggle('selected') //toggle removes the class
console.dir(comments)

//for loop to print each li
for (element of lis) {
    // console.log(element);
    if(element.innerText === "Eggs") {
        // console.log("Price is going up");
        break;
    }
}
//for each built in loop
// lis.forEach((element, index) => console.log(element, index))

// ==================== Element collections ============

//return a Node list
const chatLis = document.querySelectorAll('#chat > li');
console.log(chatLis);

//return an HTML Collection List
const allLis = document.getElementsByTagName('li');
console.log(allLis);

//create a regular array from a collection of values 
const arrayOfLis = Array.from(allLis);
console.log(arrayOfLis);

// ============== Create an Element and add attributes ========

//create a new element 

const btn = document.createElement('button');
btn.textContent = 'Click Me!'
//set an attribute on an element
btn.setAttribute('class', "selected") 
console.log(btn);

//add button to the DOM
const body = document.querySelector('body')
body.appendChild(btn)
console.log(body);

//get an attribute from an element 
const att = titleEl.getAttribute('id')
console.log(att); 

//check if an element contains an attribute - returns  boolean 
console.log(titleEl.hasAttribute('class'));

