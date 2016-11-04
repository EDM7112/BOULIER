var img;
var boules = [];
var boulesDuBoulier = [];
var mySound; 
var nombreDeCliques = 0;
var mySound2;

function preload() {
  img = loadImage('assets/Boulier.png');
  mySound = loadSound('assets/Clochette.mp3'); 
  mySound2 = loadSound('assets/RewindFINAL.m4a');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(0, 0, 100);
 
//Boules dans le carré
  for (var i = 0; i < 10; i++) {
    boules[i] = new UneChose();
  }

//Boules dans le boulier
  for (var i = 0; i < 200; i++) {
    boulesDuBoulier[i] = new UneBouleDuBoulier();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);


}


function draw() {
background(0, 0, 100);
  translate(width / 2, height / 2);

  

  noStroke();
  fill(15, 100, 85);
  rect(-225, -10, 450, 450);

  var nombreDeChoses = boules.length;

  for (var i = 0; i < nombreDeChoses; i++) {
    var c = boules[i];
    c.draw();
  }

  for (var i = 0; i < boulesDuBoulier.length; i++) {
    var c = boulesDuBoulier[i];
    c.draw();
  }
  image(img, -60, -305, 125, 300);

}

function UneChose() {

  this.x = random(-200, 200);
  this.y = random(200, 400);
  this.color = color(random(0, 360), random(60, 100), random(60, 100));
  this.size = random(10, 30);

  this.draw = function() {
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

}

function UneBouleDuBoulier() {

  this.x = random(-40, 45);
  this.y = random(-275, 100);
  this.color = color(random(0, 360), random(60, 100), random(60, 100));
  this.size = (15);

  this.draw = function() {
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

}

function mouseClicked() {
  if(boulesDuBoulier.length==0){
    boules = [];
    nombreDeCliques = 0;
   for (var i = 0; i < 10; i++) {
    boules[i] = new UneChose();
  }

  for (var i = 0; i < 200; i++) {
    boulesDuBoulier[i] = new UneBouleDuBoulier();
  
  }
    mySound.pause();
   mySound2.setVolume(0.7);
     mySound2.play();
    
  } else {
    if(!mySound2.isPlaying()){
     
     mySound.setVolume(0.6);
    mySound.play(); 
    }
    

    nombreDeCliques = nombreDeCliques + 1;
    for (var i = 0; i < nombreDeCliques*10; i++) {
      boules[i] = new UneChose();
    }
  
  
    for (var i = 0; i < boulesDuBoulier.length; i++) {
      var c = boulesDuBoulier[i];
      c.x = random(-40, 45);
      c.y = random(-275, 100);
      c.draw();
    }
    
   for (var i = 0; i < nombreDeCliques*2; i++) {
    boulesDuBoulier.pop();
    }
  }
}

