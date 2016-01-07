$(function($){
    'use strict';

    $.fn.equalizerHeight = function(){
        var tallestHeight = 0,
            $stories = this;

        console.log(this);

        $stories.each(function(i, el){
            var elHeight = $(el).outerHeight();
            if(elHeight > tallestHeight){
                tallestHeight = elHeight;
            }
        });

        $stories.css('height', tallestHeight);

        return $stories;
    };

}(jQuery));



$(document).ready(function(){
    'use strict';
    $('#stories1')
        .find('.col-sm-4')
        .equalizerHeight()
        .find(".sec")
        .css("background","red");
    $('#stories2')
        .find('.col-sm-4')
        .equalizerHeight()
        .find(".sec")
        .css("background","green");
})