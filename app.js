const toggleBtn = document.querySelector('.toggleBtn')
const navLink = document.querySelector('.nav__links')

toggleBtn.onclick = function() {
    navLink.classList.toggle('open')
}