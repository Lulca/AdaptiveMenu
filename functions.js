$(function() {

  var $li = $('.img-list').find('> li'),
      $links = $li.find('> a'),
      $lightbox = $('.lightbox'),
      $overlay = $('.overlay'),
      $prev = $('.prev'),
      $next = $('.next'),
      liIndex,
      targetImg;

      $links.on('click',function(event) {
        liIndex = $(this).parent().index();
        event.preventDefault();
        targetImg = $(this).attr('href');
        $lightbox.find('img').attr('src', targetImg);
        $lightbox.fadeIn();
      });

      $overlay.click(function(){
        $lightbox.fadeOut();
      });

      $next.click(function() {
        if ((liIndex + 1) < $li.length){
          targetImg = $li.eq(liIndex + 1).find('> a').attr('href');
          liIndex++;

        } else{
            targetImg = $li.eq(0).find('> a').attr('href');
            liIndex = 0;
        }

        $lightbox.find('img').attr('src', targetImg);

      });

      $prev.click(function() {
        if (liIndex > 0){
          targetImg = $li.eq(liIndex - 1).find('> a').attr('href');
          liIndex--;

        } else{
            targetImg = $li.eq($li.length - 1).find('> a').attr('href');
            liIndex = $li.length-1;
        }

        $lightbox.find('img').attr('src', targetImg);

      });

});