
/*second slider in desktop and mobile*/
$('.owl-second-section').owlCarousel({
loop: true,
margin: 10,
responsive: {
0: {
items: 1
},
600: {
items: 3
},
1000: {
items: 6
}
}
})



//home slider
$(document).ready(function() {
if ($(window).width() < 992) {
$("#home-slider").removeClass("owl-firest-home-display-flex");
$("#home-slider").addClass("owl-carousel");

var owl = $('.owl-carousel').owlCarousel({
loop: true,
margin: 10,
responsive: {
0: {
items: 1
},
600: {
items: 2
},
1000: {
items: 5
}
}
});
}
// When user resizes window...
$(window).on('resize', function() {
if ($(window).width() < 992) {
if ($("#home-slider").hasClass("owl-firest-home-display-flex")) {

$("#home-slider").removeClass("owl-firest-home-display-flex");
$("#home-slider").addClass("owl-carousel");

var owl = $('.owl-carousel').owlCarousel({
loop: true,
margin: 10,
responsive: {
0: {
items: 1
},
600: {
items: 2
},
1000: {
items: 5
}
}
});
}
$('#home-slider').trigger('refresh.owl.carousel');
} else if ($("#home-slider").hasClass("owl-carousel")) $("#home-slider").removeClass("owl-carousel").addClass("owl-firest-home-display-flex").trigger('destroy.owl.carousel');
});



});

//product slider
$(document).ready(function() {
if ($(window).width() < 992) {
$("#product-slider").removeClass("owl-product-display-flex");
$("#product-slider").addClass("owl-carousel");

var owl = $('.owl-carousel').owlCarousel({
loop: true,
margin: 10,
responsive: {
0: {
items: 1
},
600: {
items: 2
},
1000: {
items: 5
}
}
});
}
// When user resizes window...
$(window).on('resize', function() {
if ($(window).width() < 992) {
if ($("#product-slider").hasClass("owl-product-display-flex")) {

$("#product-slider").removeClass("owl-product-display-flex");
$("#product-slider").addClass("owl-carousel");

var owl = $('.owl-carousel').owlCarousel({
loop: true,
margin: 10,
responsive: {
0: {
items: 1
},
600: {
items: 2
},
1000: {
items: 5
}
}
});
}
$('#product-slider').trigger('refresh.owl.carousel');
} else if ($("#product-slider").hasClass("owl-carousel")) $("#product-slider").removeClass("owl-carousel").addClass("owl-product-display-flex").trigger('destroy.owl.carousel');
});



});

