
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