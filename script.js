$(function(){
	var navPos, winPos, navHeight;

	function refreshNavPos(){
		navPos = $('nav').offset().top;
		navHeight = $('nav').outerHeight(true);
	}
	refreshNavPos();
	$(window).resize(refreshNavPos);

	$('<div class="navHeight"></div>').insertBefore('nav').css('height', navHeight).hide();

	$(window).scroll(function(){
		winPos = $(window).scrollTop();
		console.log(winPos);

		if (winPos >= navPos){
			$('nav').addClass('fixed shadow');
			$('.navHeight').show();
		} else{
			$('nav').removeClass('fixed shadow');
			$('.navHeight').hide();
		}


	});
	


	
});