
if ('java' != 'javascript') {
    console.log ('java to nie javascript')
}

if (2 == 2) {
    console.log ('java to nie javascript')
}


/*pierwszy sposób*/

const button = document.querySelector('.action--js');

console.log(button);

const myClick = () => {
    const heading = document.querySelector(".main__heading--js");
    heading.innerHTML = `Nie ma lipy`;
    heading.classList.toggle('klasa-z-js');
}
button.addEventListener('click', myClick);



/*drugi sposób*/

const buttons = document.querySelector('.action__second--js');

console.log(buttons)

buttons.addEventListener('mouseenter', () => {
    const heading = document.querySelector(".paragraph--js");
    heading.innerHTML = `przedstaw się`;
});




const hamburger = document.querySelector('.hamburger--js')
hamburger.addEventListener( 'click', () => {
    const nav = document.querySelector(".navigation__menu--js");
    nav.classList.toggle('navigation--open');
})
