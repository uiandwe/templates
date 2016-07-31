$(document).ready(function () {

    $('.drag').draggable({
        axis: "y",
        drag: function () {
            console.log("!");
            var offset = $(this).offset();
            console.log('x: ' + offset.left);
            console.log('y: ' + offset.top);
        }

    });
});