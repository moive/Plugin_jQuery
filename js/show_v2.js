$(function(){

    var showMessage = function(message, levelClass, speedAnimation){
        if (message && levelClass && speedAnimation) {
            $(".message")
                .html(message)
                .addClass(levelClass)
                .click(function(){
                    $(this).removeClass(levelClass);
                    $(this).addClass("error");
                    $(this).slideUp(speedAnimation);
                })
                .slideDown(speedAnimation);
        }
    };

    showMessage("Welcome", "info", 1500);

    $(".mostrar").click(function(){
        $(".message")
            .removeClass("error")
            .addClass("info")
            .slideDown(1000);
    });
});
