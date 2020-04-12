document.addEventListener('DOMContentLoaded', function () {
    let menuButton = document.getElementsByClassName('menuButton');
    let nav = document.getElementsByTagName('nav');
    menuButton[0].addEventListener('click', function () {
        nav[0].style.display = nav[0].style.display === 'none' ? 'flex' : 'none';
    });
});