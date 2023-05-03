/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = ['#FFE3CC'];
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}



function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);

  // draw a 7x4 grid of faces
  let w = canvasHeight / 4;
  let h = canvasHeight / 4;
  for(let i=0; i<7; i++) {
    for(let j=0; j<4; j++) {
      let x = random(h/2) + h*i*1.2;
      let y = random(w/2) + w*j*1.2;
     
        let topHead_angle = random(170, 210);
        let upperCheek_angle = random(-30, -70);
        let MF_width = random(5.5, 6.8);
        let cheek_angle = random(-5, 35);
        let jaw_angle = random(-10, 30);
        let earType = int(random(1, 3.9));
        let eye_width = random(3, 4.5);
        let nose_width = random(0.5, 1.7);
        let nose_height = random(1, 2.2);
        let mouth_width = random(0.5, 1.4);
        let mouth_height = random(4, 7);
        let colorValue = 0;
        let arcRadius = int(random(w/18,w/12));

        push();
        translate(x, y);
        // scale(7);
        scale(arcRadius);
        let spinnerValue = random(0, 100);
        if(spinnerValue < 60){
          colorValue = 0;
          earType = int(random(1, 2));
        } else{
          colorValue = int(random(1, 3.5));
          earType = int(random(2.1, 3.9));
        }
        myFace(topHead_angle, upperCheek_angle, MF_width, 
                cheek_angle, jaw_angle, earType, eye_width, 
                nose_width, nose_height, 
                mouth_width, mouth_height, 
                colorValue);
                pop();

        push();
        translate(x, y);
        scale(arcRadius/7);
        noFill();
        strokeWeight(6);
        arc(0,0,120,120,90,91);
        arc(0,0,120,120,100,150);
        arc(0,0,120,120,160,170);
        pop();
        push();
        translate(x, y);
        scale(arcRadius/7);
        noFill();
        stroke(255);
        strokeWeight(5);
        arc(0,0,120,120,90,91);
        arc(0,0,120,120,100,150);
        arc(0,0,120,120,160,170);
        pop();
        
    }
  }
}

function arrangeBKGD(){
  beginShape();
  vertex(-5, -2);
  bezierVertex(-5, -3, -6, -3, -6.5, -3.5);
  bezierVertex(-8.5, -5.5, -5, -9, -3.8, -7);
  bezierVertex(-3.2, -6, -3.5, -5, -2.5, -4.5);
  endShape();
  
}

///////////////////////////////////////////////////////////////////
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
