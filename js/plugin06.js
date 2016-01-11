//options
/*
    -wrapperTag (string)
    -wrapperClass (string)
    -captionTag (string)
    -captionClass (string)
*/

(function($){
    'use strict';
    $.fn.autoImageCapion = function(options){

        var opts = $.extend({
            wrapperTag : 'div',
            wrapperClass : 'captioned-image',
            captionTag : 'span',
            captionClass : 'caption',
            bgColor : null,
            color: null
        },options);

        return this.each(function(idx, el){
            var $img = $(el);

            if($img.parent('.' + opts.wrapperClass).length === 0){
                $img
                    .wrap('<'+ opts.wrapperTag+' class="'+ opts.wrapperClass+'"></'+ opts.wrapperTag +'>')
                    .after('<'+ opts.captionTag+' class="'+ opts.captionClass+'">'+$img.attr('title')+'</'+opts.captionTag+'>');
            }

            if(opts.bgColor){
                $img.parent().css('background-color',opts.bgColor);
            }

            if(opts.color){
                $img.siblings('.'+opts.captionClass).css('color',opts.color);
            }
        });
    };
})(jQuery);

$(document).ready(function(){
    'use strict';
    $(".post img").autoImageCapion({
        'wrapperTag' : 'figure',
        'captionTag' : 'figcaption',
        'bgColor' : 'orange',
        'color' : 'black'
    });
});