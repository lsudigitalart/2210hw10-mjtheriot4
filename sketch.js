var pa = [];
var fa = [];

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

  for(var j = 0; j < fa.length; j++){
    fa[j].explode();
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
      // this.vy *= -0.5;
      // this.vx *= 0.75;
      // this.posY = height - 9;
      for(var i = 0; i < 10; i++){
        var xVel = random(-20,20);
        var yVel = random(-25,25);
        fa[i] = new Fragment(100, 100, this.xVel, this.yVel);
        // println(fa[i]);
      }
      drawEllipse = false;
    }

    // if(this.posX < 0 || this.posX > width){
    //   this.vx *= -1;
    // }

    // if(this.posX > width){
    //   this.vx *= -1;
    // }

  };

  this.display = function() {
    if (drawEllipse == true){
      ellipse(this.posX, this.posY, particleSize);
    }
  };
}

 function Fragment(tempX, tempY, tempVx, tempVy){
  this.posX = tempX;
  this.posY = tempY;
  this.vx = tempVx;
  this.vy = tempVy;
  var gravity = 1;

  this.explode = function() {
    ellipse(this.posX, this.posY, 10);

    this.posX += this.vx;
    this.posY += this.vy;

    if(this.posY + 10 > height){
      this.vy *= -0.5;
      this.vx *= 0.75;
      this.posY = height - 9;
    }
    if(this.posX < 0 || this.posX > width){
      this.vx *= -1;
    }
  };
}
