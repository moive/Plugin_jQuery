$.fn.colorTxt = function(){
    this.css("color","maroon");
};

$.fn.colorLink = function(){
    this.css("color","red");
    return this;
};

(function($){
    var color = "aqua";
    var oswald = "'Oswald', sans-serif";

    $.fn.colorSpan = function(){
        this.css("color", color);
    };

    $.fn.openColor = function(){
        this.css({
            "font-family" : oswald,
            color : "red"
        });
    };

    $.fn.closeColor = function(){
        this.css({
            "font-family" : oswald,
            color : "black"
        });
    };

    $.fn.colorUpper = function(action){
        if (action==="open") {
            this.openColor();
        }
        if (action==="close") {
            this.closeColor();
        }
    };
})(jQuery);
