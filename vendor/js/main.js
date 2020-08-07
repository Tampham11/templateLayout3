$(document).ready(function() {
	var docao = $(window).height();
	$('.pic-slider').css({'height': docao});

	$(window).resize(function(event) {
		/* Act on the event */
		var docao = $(window).height();
		$('.pic-slider').css({'height': docao});
	});

	// Option của countUp
	var options = {
	  useEasing: true, 
	  useGrouping: true, 
	  separator: ',', 
	  decimal: '.'
	};

	$(window).scroll(function(event) {
		/* Act on the event */
		var vitrihientai = $('html').scrollTop();
		console.log(vitrihientai);
		if(vitrihientai > 100){
			$('#header-menu').addClass('hien-bg-menu');
		}
		else if(vitrihientai <= 100){
			$('#header-menu').removeClass('hien-bg-menu');
		}

		// Hàm countUp:
		if(vitrihientai > 1700 && vitrihientai < 1900){
			var demo1 = new CountUp('count-num-1', 0, 32652, 0, 3, options);
			if (!demo1.error) {
			  demo1.start();
			} else {
			  console.error(demo1.error);
			}
			var demo2 = new CountUp('count-num-2', 0, 1821, 0, 3, options);
			if (!demo2.error) {
			  demo2.start();
			} else {
			  console.error(demo2.error);
			}
			var demo3 = new CountUp('count-num-3', 0, 5660, 0, 3, options);
			if (!demo3.error) {
			  demo3.start();
			} else {
			  console.error(demo3.error);
			}
			var demo4 = new CountUp('count-num-4', 0, 11859, 0, 3, options);
			if (!demo4.error) {
			  demo4.start();
			} else {
			  console.error(demo4.error);
			}

		}

		if(vitrihientai > 100){
			if($('.services-block').hasClass('hidden-obj')){
				$('.services-block').removeClass('hidden-obj');
			}
			$('.services-block').addClass('show-content');
			$('.wrapper-scrolltop').addClass('show-content');
		}
		else{
			$('.services-block').removeClass('show-content');
			$('.services-block').addClass('hidden-obj');
			$('.wrapper-scrolltop').removeClass('show-content');
		}
		if(vitrihientai > 400){
			if($('.wrapper-services').hasClass('hidden-obj')){
				$('.wrapper-services').removeClass('hidden-obj');
			}
			$('.wrapper-services').addClass('show-content');
		}
		else{
			$('.wrapper-services').removeClass('show-content');
			$('.wrapper-services').addClass('hidden-obj');
		}
		if(vitrihientai > 1050){
			if($('.why-choose-block').hasClass('hidden-obj')){
				$('.why-choose-block').removeClass('hidden-obj');
			}
			$('.why-choose-block').addClass('show-content');
		}
		else{
			$('.why-choose-block').removeClass('show-content');
			$('.why-choose-block').addClass('hidden-obj');
		}
		if(vitrihientai > 1350){
			if($('.wrapper-why-choose').hasClass('hidden-obj')){
				$('.wrapper-why-choose').removeClass('hidden-obj');
			}
			$('.wrapper-why-choose').addClass('show-content');
		}
		else{
			$('.wrapper-why-choose').removeClass('show-content');
			$('.wrapper-why-choose').addClass('hidden-obj');
		}
		if(vitrihientai > 2050){
			if($('.popular-block').hasClass('hidden-obj')){
				$('.popular-block').removeClass('hidden-obj');
			}
			$('.popular-block').addClass('show-content');
		}
		else{
			$('.popular-block').removeClass('show-content');
			$('.popular-block').addClass('hidden-obj');
		}
		if(vitrihientai > 2300){
			if($('.wrapper-popular').hasClass('hidden-obj')){
				$('.wrapper-popular').removeClass('hidden-obj');
			}
			$('.wrapper-popular').addClass('show-content');
		}
		else{
			$('.wrapper-popular').removeClass('show-content');
			$('.wrapper-popular').addClass('hidden-obj');
		}
		if(vitrihientai > 3000){
			if($('.special-block').hasClass('hidden-obj')){
				$('.special-block').removeClass('hidden-obj');
			}
			$('.special-block').addClass('show-content');
		}
		else{
			$('.special-block').removeClass('show-content');
			$('.special-block').addClass('hidden-obj');
		}
		if(vitrihientai > 3200){
			if($('.wrapper-special-package').hasClass('hidden-obj')){
				$('.wrapper-special-package').removeClass('hidden-obj');
			}
			$('.wrapper-special-package').addClass('show-content');
		}
		else{
			$('.wrapper-special-package').removeClass('show-content');
			$('.wrapper-special-package').addClass('hidden-obj');
		}
		if(vitrihientai > 3800){
			if($('.gallery-block').hasClass('hidden-obj')){
				$('.gallery-block').removeClass('hidden-obj');
			}
			$('.gallery-block').addClass('show-content');
		}
		else{
			$('.gallery-block').removeClass('show-content');
			$('.gallery-block').addClass('hidden-obj');
		}
		if(vitrihientai > 4100){
			if($('.wrapper-gallery').hasClass('hidden-obj')){
				$('.wrapper-gallery').removeClass('hidden-obj');
			}
			$('.wrapper-gallery').addClass('show-content');
		}
		else{
			$('.wrapper-gallery').removeClass('show-content');
			$('.wrapper-gallery').addClass('hidden-obj');
		}
		if(vitrihientai > 4500){
			if($('.blog-block').hasClass('hidden-obj')){
				$('.blog-block').removeClass('hidden-obj');
			}
			$('.blog-block').addClass('show-content');
		}
		else{
			$('.blog-block').removeClass('show-content');
			$('.blog-block').addClass('hidden-obj');
		}
		if(vitrihientai > 4800){
			if($('.wrapper-blog').hasClass('hidden-obj')){
				$('.wrapper-blog').removeClass('hidden-obj');
			}
			$('.wrapper-blog').addClass('show-content');
		}
		else{
			$('.wrapper-blog').removeClass('show-content');
			$('.wrapper-blog').addClass('hidden-obj');
		}
		if(vitrihientai > 5300){
			if($('.client-block').hasClass('hidden-obj')){
				$('.client-block').removeClass('hidden-obj');
			}
			$('.client-block').addClass('show-content');
		}
		else{
			$('.client-block').removeClass('show-content');
			$('.client-block').addClass('hidden-obj');
		}
		if(vitrihientai > 6400){
			if($('.contact-block').hasClass('hidden-obj')){
				$('.contact-block').removeClass('hidden-obj');
			}
			$('.contact-block').addClass('show-content');
		}
		else{
			$('.contact-block').removeClass('show-content');
			$('.contact-block').addClass('hidden-obj');
		}
		if(vitrihientai > 6600){
			if($('.wrapper-contact').hasClass('hidden-obj')){
				$('.wrapper-contact').removeClass('hidden-obj');
			}
			$('.wrapper-contact').addClass('show-content');
		}
		else{
			$('.wrapper-contact').removeClass('show-content');
			$('.wrapper-contact').addClass('hidden-obj');
		}

		
	});


	$('.wrapper-scrolltop').click(function(event) {
		$('html').animate({scrollTop:0}, 800);
	});

	$('.n1').click(function(event) {
		$('html').animate({scrollTop:0}, 800, "easeInOutExpo");
		return false;
	});
	$('.n2').click(function(event) {
		$('html').animate({scrollTop:$('#services').offset().top - 70}, 800, "easeInOutExpo");
		return false;
	});
	$('.n3').click(function(event) {
		$('html').animate({scrollTop:$('#popular').offset().top - 70}, 800, "easeInOutExpo");
		return false;
	});
	$('.n4').click(function(event) {
		$('html').animate({scrollTop:$('#special-package').offset().top - 70}, 800, "easeInOutExpo");
		return false;
	});
	$('.n5').click(function(event) {
		$('html').animate({scrollTop:$('#gallery').offset().top - 70}, 800, "easeInOutExpo");
		return false;
	});
	$('.n6').click(function(event) {
		$('html').animate({scrollTop:$('#blog').offset().top - 70}, 800, "easeInOutExpo");
		return false;
	});
	$('.n7').click(function(event) {
		$('html').animate({scrollTop:$('#contact').offset().top - 70}, 800, "easeInOutExpo");
		return false;
	});



	$('.gallery-fancybox').fancybox();
});