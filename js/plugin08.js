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

        var defaults = {
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
        };

        var opts = $.extend(true, {}, defaults,options);

        var tagClassRE = /^[A-Za-z][-_A-Za-z0-9]+$/;

        $.each(opts, function validaOptions(key, val){
                if(key === 'wrapper' || key === 'caption'){
                    if(typeof val.tag !== 'string' || val.tag.match(tagClassRE) === null){
                        opts[key]['tag'] = defaults[key]['tag'];
                    }
                    if(typeof val.class !== 'string' || val.class.match(tagClassRE) === null){
                        opts[key]['class'] = defaults[key]['class'];
                    }
                }
            }
        );

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