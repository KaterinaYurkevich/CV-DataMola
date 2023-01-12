const menuBody = document.querySelector('.nav');
const menuButton = document.querySelector('.menu_button');

menuButton.addEventListener("click", menu);
menuBody.addEventListener("click", menuClose);

function menuClose(event) {
  menuBody.classList.remove('_menu-active');

}

function menu(event) {
  menuBody.classList.toggle('_menu-active');

}