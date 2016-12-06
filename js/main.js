'use strict';


setInterval(function randomAnimation(){
    var randomDIV= Math.floor(Math.random()*8);
    var element= document.getElementsByClassName('portfolio-item');
    var typeAnimations=
        ["bounce",
        "flash",
        "pulse",
        "shake",
        "headShake",
        "swing",
        "tada",
        "wobble",
        "jello"];
    var randomAnimation= typeAnimations[Math.floor(Math.random()*9)];
    var newElement= element[randomDIV];
    newElement.className='portfolio-item animated ' + randomAnimation;
},3000);


$(document).ready(function(){
    $(".burger").on("click", function() {
        $("ul li")
            .animate({opacity:'0.1'})
            .css('transition','2s')
            .toggleClass("bar-menu-open")
            .css('transition','2s');

        // $('bar-menu-close').css('animation-iteration-count','1');
        // $("li")
        //     .animate({opacity:'0.1'})
        //     .css('transition','2s')
        //     .toggleClass("bar-menu-open")
        //     .animate({opacity:'1'})
        //     .css('transition','1.5s');

    });

});
