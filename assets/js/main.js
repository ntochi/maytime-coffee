//Navbar transition
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 250);
})

//Carousal
$(document).ready(function(){
    $(".carousal").carousel({interval: 90,});
})