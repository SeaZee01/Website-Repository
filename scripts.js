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

    // Ensure that the DOM is loaded before running the script
    window.addEventListener('DOMContentLoaded', function () {

        // Defining all my variables
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
        
        // Function to update the positions of images
        function updateImagePositions() {
            var images = document.querySelectorAll('.main-images div');  // Select all the images
            images.forEach(function (image, index) {
                var offset = currentPosition + (index * 100);  // Calculate the new position for each image
                image.style.transform = 'translateX(' + offset + 'vw)';  // Apply the new position
                image.style.transition = 'transform 1s ease';  // Smooth transition
            });
        }

        // Function to slide images (left arrow)
        function slideLeft() {
            currentPosition -= 200;  // Move images to the left by 100vw
            updateImagePositions();
        }

        // Function to slide images (right arrow)
        function slideRight() {
            currentPosition += 200;  // Move images to the right by 100vw
            updateImagePositions();
        }

        // Event listeners for clicking the arrows
        if (leftArrow) {
            leftArrow.addEventListener('click', function () {
                // Slide images to the left
                slideLeft();
            });
        }

        if (rightArrow) {
            rightArrow.addEventListener('click', function () {
                // Slide images to the right
                slideRight();
            });
        }

        // Check if 'titlePage' exists before adding the event listener
        if (titlePage) {
            titlePage.addEventListener('click', function () {
                console.log('Click');
                // REMOVE AFTER COMPLETION

                // Defining slide amounts for each title page element
                var elements = [
                    {element: titlePage, slideAmount: 87},
                    {element: pageTrim, slideAmount: 0},
                    {element: siteLogo, slideAmount: 1.5},
                    {element: titleImages, slideAmount: 30}
                ];

                // If the title page is down, slide it up
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

                    // Moving and scaling the title
                    if (siteTitle) {
                        siteTitle.style.transform = "translateY(" + customSlideDownAmount + "vh) scale(" + customScaleDownAmount + ")";
                        siteTitle.style.transition = 'transform 1s ease';
                    }
                } else {
                    // If title page is up, slide it down
                    elements.forEach(function (item) {
                        var element = item.element;

                        // Applying the slide effect to move elements down
                        if (element) {
                            element.style.transform = "translateY(0)";
                            element.style.transition = 'transform 1s ease';
                        }
                    });

                    // Moving and scaling the title back to original position
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

    });  // End of DOMContentLoaded event listener
}());  // End of IIFE
