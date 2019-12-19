var link = document.querySelector('.login-link');
var popup = document.querySelector('.modal-login');
var close = document.querySelector('.modal-close');
var overlay = document.querySelector('.modal-overlay');
var form = popup.querySelector('.login-form');
var login = form.querySelector('[name=login]');
var password = form.querySelector('[name="password"]');

// Отображение модального окна входа
link.addEventListener('click', function (evt) {

    evt.preventDefault();
    popup.classList.add('modal-show');
    overlay.classList.remove('visually-hidden');
    login.focus();

});

// Сокрытие модального окна входа
close.addEventListener('click', function (evt) {

    evt.preventDefault();
    popup.classList.remove('modal-show');
    overlay.classList.add('visually-hidden');
});

form.addEventListener('submit', function (evt) {

    if (!login.value || !password.value) {
        evt.preventDefault();
    }
});


window.addEventListener('keydown', function (evt) {

    if (evt.keyCode === 27) {
        evt.preventDefault();

        if (popup.classList.contains('modal-show')) {
            popup.classList.remove('modal-show');
            overlay.classList.add('visually-hidden');
        }
    }
});