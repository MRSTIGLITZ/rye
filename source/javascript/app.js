(function($){

	$('.wrap-slider').slick({
		  appendArrows: '#arrows',
          prevArrow: $('.prev'),
          nextArrow: $('.next'),
		  dots: false,
	      arrows: true,
	      slidesToShow: 1,
		  adaptiveHeight: true,
		  mobileFirst: true,
		  rows: 1,
	    responsive: [
			{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						mobileFirst: false
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode: true
					}
				}
			]
		});

})(jQuery);