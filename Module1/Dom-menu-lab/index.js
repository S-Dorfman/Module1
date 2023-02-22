
//Task 1
const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add('flex-ctr');

//Task 2
const topMenuEl = document.getElementById('top-menu')

topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

//Task 3
// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
//iterate over menuLinks array - for Loop
for (i = 0; i < menuLinks.length; i++) {
    // Create an <a>element.
   const a = document.createElement('a')
    //  On the new element, add an href attribute with its value set to the href property of the "link" object.  
   a.setAttribute('href', menuLinks[i].href);
  //  console.log(a);
   //Set the new element's content to the value of the text property of the "link" object.
   a.textContent = menuLinks[i].text;
    // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(a);   
}

//(Can also use For Each Loop)
// console.log(mainEl);
// console.dir(mainEl);
// console.log(topMenuEl);

//Task 4
const subMenuEl = document.getElementById('sub-menu')

subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = 0;

// console.log(subMenuEl);

//Task 5
//Select all a elements in topMenuLinks
const topMenuLinks = document.querySelectorAll('A');
//Declare a global showingSubMenu variable and initialize it to false
let showingSubMenu = false; 

//Attach a delegated 'click' event listener to topMenuEl. 
topMenuEl.addEventListener('click', function(event) {
  //call the event object's preventDefault()method.
  event.preventDefault();
  // The second line of code function should immediately return if the element clicked was not an <a>element.
  if (event.target.tagName !== 'A'){
    return; 
  }
  console.log(event);
  //console.log the content of the <a>to verify the handler is working.
  console.log(event.target.text);
  // if the clicked <a>link has a class of active:
  if (event.target.classList === 'active'){
    // Remove the activeclass from the clicked <a>element.
    event.target.classList.remove()
    // Set the showingSubMenuto false.
    showingSubMenu = false
    // Set the CSS top property of subMenuEl to 0.
    subMenuEl.style.top = 0;
    // returnto exit the handler.
    return;
  }
console.log(event.target.classList);
})
// console.log(topMenuLinks);



