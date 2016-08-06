$(document).ready(function(){

    var mainCanvas = document.getElementById("myCanvas");
    var mainContext = mainCanvas.getContext('2d');

    var circles = [];

    function Circle(radius, speed, width, xPos, yPos, angle) {
      this.radius = radius;
      this.speed = speed;
      this.width = width;
      this.xPos = xPos;
      this.yPos = yPos;
      this.opacity = 0.05 + Math.random() * 0.5;
        this.angle = angle
      this.counter = 1;
      this.sign = 1;
      var signHelper = Math.floor(Math.random() * 2);

    }

    Circle.prototype.update = function() {

      this.counter += this.sign * this.speed;

      mainContext.beginPath();

      mainContext.arc(
          this.xPos+=Math.sin(this.angle)*this.speed,
        this.yPos+=Math.cos(this.angle)*this.speed,
        this.width,
        0,
        Math.PI * 2,
        false);

      mainContext.closePath();

      mainContext.fillStyle = 'rgba(0,0,0,' + this.opacity + ')';
      mainContext.fill();
    };

    function drawCircles() {
      for (var i = 0; i < 20; i++) {
        var randomX = Math.round(-200 + Math.random() * 700);
        var randomY = Math.round(-200 + Math.random() * 700);
        var speed = 1 - (Math.random() * (0.5 - 0.1) + 0.1).toFixed(4);
        var size = 5 - Math.floor((Math.random() * 4) + 1);
          var angle =  Math.floor((Math.random() * 360) + 1);
        var circle = new Circle(100, speed, size, randomX, randomY, angle);
        circles.push(circle);
      }
      draw();
    }
    drawCircles();

    function draw() {
      mainContext.clearRect(0, 0, 500, 500);

      for (var i = 0; i < circles.length; i++) {
        var myCircle = circles[i];
        myCircle.update();
      }
      requestAnimationFrame(draw);
    }
});