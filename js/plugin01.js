
$(document).ready(function(){
    'use strict';
    var tallestHeight = 0,
        $stories = $("#stories2").find(".col-sm-4");

    $stories.each(function(i, el){
        console.log(el);
        var elHeight = $(el).outerHeight();
        if(elHeight > tallestHeight){
            tallestHeight = elHeight;
        }
    });

    $stories.css('height', tallestHeight);
})