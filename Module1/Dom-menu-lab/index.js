
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

//*Task 5
//Select all a elements in topMenuLinks
const topMenuLinks = document.querySelectorAll('A');
//Declare a global showingSubMenu variable and initialize it to false
let showingSubMenu = false; 
//Task 5.2
//Attach a delegated 'click' event listener to topMenuEl. 
topMenuEl.addEventListener('click', function(event) {
  //call the event object's preventDefault()method.
  event.preventDefault();
  // The second line of code function should immediately return if the element clicked was not an <a>element.
  if (event.target.tagName !== 'A'){
    return; 
  }
//subMenu showing or hidden
let clickObj = menuLinks.find((link)=>link.text === event.target.textContent);
console.dir(event.target)
console.log(menuLinks);
// menuLinks.forEach(link => {
  console.log(clickObj.subLinks);
  
  if (clickObj.subLinks) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false; 
  } 
  
  if(clickObj.subLinks) {
    showingSubMenu = true;
    buildSubMenu(clickObj.subLinks)
    subMenuEl.style.top='100%';
  } else{
    subMenuEl.style.top = '0';
  }
  function  buildSubMenu(subLinks) {
    subMenuEl.textContent = "";
    let subMenu = subLinks.forEach((link) => {
      document.createElement('a'); 
     link.setAttribute('href', link.href); 
     link.textContent = link.text; 
     return link;
    })  
    subMenuEl.append(subMenu);
  }

  // console.log(event);
  //console.log the content of the <a>to verify the handler is working.
  console.log(event.target.text);

  //Task 5.3 
  // if the clicked <a>link has a class of active:
  if (event.target.classList.contains('active')){
    // Remove the activeclass from the clicked <a>element.
    event.target.classList.remove('active')
    // Set the showingSubMenuto false.
    showingSubMenu = false
    // Set the CSS top property of subMenuEl to 0.
    subMenuEl.style.top = 0;
    // returnto exit the handler.
    return;
  }
console.log(event.target.classList);
// console.log(topMenuLinks);

//Task 5.4
// Next, the event listener should remove a class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.
event.target.classList.remove('active');

//Task 5.5
//the event listener should add a class name of activeto the <a>element that was clicked.
event.target.classList.add('active');

//Task 5.6
//Set showingSubMenuto trueif the clicked <a>element's "link" object within menuLinkshas a subLinksproperty (all do, except for the "link" object for ABOUT), otherwise, set it to false.

});
// })

//Task 5.7
//If showingSubMenuis true:
//Call a buildSubMenufunction passing to it the subLinksarray for the clicked <a>element.
// Set the CSS topproperty of subMenuElto 100%.
// Otherwise (showingSubMenuis false):
// Set the CSS topproperty of subMenuElto 0.



//Task 5.8
//Code the buildSubMenufunction so that it:
// Clears the contents of subMenuEl.
// Iterates over the subLinksarray passed as an argument; and for each "link" object:
// Create an <a>element.
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the subMenuElelement.

