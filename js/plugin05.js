(function($){
    $.fn.autoImageCapion = function(){
        'use strict';

        return this.each(function(idx, el){
            var $img = $(el);

            if($img.parent('.captioned-image').length === 0){
                $img
                    .wrap('<div class="captioned-image"></div>')
                    .after('<span class="caption">'+$img.attr('title')+'</span>');
            }
        });
    };
})(jQuery);

$(document).ready(function(){
    'use strict';
    $(".post img").autoImageCapion();
});