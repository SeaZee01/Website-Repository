/* eslint-env browser */
(function () {
    "use strict";

    // Defining console directly 
    var console = window.console || {
        log: function () {}
    };

    // Run script when the DOM content has fully loaded
    window.addEventListener('DOMContentLoaded', function () {
        
        // Defining variables
        var titlePage = document.querySelector('.title-page'),
            pageTrim = document.querySelector('.page-trim'),
            siteLogo = document.querySelector('.site-logo'),
            titleImages = document.querySelector('.title-images'),
            siteTitle = document.querySelector('.title'),
            leftArrow = document.querySelector('.arrow-left'),
            rightArrow = document.querySelector('.arrow-right'),
            currentPosition = 0,
            isSlideUp = false,
            customSlideDownAmount = 42,
            customScaleDownAmount = 0.8;

        // Defining variables for the function used for updating image and content positions
        function updatePositions() {
            var images = document.querySelectorAll('.main-images div'),
                content = document.querySelectorAll('.main-content div');

            // Updating all element positions during the sliding function
            images.forEach(function (image, index) {
                var offset = currentPosition + (index * 100);
                image.style.transform = 'translateX(' + offset + 'vw)';
                image.style.transition = 'transform 1s ease';
            });

            // Updating all content positions during the sliding function
            content.forEach(function (cont, index) {
                var offset = currentPosition + (index * 100);
                cont.style.transform = 'translateX(' + offset + 'vw)';
                cont.style.transition = 'transform 1s ease';
            });


            if (leftArrow) {
                // Making the arrow fully opaque when clickable
                if (currentPosition < 0) {
                    leftArrow.style.opacity = 1;
                } else {
                    // Making the left arrow transparent when not clickable
                    leftArrow.style.opacity = 0.25;
                }
            }

            if (rightArrow) {
                // Making the right arrow fully opaque when clickable
                if (currentPosition > -1800) {
                    rightArrow.style.opacity = 1;
                } else {
                    // Making the right arrow transparent when not clickable
                    rightArrow.style.opacity = 0.25;
                }
            }
        }

        // Function to slide images and content left
        function slideLeft() {
            // If there is content to display on the left, slide left
            if (currentPosition < 0) {
                currentPosition += 200;
                updatePositions();
            }
        }
        
        // Function to slide images and content right
        function slideRight() {
            // If there is content to display on the right, slide left
            if (currentPosition > -1800) {
                currentPosition -= 200;
                updatePositions();
            }
        }

        // Adding an event listener to the left arrow to trigger the slide left function
        if (leftArrow) {
            leftArrow.addEventListener('click', function () {
                slideLeft();
            });
        }

        // Adding an event listener to the left arrow to trigger the slide left function
        if (rightArrow) {
            rightArrow.addEventListener('click', function () {
                slideRight();
            });
        }

        // Adding an event listener to the title page to trigger the slide up/down function
        if (titlePage) {
            titlePage.addEventListener('click', function () {
                console.log('Click'); // Logging the click event for debugging

                // Defining elements to slide up/down along with their respective amounts
                var elements = [
                    {element: titlePage, slideAmount: 87}, // Title page will slide up by 87vh
                    {element: pageTrim, slideAmount: 0}, // Page trim will not slide
                    {element: siteLogo, slideAmount: 1.5}, // Site logo will slide up by 1.5vh
                    {element: titleImages, slideAmount: 30} // Title images will slide up by 30vh
                ];

                // If the title page is active, slide it up
                if (!isSlideUp) {
                    elements.forEach(function (item) {
                        var element = item.element,
                            slideAmount = item.slideAmount;

                        if (element) {
                            element.style.transform = "translateY(-" + slideAmount + "vh)";
                            element.style.transition = 'transform 1s ease';
                        }
                    });

                    // Scale the title and slide it with the title page
                    if (siteTitle) {
                        siteTitle.style.transform = "translateY(" + customSlideDownAmount + "vh) scale(" + customScaleDownAmount + ")";
                        siteTitle.style.transition = 'transform 1s ease';
                    }
                } else {
                    // If the title page is not active, slide it up
                    elements.forEach(function (item) {
                        var element = item.element;

                        if (element) {
                            element.style.transform = "translateY(0)";
                            element.style.transition = 'transform 1s ease';
                        }
                    });

                    // Sliding the title up with the title page and scaling it 
                    if (siteTitle) {
                        siteTitle.style.transform = "translateY(0) scale(1)";
                        siteTitle.style.transition = 'transform 1s ease';
                    }
                }

                // Toggle the title page activity state
                isSlideUp = !isSlideUp;
            });
        }

        // Update position function (this allows the arrow opacity to update based off the active position)
        updatePositions();

    });  // End of DOMContentLoaded event listener
}());  // End of IIFE