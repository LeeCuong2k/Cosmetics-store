$(document).ready(function () {
    $('#toTop').click(function() {
        $('html').animate({
            scrollTop: 0
        }, 1000)
    });

    $(document).scroll(function() {
        var top = $(window).scrollTop();
        if(top == 0) {
            $('#toTop').fadeOut();
        }
        else {
            $('#toTop').fadeIn();
        }
    })

})