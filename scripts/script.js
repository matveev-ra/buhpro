$(document).ready(function() {
	// $('.bxslider').bxSlider({
	// 	slideWidth: 290,
	// 	minSlides: 3,
	// 	maxSlides: 3,
	// 	slideMargin: 10,
	// 	infiniteLoop: false,
	// 	hideControlOnEnd: true,
	// 	responsive: true
	// });
	
		sliderResize();
	 
	 






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
	  $('#hamburger').click(function (e) {
    	$(this).toggleClass('active');
    	$('.menu').toggleClass('active');
	});


});

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});


 
$(window).resize(function(){
	sliderResize();
  });
  
  function sliderResize() {
	var slider = $('.bxslider').bxSlider({
		slideWidth: 290,
		minSlides: 3,
		maxSlides: 3,
		slideMargin: 10,
		infiniteLoop: false,
		hideControlOnEnd: true,
		responsive: true
	});
  
	if ($(window).width()<900 && $(window).width()>600) {
	  slider.reloadSlider({
		maxSlides: 3
	  });
	} else if ($(window).width()<600) {
	  slider.reloadSlider({
		maxSlides: 2
	  });
	};
  }