$(function(){
	$('.wrapper>article').not(':first').hide();
	$('.wrapper>h1').click(function(){
		var findArticle = $(this).next('article');
		var findWrapper = $(this).closest('.wrapper');

		if(findArticle.is(':visible')){
			findArticle.slideUp();
		}
		else{
			findWrapper.find('>article').slideUp();
			findArticle.slideDown();
		}

	});
});