$(function () {

    $(".header__nav-list a").on("click", function (e) {
        e.preventDefault()
        var id  = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({scrollTop: top}, 700)
    })

    setInterval(() => {
        if ($(window).scrollTop() > 935 && $('.header__top-inner').hasClass('header__top-inner--oppen') === false){
            $('.burger').addClass(' burger--follow')
        } else { 
            $('.burger').removeClass('burger--follow')
        }
    }, 0)

    $(".burger--nev, .header a").on("click", function (e) {
        e.preventDefault()
        $('.header__top-inner').toggleClass('header__top-inner--oppen')
    })
    


})