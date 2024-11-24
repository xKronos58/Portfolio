let open = false;

function openMenu() {
    const menuBox = document.querySelector(".menu-box");
    const menuIcon = document.getElementById("hbm");
    const navbar = document.querySelector('.navbar');
    menuBox.classList.toggle("open-menu");
    navbar.classList.toggle("shown");
    if(open === false) {
        open = true;
        menuIcon.setAttribute('d', 'M30.75 10.25L10.25 30.75M10.25 10.25L30.75 30.75');
    } else {
        open = false;
        menuIcon.setAttribute('d', 'M4.875 19.5H34.125M4.875 9.75H34.125M4.875 29.25H34.125')
    }
}