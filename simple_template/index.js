$(document).ready(function(){
    /* Mobile Navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
    $('.js--section-demo').waypoint(function (direction) {
        if (direction == "down") {
            $('nav li:last-child').addClass('orange');
        } else {
            $('nav li:last-child').removeClass('orange');
        }
    }, {
      offset: '60px;'
    });  
});