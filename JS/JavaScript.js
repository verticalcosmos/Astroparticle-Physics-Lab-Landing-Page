// Main JavaScript file for APLab Landing Page


/* Building the dynamic navigation menu */
const menu = document.getElementById('navbarList'); // defining variable for the menu
const sections = document.querySelectorAll("section"); // Storing all the section elements in the sections variable


function navbarBuilder() { // defining a function to create the navbar menu

    let navMenu = ''; // defines an initially empty variable for the menu

    sections.forEach(section => { // for each section runs the function to build the list of the menubar

        const sectionID = section.id;

        navMenu += `<li><a onclick="highlightItem(this)" href="#${sectionID}">${sectionID}</a></li>` // adds a list element for each section to the menubar

    });

    menu.innerHTML = navMenu; // adds the list to the menu

}

navbarBuilder();


/* End of building the dynamic navigation menu */


/* Add class HighLight to the selected menu item */

function highlightItem(selectedEle) {

    const allElem = document.querySelectorAll("#navbarList a");

    for (ele of allElem) { // removes highLight class from all elements
        ele.classList.remove("highLight");
    }
    selectedEle.classList.add("highLight"); // adds highLight class to the selected element on the navbar
}

/* End of class HighLight to the selected menu item */

/* Add class 'active' to section when near top of viewport */

let windowHeight = window.innerHeight || document.documentElement.clientHeight; // defining a variable to contain the hright of the view

function sectionInView(section) {
    let sectionPosition = section.getBoundingClientRect(); // calculating the bottom position of the section
    return (sectionPosition.top <= (windowHeight / 2) && sectionPosition.bottom >= (windowHeight / 2)); //returning true if the section is in view
}

function toggleActiveClass() { // toggle the active class based on the section that is in the view
    for (section of sections) {

        if (sectionInView(section)) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }
}

window.addEventListener('scroll', toggleActiveClass); // running the function if the user scrolls



/* End of Add class 'active' to section when near top of viewport */




/* Scroll to anchor ID using scrollTO event */

const links = document.querySelectorAll("#navbarList a"); // defining the variable for the menu links 

for (const link of links) { // loop for each menu link, listens to click, and runs clickMenuItem function
    link.addEventListener("click", clickMenuItem);
}

function clickMenuItem(i) { // function to prevent deafault, get the href attribute and smoothly scroll to  the top of the section
    i.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}