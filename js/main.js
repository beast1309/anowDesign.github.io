$(function () {

    $('.header__menu').on('click', function () {
        $('.header__logo').toggleClass('--active');
    });

    $('.header__menu').on('click', function () {
        $('.header__list').toggleClass('--active');
    });

    $('.header__menu').on('click', function () {
        $('.header__menu').toggleClass('--active');
    });
});