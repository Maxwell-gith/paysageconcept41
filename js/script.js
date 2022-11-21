function burgerMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.navbar__burger');
    burger.addEventListener('click', function () {
        navbar.classList.toggle('show-navbar');
        // if (navbar.classList.contains('show-navbar')) {
        //     nonScroll();
        // }else{
        //     Scroll()
        // }
    })
}

function closeBurgerMenu () {
    const links = document.querySelector('.navbar__links');
    const navBar = document.querySelector('.navbar');
    links.addEventListener('click', function () {
        navBar.classList.remove('show-navbar');
    })
}

burgerMenu();
closeBurgerMenu();