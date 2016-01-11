$(document).ready(function(){
    'use strict';

    $(".post img").each(function(){
        var $img = $(this);

        if($img.parent('.captioned-image').length === 0){
            $img
                .wrap('<div class="captioned-image"></div>')
                .after('<span class="caption">'+$img.attr('title')+'</span>');
        }
    });
});