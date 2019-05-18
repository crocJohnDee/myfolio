$("#open-site").click(function () {
    $("div").removeClass("hide");
});

$(".nav-link").click(function () {
    $("div").removeClass("hide");
});

$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav-bg");
        $nav.toggleClass('scrolled', $(this).scrollTop() > 160);
    });
});

if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
    var typed = new Typed('.text-slider', {
        strings: typed_strings.split(','),
        typeSpeed: 80,
        loop: true,
        backDelay: 1100,
        backSpeed: 30
    });
}

$(window).on("click", function () {
    $('.navbar-collapse').collapse('hide');
});
