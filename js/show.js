$(function(){
    $(".message")
        .html("Welcome")
        .addClass("info")
        .click(function(){
            $(this).removeClass("info");
            $(this).addClass("error");
            $(this).slideUp(1000);
        })
        .slideDown(1000);

    $(".mostrar").click(function(){
        $(".message")
            .removeClass("error")
            .addClass("info")
            .slideDown(1000);
    });
});
