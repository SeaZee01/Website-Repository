/* eslint-env browser */

(function () {
    "use strict";

    // Defining Variables
    var titlePage = document.querySelector('.title-page'),
        slideAmount = 90, // The amount the page elements will slide up
        console = window.console,
        elements;

    if (titlePage) {
        titlePage.addEventListener('click', function () {
            // Ensuring the elements affected include the title-page div and it's children 
            elements = [titlePage].concat(Array.from(titlePage.querySelectorAll('*')));
            
            
            elements.forEach(function (element) {
                // Slide each element up by changing its transform property
                element.style.transform = "translateY(-" + slideAmount + "vh)"; // Sliding the elements up using it's transform property and setting the reference to value to 'viewport height' (vh)
                element.style.transition = 'transform 1s ease'; // Setting the slide duration and ease
            });
        });
    } else {
        console.error("Error: 'title-page' div not found.");
    }
}());
