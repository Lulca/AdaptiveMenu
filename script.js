$(function () {
	var tabMenu = $('.tab-menu li');
	var tabContent = $('.tab-content>div');

	tabContent.not(':first-of-type').hide();

	tabMenu.on('click', function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');

		var wrapper = $(this).closest('.tab-wrapper');

		var wrapTabContentDiv = wrapper.find('div').not(':first');
		var wrapTabContent = wrapper.find('.tab-content');

		wrapTabContentDiv.hide();

		var findAttr =  $(this).attr('data-tab');
		wrapTabContent.find('[data-tab="'+findAttr+'"]').show();
	
	}); 
});