window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const menu_button = document.querySelector('.hamburger-menu');
    const icon = document.querySelector('.icon');
    const footer = document.querySelector('.footer');
    const footerPosition = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerPosition <= windowHeight) {
        navbar.style.top = '85vh';
        menu_button.style.top = '85vh';
        icon.style.top = '85vh';
    } else {
        navbar.style.top = '33px';
        menu_button.style.top = '33px';
        icon.style.top = '33px';
    }
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var menu_button = document.querySelector('.hamburger-menu');
    var icon = document.querySelector('.icon');
    var links = navbar.querySelectorAll('a'); // Assuming the navbar links are inside <a> tags

// Get the element directly under the navbar
    var elementUnderNavbar = document.elementFromPoint(navbar.getBoundingClientRect().left + 1, navbar.getBoundingClientRect().bottom + 1);

// If the background color is white (or light), change the text color to black
    var backgroundColor = window.getComputedStyle(elementUnderNavbar).backgroundColor;

    if (isLightColor(backgroundColor) || elementUnderNavbar.id == 'light-pg') {
        links.forEach(link => link.style.color = 'black');
        menu_button.style.stroke = '#000000';
        icon.src = 'images/FC_b.png';
    } else {
        links.forEach(link => link.style.color = 'white');
        menu_button.style.stroke = 'white';
        icon.src = 'images/FC.png';
    }
});

function isLightColor(color) {
    var rgb = color.match(/\d+/g);
    if (!rgb) return false;

    var r = parseInt(rgb[0]);
    var g = parseInt(rgb[1]);
    var b = parseInt(rgb[2]);

// Simple brightness formula
    var brightness = (r * 299 + g * 587 + b * 114) / 1000;

// Consider it light if brightness is above a certain threshold
    return brightness > 200;
}

var inverted = false;
// NOT IN USE MAY USE IN FUTURE IF I CAN INVERT IMAGES...
function invertColors() {
    if(!inverted) {
        document.body.style.filter = 'invert(1)';

// Invert images back to normal since they will also be inverted
        var images = document.querySelectorAll('img');
        images.forEach(function(img) {
            img.style.filter = 'invert(1)';
        });
        inverted = true;
    } else {
        console.log(inverted);
        document.body.style.fill = 'invert(0)';

    }
}

function scrollDown() {
    window.scrollBy({
        top: window.innerHeight, // Scroll down by the height of the viewport
        behavior: "smooth",     // Add smooth scrolling effect
    });
}

function scrollUp() {
    window.scrollBy({
        top: -window.innerHeight, // Scroll down by the height of the viewport
        behavior: "smooth",     // Add smooth scrolling effect
    });
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
    });
}