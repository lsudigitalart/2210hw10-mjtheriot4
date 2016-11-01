var pa = [];
var ga = [];
var explodeNow = false;

function setup() {
  createCanvas(1200, 700);
  //pa[0] = new Particle(width/2, height/2);
  noStroke();
  // noCursor();
  // stroke(255);
}

function draw() {
  background(0);
  for(var i = 0; i < pa.length; i++){
    pa[i].display();
    pa[i].move();
  }
  for(var j = 0; j < ga.length; j++){
    ga[j].display();
    ga[j].move();
  }
  ga[ga.length] = new Grenade(random(10, width-10), 10);
}


// function mouseReleased(){
//   ga[ga.length] = new Grenade(mouseX, mouseY);
// }

function Particle(tempX, tempY){
  this.posX = tempX;
  this.posY = tempY;
  var particleSize = 10;
  this.expired = false;
  this.lifespan = 0;

  this.vx = random(-10, 10);
  this.vy = random(-15, 15);
  var gravity = 1;

  this.move = function() {
    if(this.expired == false){
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
    }
  };
  this.display = function() {
    if(this.expired == false){
      ellipse(this.posX, this.posY, particleSize);

      if (this.lifeSpan >= 10){
        expired = true;
        println("expired");
      }
      this.lifeSpan++;
    }
  };
}
function Grenade(tempX, tempY){
  this.posX = tempX;
  this.posY = tempY;
  this.vy = 1;
  this.doonce = true;
  var grenadeSize = 20;
  var drawEllipse = true;
  gravity = 1;

  this.display = function(){
    if (drawEllipse == true){
      ellipse(this.posX, this.posY, 20);
   }
 };
  this.move = function(){
    this.posY += this.vy;
    this.vy += gravity;

    if (this.posY >= height-10){
      drawEllipse = false;
      if (this.doonce == true){
        for(i = 0; i<20; i++){
          pa[pa.length] = new Particle(this.posX, this.posY);
          }
          this.doonce = false;
      }
    }
  };
}
