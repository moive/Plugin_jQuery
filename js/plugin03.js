$(function($){
    'use strict';

    $.fn.showCharLimit = function(){
        return this.each(function(index, element){
            console.log(element);
            $(element).keyup(function updateCharCounter(){
                var $me = $(this),
                    maxlength = parseInt($me.attr('maxlength'), 10),
                    charCount = $me.val().length,
                    $counter = $me.siblings('.limit');

                $counter.text('limit: ' + maxlength + 'character. remaining: ' + (maxlength - charCount));

                console.log(maxlength);
                console.log(charCount);
                console.log(maxlength-charCount);
            });
        });
    };

}(jQuery));



$(document).ready(function(){
    'use strict';
    $("textarea, input:text").showCharLimit();
});