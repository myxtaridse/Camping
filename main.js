/*===========   SHOW MENU    ==========*/
const navMenu = document.getElementById('nav-menu'), /*функция возвращает запрос*/
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =======*/
/* Validate if constant exists (проверьте, существует ли константа) */
if(navToggle){
    navToggle.addEventListener('click', () =>{ /*функция добавляет элементу действие, которое будет выполнено после срабатывания события, клик мыши*/
        navMenu.classList.add('show-menu') /*свойство дает возможность просматривать и манипулировать классами элемента*/
    })
}

/*======= MENU HIDDEN =======*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*========   REMOVE (убрать) MENU MOBILE   =========*/
const navLink = document.querySelectorAll('.nav-link') /*функция позволяет найти все элементы по CSS-селектору среди дочерних*/

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav-link, we remove the show-menu class (когда нажимаем на каждую навигационную ссылку, удаляем класс показать меню)
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*============     CHANGE BACKGROUND HEADER (изменить фоновый заголовок)     ============*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viewport height, add the bg-header class to the header tag
    //Когда высота прокрутки превышает 50 см в окне просмотра, добавьте класс "bg-header" в тег"header"
    this.scrolly >= 20 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}   
window.addEventListener('scroll', bgHeader)

/*==========    GSAP (набор иструментов для реализации анимации любого уровня сложности с помощью js) ANIMATION    ==========*/
gsap.from('.home-img-2', 1.2, {opacity: 0, y: 200, delay: .1})
gsap.from('.home-img-3', 1.2, {opacity: 0, y: 200, delay: .5})
gsap.from('.home-data', 1.2, {opacity: 0, y: -60, delay: 1})
gsap.from('.home-bird-1', 1.2, {opacity: 0, x: -80, delay: 1.1})
gsap.from('.home-bird-2', 1.2, {opacity: 0, x: 80, delay: 1.2})
gsap.from('.home-img-1', 1.2, {opacity: 0, y: 200, delay: 1.2})
gsap.from('.home-img-4', 1.2, {opacity: 0, x: 200, delay: 1.3})