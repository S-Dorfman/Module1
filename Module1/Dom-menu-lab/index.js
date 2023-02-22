
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
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
//iterate over menuLinks array - for Loop
for (i = 0; i < menuLinks.length; i++) {
    // Create an <a>element.
   const a = document.createElement('a')
    //  On the new element, add an href attribute with its value set to the href property of the "link" object.  
   a.setAttribute('href', menuLinks[i].href);
   console.log(a);
   //Set the new element's content to the value of the text property of the "link" object.
   a.textContent = menuLinks[i].text;
    // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(a);   
}

//Can also use For Each Loop


console.log(mainEl);
console.dir(mainEl);
console.log(topMenuEl);