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

        // Defining elements
        var titlePage = document.querySelector('.title-page'),
            pageTrim = document.querySelector('.page-trim'),
            siteLogo = document.querySelector('.site-logo'),
            titleImages = document.querySelector('.title-images'),  // Select the 'title-images' container

            // Defining slide amounts for each element
            titlePageSlideAmount = 87,
            pageTrimSlideAmount = 0,
            siteLogoSlideAmount = 1.5,
            titleImagesSlideAmount = 30;  // Define slide amount for the 'title-images' container

        // Console log to ensure the elements are correctly selected
        console.log('titlePage:', titlePage);
        console.log('pageTrim:', pageTrim);
        console.log('siteLogo:', siteLogo);
        console.log('titleImages:', titleImages);

        // Check if 'titlePage' exists before adding the event listener
        if (titlePage) {
            titlePage.addEventListener('click', function () {
                console.log('Click event triggered!');  // Confirm click event

                // Define elements and their slide amounts
                var elements = [
                    {element: titlePage, slideAmount: titlePageSlideAmount},
                    {element: pageTrim, slideAmount: pageTrimSlideAmount},
                    {element: siteLogo, slideAmount: siteLogoSlideAmount},
                    {element: titleImages, slideAmount: titleImagesSlideAmount}
                ];

                // Apply the sliding effect for each individual element
                elements.forEach(function (item) {
                    var element = item.element,
                        slideAmount = item.slideAmount;

                    // Applying the slide effect by using transform and transition
                    if (element) {
                        element.style.transform = "translateY(-" + slideAmount + "vh)";
                        element.style.transition = 'transform 1s ease';
                    }
                });
            });
        }

    });
}());
