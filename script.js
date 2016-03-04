$(function(){
	$('.wrapper>article').not(':first').hide();
	selectTitle = $('.wrapper>h1');
	selectArticle = $('.wrapper>article');
	
	selectTitle.click(function(){

		if ($(this).next('article').is(':visible')){
			$(this).next('article').slideUp();
		}
		else {
			selectArticle.slideUp();
			$(this).next('article').slideDown();
		}

	});
});