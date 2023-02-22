

//get the button
const button = document.querySelector('button')
const removeEvent = document.getElementById('remove')

//add an event listener                 //event object
button.addEventListener('click', function(event) {   //function() = passing anonymous function
    // console.log(event);    //logs event obj can inspect in console
    // console.log(event.type);    //click
    // console.log(event.target);  //button being targeted

    const li = document.createElement('li');
    const input = document.querySelector('input');
    li.textContent = input.value;

    const ul = document.querySelector('ul')
    ul.appendChild(li)
    // document.querySelector('ul').appendChild(li)  //same but does not save ul
    input.value = '';   //clear text box

    console.log(li);
    console.log(input);
    console.dir(event);
})

//second event listener calls function
button.addEventListener('click', sayHello())


function sayHello() {
    console.log('Fetching data from database');
}

removeEvent.addEventListener('click', function(){
    button.removeEventListener('click', sayHello) 

})


// ======== Event bubbling ==========
const ul = document.querySelector('ul');
const body = document.querySelector('body');

ul.addEventListener('click', function(e){
    // console.log('From UL || Event on: ', e.target);
    e.stopPropagation;
    e.target.remove()
})

body.addEventListener('click', function(e){
    console.log('From Body || Event on: ', e.target);
})
