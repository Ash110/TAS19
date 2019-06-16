$(document).ready(function () {
    $('.sidenav').sidenav();
    $(".scroll_for_baral").click(function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".content_title").offset().top
        }, 1000);
    });
});