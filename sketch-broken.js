var pa = [];


function setup() {
  createCanvas(1024,768);
  stroke(255);
  pa[0] = new Particle(width/2,height/2);
  // background(0);
}

function draw() {
  background(0);
  for(var i = 0; i < pa.length; i++){
    pa[i].display();
    pa[i].move();
  }

}
function mouseReleased(){
  pa[pa.length] = new Particle(mouseX, mouseY);
  }
function Particle(tempX, tempY){
  this.posX = tempX;
  this.posY = tempY;
  var particleSize = 10;
  var drawEllipse = true;

  this.vx = random(-10, 10);
  this.vy = random(-15, 15);
  var gravity = 1;

  this.move = function() {
    this.posX += this.vx;
    this.posY += this.vy;
    this.vy += gravity;

    if(this.posY + 10 > height){
      this.vy *= -0.5;
      this.vx *= 0.75;
      this.posY = height - 9;
      var previousPaIndex = pa[pa.length];
      for(var i = pa[pa.length]; i < previousPaIndex + 10; i++){
        pa[pa.length] = new Particle(this.posX, this.posY);
        println('called');
      }
    }

    if(this.posX < 0 || this.posX > width){
      this.vx *= -1;
    }

    if(this.posX > width){
      this.vx *= -1;
    }

  };

  this.display = function() {
    if (drawEllipse == true){
      ellipse(this.posX, this.posY, particleSize);
    }
  };
}
