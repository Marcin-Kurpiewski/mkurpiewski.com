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
        $(".bar-menu-close").animate({opacity:'1'}).css('transition','1s').toggleClass("bar-menu-open").animate({opacity:'0.1'}).css('transition','1s');
        $(".bar-menu-open").animate({opacity:'1'});
    });

});

