/* eslint-env browser */
(function () {
    "use strict";

    // Defining the console function
    var console = window.console || {
        log: function () {},
        error: function () {},
        warn: function () {},
        info: function () {}
    };

    // Ensuring that the DOM is loaded before running the script
    window.addEventListener('DOMContentLoaded', function () {

        // Defining elements and initial slide amounts
        var titlePage = document.querySelector('.title-page'),
            pageTrim = document.querySelector('.page-trim'),
            siteLogo = document.querySelector('.site-logo'),
            titleImages = document.querySelector('.title-images'),
            siteTitle = document.querySelector('.title'),
            isSlideUp = false,  // Toggle to check if we need to slide up or down

            // Define a slide amount for the title
            customSlideDownAmount = 42,
            // Define the scale the title image changes during the slidd
            customScaleDownAmount = 0.8;

        // Check if 'titlePage' exists before adding the event listener
        if (titlePage) {
            titlePage.addEventListener('click', function () {
                console.log('Click event triggered!');  // Confirm click event

                // Defining slide amounts for each element
                var elements = [
                    {element: titlePage, slideAmount: 87},
                    {element: pageTrim, slideAmount: 0},
                    {element: siteLogo, slideAmount: 1.5},
                    {element: titleImages, slideAmount: 30}
                ];

                // If the title page is not sliding up, slide up the elements
                if (!isSlideUp) {
                    elements.forEach(function (item) {
                        var element = item.element,
                            slideAmount = item.slideAmount;

                        // Applying the slide effect to move elements up
                        if (element) {
                            element.style.transform = "translateY(-" + slideAmount + "vh)";
                            element.style.transition = 'transform 1s ease';
                        }
                    });

                    // Moving the title down and scaling it 
                    if (siteTitle) {
                        siteTitle.style.transform = "translateY(" + customSlideDownAmount + "vh) scale(" + customScaleDownAmount + ")";
                        siteTitle.style.transition = 'transform 1s ease';
                    }
                } else {
                    // If the title page has already slid up, move elements back down on click
                    elements.forEach(function (item) {
                        var element = item.element;

                        // Applying the slide effect to move elements down
                        if (element) {
                            element.style.transform = "translateY(0)";
                            element.style.transition = 'transform 1s ease';
                        }
                    });

                    // Move the siteTitle back to its original position and scale
                    if (siteTitle) {
                        siteTitle.style.transform = "translateY(0) scale(1)";
                        siteTitle.style.transition = 'transform 1s ease';
                    }
                }

                // Toggle between the title page sliding up and sliding down
                isSlideUp = !isSlideUp;
            });
        } else {
            console.warn('titlePage element not found!');
        }
    });
}());
