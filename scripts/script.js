$(document).ready(function() {
	$('.bxslider').bxSlider({
		slideWidth: 290,
		minSlides: 3,
		maxSlides: 3,
		slideMargin: 10,
		infiniteLoop: false,
		hideControlOnEnd: true
	});

	$(".sticky").on("click","a", function (event) {
    	event.preventDefault();
    	var id  = $(this).attr('href'),
      	top = $(id).offset().top;
    	$('body,html').animate({scrollTop: top}, 0);
  	});

	$('.quick-call-button, .site-order, .more-button, .ask-manager').click(function() {
    	var url = $(this).data('url');
    	$('#' + url).arcticmodal();
  	});
});

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});