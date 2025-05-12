var a = 1
$(document).ready(function() {
    $('.header').click(function(){
        if (a==1) {
           $('.menu-burger__header').toggleClass('open-menu');
            $('.header__nav').toggleClass('open-menu'); 
            a = 0;
        }
        else{
           if (a==0) {
                $('.menu-burger__header').toggleClass('close-menu');
                $('.header__nav').toggleClass('close-menu'); 
            } 
        }
        
    });
});
