$(document).ready(function() {
    $(".wrap-btn-up").hide();

    $(".wrap-title").mouseover(function(){
        $detail = $(this).next();
        $(this).nextUntil("a").slideDown();
        // $detail.next().show(500);

    });

    $(".wrap-btn-up").click(function(){
        $(this).hide();
        $(this).prevUntil("div").slideUp();
    });

});
