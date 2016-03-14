$(function(){
  var $nav = $('.nav-underline'),
      $line = $('<div>').appendTo($nav),
      $activeLi,
      lineWidth,
      linePos;

      function refresh () {
        $activeLi = $nav.find('.active');
        lineWidth = $activeLi.outerWidth();
        linePos = $activeLi.position().left;

      }

      refresh();

      $nav.css('position', 'relative');

      //line setup

      function lineSet () {
        $line.css({
          'position' : 'absolute',
          'background-color':'#fff',
          'bottom':'0',
          'height':'3px'
        }).animate({
            'left':linePos,
            'width':lineWidth

        },200);
      }

      lineSet();

      $nav.find('li').on('click',function(){
        $activeLi.removeClass('active');
        $(this).addClass('active');
        refresh();
        lineSet();
      });

  console.log(linePos);
});