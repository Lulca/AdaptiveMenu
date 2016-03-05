$(function(){
	var startPos = $('nav').position().top;
	var currentPos = 0;
	var heightOfNav = $('nav').outerHeight(true);

	$('<div class="navHeight"></div>').insertBefore('nav').css('height', heightOfNav).hide();

	$(window).scroll(function(){
		currentPos = $(window).scrollTop();
		if (currentPos >= startPos){
			$('nav').addClass('fixed');
			$('.navHeight').show();
		} else{
			$('nav').removeClass('fixed');
			$('.navHeight').hide();
		}
	});

		
});