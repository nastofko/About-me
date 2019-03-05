$(document).ready(function () {
    $('a').click(function () {
        let selected = $(this);
        $('a').removeClass('active');
        $(selected).addClass('active');
    });

    let $a = $('.a'),
        $b = $('.b'),
        $c = $('.c'),
        $d = $('.d'),
        $home = $('.home'),
        $aboutMe = $('.aboutMe'),
        $portfolio = $('.portfolio'),
        $contactMe = $('.contactMe');

    $home.fadeIn();
    $aboutMe.hide();
    $portfolio.hide();
    $contactMe.hide();

    $a.click(function () {
        $home.fadeIn();
        $aboutMe.fadeOut();
        $portfolio.fadeOut();
        $contactMe.fadeOut();
    });
    $b.click(function () {
        $aboutMe.fadeIn();
        $home.fadeOut();
        $portfolio.fadeOut();
        $contactMe.fadeOut();
    });
    $c.click(function () {
        $portfolio.fadeIn();
        $home.fadeOut();
        $aboutMe.fadeOut();
        $contactMe.fadeOut();
    });
    $d.click(function () {
        $contactMe.fadeIn();
        $home.fadeOut();
        $portfolio.fadeOut();
        $aboutMe.fadeOut();
    });
});