/* Отображение и скрытие МЕНЮ */

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

/* изменение значений процентов */

const counters = document.querySelectorAll('.skills__progress-num'),
      lines = document.querySelectorAll('.skills__progress-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

/* кнопки при наведении */

const batn = document.querySelector('.promo__link');
        

batn.addEventListener('click', () => {
    batn.classList.add('btn');
});