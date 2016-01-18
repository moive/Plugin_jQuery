//options
/*
    -wrapper (objetc):
        -tag (string)
        -class (string)
    -caption (object)
        -class (string)
    -bgColor (css color spec):
    -color (css color spec):
*/

(function($){
    'use strict';
    $.fn.autoImageCapion = function(options){

        var opts = $.extend(true, {}, {
            wrapper : {
                'tag':'div',
                'class':'captioned-image'
            },
            caption : {
                'tag':'span',
                'class':'caption'
            },
            bgColor : null,
            color: null
        },options);

        return this.each(function(idx, el){
            var $img = $(el);

            if($img.parent('.' + opts.wrapper.class).length === 0){
                $img
                    .wrap('<'+ opts.wrapper.tag+' class="'+ opts.wrapper.class+'"></'+ opts.wrapper.tag +'>')
                    .after('<'+ opts.caption.tag+' class="'+ opts.caption.class+'">'+$img.attr('title')+'</'+opts.caption.tag+'>');
            }

            if(opts.bgColor){
                $img.parent().css('background-color',opts.bgColor);
            }

            if(opts.color){
                $img.siblings('.'+opts.caption.class).css('color',opts.color);
            }
        });
    };
})(jQuery);

$(document).ready(function(){
    'use strict';
    $(".post img").autoImageCapion({
        'wrapper' : {
            'tag':'figure'
        },
        'caption' : {
            tag:'figcaption'
        }
    });
});