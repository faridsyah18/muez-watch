// toggle class active untuk burger menu
const navbarNav = document.querySelector
('.navbar-nav')

// ketika burger menu diklik
document.querySelector('#burger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
}