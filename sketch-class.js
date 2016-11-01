var pa = [];

function setup() {
  createCanvas(640, 480);
  pa[0] = new Particle(width/2, height/2);
  // noStroke();
  noCursor();
  stroke(255);
}

function draw() {
  background(0);
  for(var i = 0; i < pa.length; i++){
    pa[i].display();
    pa[i].move();
  }

  for(var n = 1; n < pa.length; n++){
    line(pa[n].posX, pa[n].posY, pa[n-1].posX, pa[n-1].posY);
  }

}

function mouseMoved(){
  // pa[pa.length] = new Particle(mouseX, mouseY);
}

function mouseReleased(){
  pa[pa.length] = new Particle(mouseX, mouseY);
  // for(var i = 0; i < pa.length; i++){
  //   pa[i].posX = random(width);
  //   pa[i].posX = random(height);
  //   pa[i].vx = random(-10, 10);
  //   pa[i].vy = random(-15, 15);
  //}



}

function Particle(tempX, tempY){
  this.posX = tempX;
  this.posY = tempY;
  var particleSize = 10;

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
    }

    if(this.posX < 0 || this.posX > width){
      this.vx *= -1;
    }

    // if(this.posX > width){
    //   this.vx *= -1;
    // }

  };

  this.display = function() {
    ellipse(this.posX, this.posY, particleSize);
  };

}
