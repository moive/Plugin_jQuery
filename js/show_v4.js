$(function(){

    var showMessage = function(params){
        var settings = $.extend(
            {},
            {
                levelClass : "info",
                speedAnimation : 1000
            },
            params
        );

        if (settings.message) {
            $(".message")
                .html(settings.message)
                .addClass(settings.levelClass)
                .click(function(){
                    $(this).removeClass(settings.levelClass);
                    $(this).addClass("error");
                    $(this).slideUp(settings.speedAnimation);
                })
                .slideDown(settings.speedAnimation);
        }
    }

    showMessage({
        message : "Esto es un texto de prueba",
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
