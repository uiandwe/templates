$(document).ready(function(){
    //https://marvelapp.com/
    var width = $("#bg-canvas").width();
    var height = $("#bg-canvas").height();
    $("#bg_circle").css("position", "fixed").css("z-index", "-10");


    var mainCanvas = document.getElementById("bg_circle");
    mainCanvas.width = width;
    mainCanvas.height = height;
    var mainContext = mainCanvas.getContext('2d');


    var circles = [];

    function Circle(radius, speed, width, xPos, yPos, angle) {
        this.radius = radius;
        this.speed = speed;
        this.width = width;
        this.xPos = xPos;
        this.yPos = yPos;
        this.opacity = 0.05 + Math.random() * 0.5;
        this.angle = angle;

    }

    Circle.prototype.update = function() {

        mainContext.beginPath();

        this.xPos += Math.sin(this.angle)*this.speed;
        this.yPos += Math.cos(this.angle)*this.speed;

        if(this.xPos > width){

            if(0 < radianToDegree(this.angle) <= 90){
                this.angle = degreeToRadian(360-radianToDegree(this.angle));
            }
            else{
                this.angle = degreeToRadian(270-(radianToDegree(this.angle)-90));
            }
        }

        if(this.yPos <= 0){
            if( 180 <= radianToDegree(this.angle) <= 270){
                this.angle = degreeToRadian(360-(radianToDegree(this.angle)-180));
            }
            else{
                this.angle = degreeToRadian(90-(radianToDegree(this.angle)-90));
            }
        }

        if(this.xPos <= 0){
            if( 180 <= radianToDegree(this.angle) <= 270){
                this.angle = degreeToRadian(360-radianToDegree(this.angle));
            }
            else{
                this.angle = degreeToRadian(180-(270-radianToDegree(this.angle)));
            }
        }


        if(this.yPos > height){
            if( 0 <= radianToDegree(this.angle) <= 90){
                this.angle = degreeToRadian(180-radianToDegree(this.angle));
            }
            else{
                this.angle = degreeToRadian(270-(radianToDegree(this.angle)-270));
            }
        }

      mainContext.arc(
            this.xPos,
            this.yPos,
            this.width,
            0,
            Math.PI * 2,
            false);

      mainContext.closePath();

      mainContext.fillStyle = 'rgba(0,0,0,' + this.opacity + ')';
      mainContext.fill();
    };

    function drawCircles() {
      for (var i = 0; i < 10; i++) {
        var randomX = Math.round(Math.random() * width);
        var randomY = Math.round(Math.random() * height);
        var speed = 1+(Math.random() * (0.5 - 0.1) + 0.1).toFixed(4);
        var size = 10 - Math.floor((Math.random() * 4) + 1);
        var angle =  Math.floor((Math.random() * 360) + 1);
        angle = degreeToRadian(angle);
        var circle = new Circle(100, speed, size, randomX, randomY, angle);
        circles.push(circle);
      }
      draw();
    }


    function degreeToRadian(x){
        return x*3.14/180;
    }

    function radianToDegree(x){
        return 180*x/3.14;
    }
    function draw() {
      mainContext.clearRect(0, 0, width, height);

      for (var i = 0; i < circles.length; i++) {
        var myCircle = circles[i];
        myCircle.update();
      }
      requestAnimationFrame(draw);
    }

    window.onload  = function() {
        drawCircles();
    }
});