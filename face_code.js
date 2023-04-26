/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */



function myFace(lowerFaceSize){
  rectMode(CENTER);
  strokeWeight(0.2);
  // fill(200);
  //   ellipse(0,0,20);
  //   fill(255);
  //   ellipse(-5,-3,5);
  //   ellipse(5,-3,5);
  //   fill(100);
  //   rect(0,5,7,3);
  //   fill(2555);
  //   rect(0,4,7,1);
  //   rect(0,7,7,1);
  
  // Left ear
  beginShape();
  vertex(-5, -3);
  bezierVertex(-5, -3, -5, -4, -6, -4);
  bezierVertex(-8, -5, -4, -8, -4, -5);
  bezierVertex(-4.5, -4, -3.5, -4, -3.5, -4);
  endShape();

  // Right ear
  beginShape();
  vertex(5, -3);
  bezierVertex(5, -3, 5, -4, 6, -4);
  bezierVertex(8, -5, 4, -8, 4, -5);
  bezierVertex(4.5, -4, 3.5, -4, 3.5, -4);
  endShape();

  // Upper half face
  beginShape();
  vertex(-6, 0);
  bezierVertex(-5, -1, -6, -6, 0, -6);
  bezierVertex(6, -6, 5, -1, 6, 0);
  endShape();

  // Lower half face
  // Define bezier's start and end points
  let LF_st_X = -6;
  let LF_st_Y = 0;
  let LF_ed_X1 = 0;
  let LF_ed_Y1 = 8;
  let LF_ed_X2 = 6;
  let LF_ed_Y2 = 0;

  // Bezier degree
  // let lowerFaceSize = 0.4;

  // Control points coordinates
  let LF_ctrl_X1 = LF_st_X + (LF_ed_X1-4)  * lowerFaceSize;
  let controlY1 = LF_st_Y + (LF_ed_Y1-7)  * lowerFaceSize;
  let LF_ctrl_X2 = LF_ed_X1 + (LF_ed_X1 - 8) * lowerFaceSize;
  let controlY2 = LF_ed_Y1 + (LF_ed_Y1 -7) * lowerFaceSize;
  let LF_ctrl_X3 = LF_ed_X1 + (LF_ed_X2+2)  * lowerFaceSize;
  let controlY3 = LF_ed_Y1 + (LF_ed_Y2+1)  * lowerFaceSize;
  let LF_ctrl_X4 = LF_ed_X2 + (LF_ed_X2 - 2) * lowerFaceSize;
  let controlY4 = LF_ed_Y2 + (LF_ed_Y2 +1) * lowerFaceSize;

  beginShape();
  vertex(LF_st_X, LF_st_Y);
  bezierVertex(LF_ctrl_X1, controlY1, LF_ctrl_X2, controlY2, LF_ed_X1, LF_ed_Y1);
  bezierVertex(LF_ctrl_X3, controlY3, LF_ctrl_X4, controlY4, LF_ed_X2, LF_ed_Y2);
  endShape();

  // beginShape();
  // vertex(-6, 0);
  // bezierVertex(-10, 1, -8, 9, 0, 8);
  // bezierVertex(8, 9, 10, 1, 6, 0);
  // endShape();

  /////////////////////////////////////////
  // Draw Control lines
  stroke(255,0,0);
  strokeWeight(0.1);
  // Upper bezier control lines
  line(-6, 0, -5, -1);
  line(-6, -6, 0, -6);
  line(0, -6, 6, -6);
  line(5, -1, 6, 0);

  // Lower bezier control lines
  line(-6, 0, -10, 1);
  line(-8, 9, 0, 8);
  line(0, 8, 8, 9);
  line(10, 1, 6, 0);
  ///////////////////////////////////////////
}

function orangeAlienFace(tilt_value, eye_value, mouth_value) {
  const bg_color3 = [71, 222, 219];
  const fg_color3 = [255, 93, 35];

  let headSize = 20
  let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // head
  noStroke();
  fill(fg_color3);
  ellipse(centerX, 0, headSize, headSize);

  // 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
  }
// middle eye
  if (eye_value >= 2) {
    fill(bg_color3);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
  }

  // mouth
  fill(bg_color3);
  ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
}


function simplePurpleFace() {
  fill(234, 122, 244);
  noStroke();
  // head
  ellipse(0, 0, 20);
  // eyes
  fill(255, 217, 114);
  ellipse(-3, -3, 3);
  ellipse( 3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}
