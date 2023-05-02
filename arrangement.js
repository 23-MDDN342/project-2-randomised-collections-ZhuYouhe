/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [71, 222, 219];
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
  // noStroke();

  // draw a 7x4 grid of faces
  let w = canvasHeight / 4;
  let h = canvasHeight / 4;
  for(let i=0; i<4; i++) {
    for(let j=0; j<7; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
     
        // center face
        // let eye_value = int(random(2,4));
        // let tilt_value = random(-45, 45);
        // let mouth_value = random(3,4);
        // let is_cyclops = random(0, 100);

        let topHead_angle = random(170, 210);
        let upperCheek_angle = random(-30, -70);
        let MF_width = random(5, 7);
        let cheek_angle = random(-5,35);
        let jaw_angle = random(-10,30);

        // if(is_cyclops < 10) {
        //   eye_value = 1;
        //   tilt_value = random(-5, 5);
        //   mouth_value = random(0, 1.7);
        // }

        // if(is_cyclops >= 10 && is_cyclops <=50) {
        //   topHead_angle = random(175, 185);
        //   upperCheek_angle = random(-40, -50);
        //   MF_width = 6;
        //   cheek_angle = random(14, 20);
        //   jaw_angle = random(15, 25);
        // }


        push();
        translate(x, y);
        scale(w/25, h/25);
        
        myFace(topHead_angle, upperCheek_angle, MF_width, cheek_angle, jaw_angle);
        pop();
      
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
