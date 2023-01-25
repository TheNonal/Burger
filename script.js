$(document).ready(function() {
    $('.menu-burger_header').click(function(){
        $('.menu-burger_header').toggleClass('open-menu');
        $('.header_nav').toggleClass('open-menu');
    });
});

$(document).ready(function() {
    $('.header_burger').click(function(event){
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('fixed-page');
    });
});