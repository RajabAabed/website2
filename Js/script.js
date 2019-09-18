$(function () {
    new WOW().init();
    
    
    $('.owl-carousel').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items:1,
        margin:30,
        stagePadding:30,
        smartSpeed:450
    });
    
    $('.spcolor').css("color", "rgba(255,255,255,.7)");
    $(document).scroll(function () {
        var top = $('html , body').scrollTop();
        
            if (top > 50) {
                $('header').addClass('scroll');
                $('.spcolor').css("color", "black");
            } else {
                $('header').removeClass('scroll');
                $('.spcolor').css("color", "rgba(255,255,255,.7)");
            }
        
            if(top>652 && top<1151){
                $('.as').css("color","#f4623a");
                $('.as').css("transition","all .3s ease");
            }else if(top>=1151 && top<1715){
                $('.ss').css("color","#f4623a");
                $('.ss').css("transition","all .3s ease");
            }else if(top>=1715 && top<2261){
                $('.ps').css("color","#f4623a");
                $('.aps').css("transition","all .3s ease");
            }else if(top>=2261){
                $('.cs').css("color","#f4623a");
                $('.cs').css("transition","all .3s ease");
            }
        
        console.log(top);
           
    });
    
    /*----------------------*/
    $('.clmo').click(function () {
        $('.modal-wrapper').fadeIn();
        $('.modal-content').addClass('open');
        //        $('.modal-content').css("marginTop", "10%");
    });

    $('.modal-close').click(function () {
        $('.modal-wrapper').fadeOut();
        $('.modal-content').removeClass('open');
    });
    
    
})
