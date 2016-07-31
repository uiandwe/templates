$(document).ready(function () {

    var height = $(window).height();
    $(".contain-wrapper").css("height", height + "px");
    $(".drag").css("height", height + "px");

    //$('.drag').draggable(
    //{
    //	axis: "y",
    //    drag: function(){
    //        var offset = $(this).offset();
    //        console.log('x: ' + offset.left);
    //        console.log('y: ' + offset.top);
    //    }
    //
    //});

    var position;
    var moveY = 0;
    $('section').mousedown(function (event) {

        moveY = 0;
        position = event;
    });

    $('section').mouseup(function (event) {
        moveY = position.pageY - event.pageY;
        var moveId = $(this).attr('id');

        if (moveY > 0) {
            moveId = parseInt(moveId) - 1;
            if (moveId <= 0) {
                moveId = 1;
            }

            $(function () {

                $('#' + (moveId - 1) + ' .content-wrapper').css('z-index', 999).css("position", 'absolute');
                $('#' + (moveId - 1) + ' .content-wrapper').fadeIn().animate({ top: 0, opacity: 0 }, { duration: 700,
                    queue: false,
                    complete: function () {
                        $('#' + (moveId - 1) + ' .content-wrapper').css("position", 'inherit').css("opacity", 1).css('top', 'auto');
                    }
                }, function () {}).finish();

                $('.contain-wrapper').animate({
                    scrollTop: $(".contain-wrapper").offset().top + height * (moveId - 1)
                }, { duration: 600, queue: false });
            });
        } else {
            moveId = parseInt(moveId) + 1;
            if (moveId >= $(document).find('section').length) {
                moveId = $(document).find('section').length;
            }

            $(function () {

                $('#' + (moveId - 1) + ' .content-wrapper').css('z-index', 999).css("position", 'absolute');
                $('#' + (moveId - 1) + ' .content-wrapper').fadeIn().animate({ top: 0, opacity: 0.1 }, { duration: 700,
                    queue: false,
                    complete: function () {
                        $('#' + (moveId - 1) + ' .content-wrapper').css("position", 'inherit').css("opacity", 1).css('top', 'auto');
                    }
                }, function () {}).finish();

                $('.contain-wrapper').animate({
                    scrollTop: $(".contain-wrapper").offset().top + height * (moveId - 1)
                }, { duration: 600, queue: false });
            });
        }
    });
});