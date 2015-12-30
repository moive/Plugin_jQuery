(function($){
    $.fn.colorH1 = function(options){
        var settings, defaults;

        defaults = {
            color: "#556b2f",
            backgroundColor: "black",
            padding: "5px 20px"
        };

        settings = $.extend(defaults, options);

        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor,
            padding: settings.padding
        });
    };

    $.fn.showLink = function(){
        //option 1
        this.filter(":odd").each(function(){
            var link = $(this);
            link.append(" ("+link.attr("href")+")");

            return this;
        });

        /*
        //option 2
        this.filter("a").append(function(){
            return " (" + this.href + ") ";
        });
        return this;
        */
    };
})(jQuery);
