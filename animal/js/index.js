$(document).ready(function(){
    var dom = "<div class='crossline'  style='top:600px; left:600px;'></div>";

    $("#graph").append(dom);


    $("#graph .event").on("click", function(){
       alert("!");
    });
});