$(function(){

    var showMessage = function(message,levelClass,speedAnimation){
        levelClass = typeof(levelClass) === "string" ? levelClass : "info";
        speedAnimation = typeof(speedAnimation) === "number" ? speedAnimation : 1000;
        if (message) {
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

    showMessage("Welcome", 12, "mil");

    $(".mostrar").click(function(){
        $(".message")
            .removeClass("error")
            .addClass("info")
            .slideDown(1000);
    });
});
