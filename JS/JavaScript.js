// Main JavaScript file for APLab Landing Page


/* Building the dynamic navigation menu */


const menu = document.getElementById('navbarList'); // defining variable for the menu
const sections = document.querySelectorAll("section"); // Storing all the section elements in the sections variable


function navbarBuilder() { // defining a function to create the navbar menu
	
	let navMenu = ''; // defines an initially empty variable for the menu
	
	sections.forEach(section => {  // for each section runs the function to build the list of the menubar
		
		const sectionID = section.id;
		
		navMenu += `<li><a href="#${sectionID}">${sectionID}</a></li>` // adds a list elemnt for each section to the menubar
		
	});
	
	menu.innerHTML = navMenu; // adds the list to the menu

}

navbarBuilder();


/* End of building the dynamic navigation menu */


/* Add class 'active' to section when near top of viewport */

let windowHeight = window.innerHeight || document.documentElement.clientHeight; // defining a variable to contain the hright of the view

function sectionInView(section) {
	let sectionPosition = section.getBoundingClientRect(); // calculating the bottom position of the section
	return (sectionPosition.top <= (windowHeight/2) && sectionPosition.bottom >= (windowHeight/2)); //returning true if the section is in view
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

