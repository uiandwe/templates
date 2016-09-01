$(document).ready(function () {
    $(".panel-btn").on("click", function () {
        var class_name = this.getAttribute("data-ref");

        $('.hidden').fadeOut(1000).promise().done(function () {
            $("." + class_name + "").fadeIn("slow");
        });

    });


});