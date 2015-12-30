(function($, undefined){
    $.fn.showMessage = function(params){
        var settings = $.extend(
            {},
            {
                levelClass : "info",
                speedAnimation : 1000
            },
            params
        );

        if (typeof(settings.message)==="string") {
            this
                .html(settings.message)
                .addClass(settings.levelClass)
                .click(function(){
                    $(this).removeClass(settings.levelClass);
                    $(this).addClass("error");
                    $(this).slideUp(settings.speedAnimation);
                })
                .slideDown(settings.speedAnimation);
        }

    };
})(jQuery)

$(function(){
    $(".message").showMessage({
        message : "Welcome...",
        //levelClass : "error",
        speedAnimation : 500
    });

    $(".mostrar").click(function(){
        $(".message")
            .removeClass("error")
            .addClass("info")
            .slideDown(1000);
    });
});
