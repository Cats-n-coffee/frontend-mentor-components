// Mobile Menu open/close

const openHamburger = document.getElementById('hamburger');
const closeHamburger = document.getElementById('close-ham-menu');
const menuPopup = document.getElementsByClassName('nav-wrapper')[0];

openHamburger.addEventListener('click', showMenu);
closeHamburger.addEventListener('click', closeMenu);

function showMenu() {
    menuPopup.style.display = 'block';
}

function closeMenu() {
    menuPopup.style.display = 'none';
}

// Slide images and description left/right

const slideLeft = document.getElementById('slider-arrow-left');
const slideRight = document.getElementById('slider-arrow-right');
const imageDisplayMobile = document.querySelector('#mobile-image-display');
const imageDisplayDesktop = document.getElementById('desktop-image-display');
const imagesToSlideMobile = document.querySelectorAll('.images-to-slide-mobile img');
const imagesToSlideDesktop = document.querySelectorAll('.desktop-images img');
const descriptionDisplay = document.getElementById('description-display');
const allDescriptions = document.querySelectorAll('.item-description');

// variables for functions

let imageCounter = 0;
let descriptionCounter = 0;
let width = window.innerWidth;
const mobileSize = imagesToSlideMobile[0].clientWidth;
const desktopSize = imagesToSlideDesktop[0].clientWidth;
const descriptionSize = allDescriptions[0].clientWidth;

slideLeft.addEventListener('click', () => {
    if (width <= 1200) {
        slideImagesBackward(imageDisplayMobile, mobileSize);
        slideDescriptionBackward();
    }
    else {
        slideImagesBackward(imageDisplayDesktop, desktopSize);
        slideDescriptionBackward();
    }
    
});

slideRight.addEventListener('click', () => {
    if (width <= 1200) {
        slideImagesForward(imageDisplayMobile, mobileSize);
        slideDescriptionForward();
    }
    else {
        slideImagesForward(imageDisplayDesktop, desktopSize);
        slideDescriptionForward();
    }
    
});

function slideImagesForward(container, imageSize) {
    if (imageCounter === 2) {
        return
    }
    container.style.transition = 'transform 500ms ease-in-out';
    imageCounter++;
    container.style.transform = 'translateX(' + (-imageSize * imageCounter) + 'px)';
    
}

function slideImagesBackward(container, imageSize) {
    if (imageCounter === 0) {
        return
    }
    container.style.transition = 'transform 500ms ease-in-out';
    imageCounter--;
    container.style.transform = 'translateX(' + (-imageSize * imageCounter) + 'px)';
   
}

function slideDescriptionForward() {
    if (descriptionCounter === 2) {
        return
    }
    console.log(descriptionSize)
    descriptionDisplay.style.transition = 'transform 500ms ease-in-out';
    descriptionCounter++;
    descriptionDisplay.style.transform = 'translateX(' + (-descriptionSize * descriptionCounter) + 'px)';
}

function slideDescriptionBackward() {
    if (descriptionCounter === 0) {
        return
    }
    descriptionDisplay.style.transition = 'transform 500ms ease-in-out';
    descriptionCounter--;
    descriptionDisplay.style.transform = 'translateX(' + (-descriptionSize * descriptionCounter) + 'px)';
}

// DRY: one function to go forward, one to go backward? same function called twice in a row
// causing problem?

// function slideForward(container, counter, itemSize) {
//     if (counter === 2) {
//         return
//     }
//     container.style.transform = 'transform 500ms ease-in-out';
//     counter++;
//     container.style.transform = 'translateX(' + (-itemSize * counter) + 'px)';
// }

// function slideBackward(container, counter, itemSize) {
//     if (counter === 0) {
//         return
//     }
//     container.style.transform = 'transform 500ms ease-in-out';
//     counter--;
//     container.style.transform = 'translateX(' + (-itemSize * counter) + 'px)';
// }