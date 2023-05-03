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

// Acronym:
// UF = Upper Face
// MF = Middle line of Face
// LF = Lower Face

function myFace(topHead_angle, upperCheek_angle, MF_width, 
                cheek_angle, jaw_angle, 
                nose_width, nose_height, 
                mouth_width, mouth_height, colorValue){
  angleMode(DEGREES);
  rectMode(CENTER);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  strokeWeight(0.1);

  let Black = color('#000000');
  let Gray = color('#8C8C8C');
  let Brown = color('#73675C');
  let DarkBrown = color('#8C4E03');

  let furColor = [Black, Gray, Brown, DarkBrown];
  
  push();
  fill(furColor[colorValue]);
  ears();
  pop();
  
  faceShape(topHead_angle, upperCheek_angle, MF_width, cheek_angle, jaw_angle);
  
  push();
  fill(furColor[colorValue]);
  eyes();
  pop();

  ellipse(-2,-0.5,0.5);
  ellipse(2,-0.5,0.5);

  push();
  fill(furColor[colorValue]);
  nose(nose_width, nose_height, mouth_width, mouth_height);
  pop();

}

function ears(){



// Left ear
beginShape();
vertex(-5, -2.5);
bezierVertex(-5, -3, -5, -4, -6.5, -4);
bezierVertex(-8.5, -5.5, -5, -9, -3.8, -7);
bezierVertex(-4, -6, -3.5, -5, -2.5, -4.5);
endShape();

// Right ear
beginShape();
vertex(5, -2.5);
bezierVertex(5, -3, 5, -4, 6.5, -4);
bezierVertex(8.5, -5.5, 5, -9, 3.8, -7);
bezierVertex(4, -6, 3.5, -5, 2.5, -4.5);
endShape();
  
push();
  stroke(255,0,0);
  strokeWeight(0.1);
  line(-5, -2.5, -5, -3);
  line(-5, -4, -6.5, -4);
  line(-6.5, -4, -8.5, -5.5);
  line(-5, -9, -3.8, -7);
  line(-3.8, -7, -4, -6);
  line(-3.5, -5, -2.5, -4.5);
  pop();
}

function faceShape(topHead_angle, upperCheek_angle, MF_width, cheek_angle, jaw_angle){
  
  // Define bezier's start and end points
  // MF_width is the width of the face
  // MF_width = 6;

  // Both upper and lower face bezier shapes start from left middle point, and end at right middle point
  let faceStart_X = -MF_width;
  let faceStart_Y = 0;
  let faceEnd_X = MF_width;
  let faceEnd_Y = 0;

  let UF_ed_X1 = 0;
  let UF_ed_Y1 = MF_width-12; // Top head height
  let LF_ed_X1 = 0;
  let LF_ed_Y1 = 14-MF_width; // Jaw height
  
  
  // Upper half of face
  // upperCheek_angle is the angles of upper control lines (above middle line of face)
  // topHead_angle is the angles of top control lines
  // upperCheek_angle = -45;
  // topHead_angle = 180;
  let UF_ctrl_Radius1 = MF_width-4.5; // Upper cheek control handle length
  let UF_ctrl_Radius2 = 12-MF_width; // Top head control handle length
  
  let UF_ctrl_X1 = faceStart_X + cos(upperCheek_angle) * UF_ctrl_Radius1; // Upper left control point X
  let UF_ctrl_Y1 = faceStart_Y + sin(upperCheek_angle) * UF_ctrl_Radius1; // Upper left control point Y
  let UF_ctrl_X2 = UF_ed_X1 + cos(topHead_angle) * UF_ctrl_Radius2; // Top left control point X
  let UF_ctrl_Y2 = UF_ed_Y1 + sin(topHead_angle) * UF_ctrl_Radius2; // Top left control point Y
  let UF_ctrl_X3 = UF_ed_X1 + cos(180-topHead_angle) * UF_ctrl_Radius2; // Top right control point X
  let UF_ctrl_Y3 = UF_ed_Y1 + sin(180-topHead_angle) * UF_ctrl_Radius2; // Top right control point Y
  let UF_ctrl_X4 = faceEnd_X + cos(-180-upperCheek_angle) * UF_ctrl_Radius1; // Upper right control point X
  let UF_ctrl_Y4 = faceEnd_Y + sin(-180-upperCheek_angle) * UF_ctrl_Radius1; // Upper right control point Y

  beginShape();
  vertex(faceStart_X, faceStart_Y);
  bezierVertex(UF_ctrl_X1, UF_ctrl_Y1, UF_ctrl_X2, UF_ctrl_Y2, UF_ed_X1, UF_ed_Y1);
  bezierVertex(UF_ctrl_X3, UF_ctrl_Y3, UF_ctrl_X4, UF_ctrl_Y4, faceEnd_X, faceEnd_Y);
  endShape();


  // Lower half of face
  // cheek_angle is the angles of lower control lines (below middle line of face)
  // jaw_angle is the angles of bottom control lines
  // cheek_angle = 17;
  // jaw_angle = 20;
  let LF_ctrl_Radius1 = MF_width*0.5; // Cheek control handle length
  let LF_ctrl_Radius2 = MF_width*1.2; // Jaw control handle length
  
  let LF_ctrl_X1 = faceStart_X + cos(180-cheek_angle) * LF_ctrl_Radius1; // Lower left control point X
  let LF_ctrl_Y1 = faceStart_Y + sin(180-cheek_angle) * LF_ctrl_Radius1; // Lower left control point Y
  let LF_ctrl_X2 = LF_ed_X1 + cos(180-jaw_angle) * LF_ctrl_Radius2; // Bottom left control point X
  let LF_ctrl_Y2 = LF_ed_Y1 + sin(180-jaw_angle) * LF_ctrl_Radius2; // Bottom left control point Y
  let LF_ctrl_X3 = LF_ed_X1 + cos(jaw_angle) * LF_ctrl_Radius2; // Bottom right control point X
  let LF_ctrl_Y3 = LF_ed_Y1 + sin(jaw_angle) * LF_ctrl_Radius2; // Bottom right control point Y
  let LF_ctrl_X4 = faceEnd_X + cos(cheek_angle) * LF_ctrl_Radius1; // Lower right control point X
  let LF_ctrl_Y4 = faceEnd_Y + sin(cheek_angle) * LF_ctrl_Radius1; // Lower right control point Y

  // Bezier degree
  // let lowerFaceSize = 0.4;

  // Control points coordinates
  // let LF_ctrl_X1 = faceStart_X + (LF_ed_X1-4)  * lowerFaceSize;
  // let LF_ctrl_Y1 = faceStart_Y + (LF_ed_Y1-7)  * lowerFaceSize;
  // let LF_ctrl_X2 = LF_ed_X1 + (LF_ed_X1 - 8) * lowerFaceSize;
  // let LF_ctrl_Y2 = LF_ed_Y1 + (LF_ed_Y1 -7) * lowerFaceSize;
  // let LF_ctrl_X3 = LF_ed_X1 + (faceEnd_X+2)  * lowerFaceSize;
  // let LF_ctrl_Y3 = LF_ed_Y1 + (faceEnd_Y+1)  * lowerFaceSize;
  // let LF_ctrl_X4 = faceEnd_X + (faceEnd_X - 2) * lowerFaceSize;
  // let LF_ctrl_Y4 = faceEnd_Y + (faceEnd_Y +1) * lowerFaceSize;

  beginShape();
  vertex(faceStart_X, faceStart_Y);
  bezierVertex(LF_ctrl_X1, LF_ctrl_Y1, LF_ctrl_X2, LF_ctrl_Y2, LF_ed_X1, LF_ed_Y1);
  bezierVertex(LF_ctrl_X3, LF_ctrl_Y3, LF_ctrl_X4, LF_ctrl_Y4, faceEnd_X, faceEnd_Y);
  endShape();

  // push();
  // // beginShape();
  // // vertex(-6, 0);
  // // bezierVertex(-10, 1, -8, 9, 0, 8);
  // // bezierVertex(8, 9, 10, 1, 6, 0);
  // // endShape();

  // /////////////////////////////////////////
  // // Draw Control lines
  // stroke(255,0,0);
  // strokeWeight(0.1);
  // // Upper bezier control lines
  // line(faceStart_X, faceStart_Y, UF_ctrl_X1, UF_ctrl_Y1);
  // line(UF_ctrl_X2, UF_ctrl_Y2, UF_ed_X1, UF_ed_Y1);
  // line(UF_ed_X1, UF_ed_Y1, UF_ctrl_X3, UF_ctrl_Y3);
  // line(UF_ctrl_X4, UF_ctrl_Y4, faceEnd_X, faceEnd_Y);

  // // Lower bezier control lines
  // line(faceStart_X, faceStart_Y, LF_ctrl_X1, LF_ctrl_Y1);
  // line(LF_ctrl_X2, LF_ctrl_Y2, LF_ed_X1, LF_ed_Y1);
  // line(LF_ed_X1, LF_ed_Y1, LF_ctrl_X3, LF_ctrl_Y3);
  // line(LF_ctrl_X4, LF_ctrl_Y4, faceEnd_X, faceEnd_Y);
  // pop();
  ///////////////////////////////////////////
}

function eyes(){
  let eye_width = 3;

  ////// Left eye
  let eyeLStart_X = -eye_width;
  let eyeLStart_Y = -0.5;
  let eyeLEnd_X = -1;
  let eyeLEnd_Y = 0;

  let eyeLT_ed_X = -eye_width+1.5;
  let eyeLT_ed_Y = -eye_width+1; // Left eye top
  let eyeLD_ed_X = -eye_width;
  let eyeLD_ed_Y = 2; // Left eye bottom
  
  
  
  // eyeLT_ctrl_angle1 is the angles of upper control lines (above middle line of face)
  // eyeLD_ctrl_angle1 is the angles of top control lines
  let eyeLT_ctrl_angle1 = -40;
  let eyeLT_ctrl_angle2 = 180;
  let eyeLT_ctrl_angle3 = 0;
  let eyeLT_ctrl_angle4 = -80;
  let eyeLD_ctrl_angle1 = 140;
  let eyeLD_ctrl_angle2 = -180;
  let eyeLD_ctrl_angle3 = 0;
  let eyeLD_ctrl_angle4 = 100;
  let eyeLT_ctrl_Radius1 = 1; // Upper cheek control handle length
  let eyeLT_ctrl_Radius2 = 1.1; // Top head control handle length
  
  let eyeLT_ctrl_X1 = eyeLStart_X + cos(eyeLT_ctrl_angle1) * eyeLT_ctrl_Radius1; // Upper left control point X
  let eyeLT_ctrl_Y1 = eyeLStart_Y + sin(eyeLT_ctrl_angle1) * eyeLT_ctrl_Radius1; // Upper left control point Y
  let eyeLT_ctrl_X2 = eyeLT_ed_X + cos(eyeLT_ctrl_angle2) * eyeLT_ctrl_Radius2; // Top left control point X
  let eyeLT_ctrl_Y2 = eyeLT_ed_Y + sin(eyeLT_ctrl_angle2) * eyeLT_ctrl_Radius2; // Top left control point Y
  let eyeLT_ctrl_X3 = eyeLT_ed_X + cos(eyeLT_ctrl_angle3) * eyeLT_ctrl_Radius2; // Top right control point X
  let eyeLT_ctrl_Y3 = eyeLT_ed_Y + sin(eyeLT_ctrl_angle3) * eyeLT_ctrl_Radius2; // Top right control point Y
  let eyeLT_ctrl_X4 = eyeLEnd_X + cos(eyeLT_ctrl_angle4) * eyeLT_ctrl_Radius1; // Upper right control point X
  let eyeLT_ctrl_Y4 = eyeLEnd_Y + sin(eyeLT_ctrl_angle4) * eyeLT_ctrl_Radius1; // Upper right control point Y

  let eyeLD_ctrl_Radius1 = 1.5; // Cheek control handle length
  let eyeLD_ctrl_Radius2 = 1; // Jaw control handle length
  
  let eyeLD_ctrl_X1 = eyeLStart_X + cos(eyeLD_ctrl_angle1) * eyeLD_ctrl_Radius1; // Lower left control point X
  let eyeLD_ctrl_Y1 = eyeLStart_Y + sin(eyeLD_ctrl_angle1) * eyeLD_ctrl_Radius1; // Lower left control point Y
  let eyeLD_ctrl_X2 = eyeLD_ed_X + cos(eyeLD_ctrl_angle2) * eyeLD_ctrl_Radius2; // Bottom left control point X
  let eyeLD_ctrl_Y2 = eyeLD_ed_Y + sin(eyeLD_ctrl_angle2) * eyeLD_ctrl_Radius2; // Bottom left control point Y
  let eyeLD_ctrl_X3 = eyeLD_ed_X + cos(eyeLD_ctrl_angle3) * eyeLD_ctrl_Radius2; // Bottom right control point X
  let eyeLD_ctrl_Y3 = eyeLD_ed_Y + sin(eyeLD_ctrl_angle3) * eyeLD_ctrl_Radius2; // Bottom right control point Y
  let eyeLD_ctrl_X4 = eyeLEnd_X + cos(eyeLD_ctrl_angle4) * eyeLD_ctrl_Radius1; // Lower right control point X
  let eyeLD_ctrl_Y4 = eyeLEnd_Y + sin(eyeLD_ctrl_angle4) * eyeLD_ctrl_Radius1; // Lower right control point Y

  beginShape();
  vertex(eyeLStart_X, eyeLStart_Y);
  bezierVertex(eyeLT_ctrl_X1, eyeLT_ctrl_Y1, eyeLT_ctrl_X2, eyeLT_ctrl_Y2, eyeLT_ed_X, eyeLT_ed_Y);
  bezierVertex(eyeLT_ctrl_X3, eyeLT_ctrl_Y3, eyeLT_ctrl_X4, eyeLT_ctrl_Y4, eyeLEnd_X, eyeLEnd_Y);
  bezierVertex(eyeLD_ctrl_X4, eyeLD_ctrl_Y4, eyeLD_ctrl_X3, eyeLD_ctrl_Y3, eyeLD_ed_X, eyeLD_ed_Y);
  bezierVertex(eyeLD_ctrl_X2, eyeLD_ctrl_Y2, eyeLD_ctrl_X1, eyeLD_ctrl_Y1, eyeLStart_X, eyeLStart_Y);
  endShape();

  /////////////////////////////////////////
   ////// Left eye
 let eyeRStart_X = eye_width;
 let eyeRStart_Y = -0.5;
 let eyeREnd_X = 1;
 let eyeREnd_Y = 0;

 let eyeRT_ed_X = eye_width-1.5;
 let eyeRT_ed_Y = -eye_width+1; // Left eye top
 let eyeRD_ed_X = eye_width;
 let eyeRD_ed_Y = 2; // Left eye bottom
 
 
 
 // eyeRT_ctrl_angle1 is the angles of upper control lines (above middle line of face)
 // eyeRD_ctrl_angle1 is the angles of top control lines
 let eyeRT_ctrl_angle1 = -130;
 let eyeRT_ctrl_angle2 = 0;
 let eyeRT_ctrl_angle3 = 180;
 let eyeRT_ctrl_angle4 = -100;
 let eyeRD_ctrl_angle1 = 40;
 let eyeRD_ctrl_angle2 = 0;
 let eyeRD_ctrl_angle3 = -180;
 let eyeRD_ctrl_angle4 = 80;
 let eyeRT_ctrl_Radius1 = 1; // Upper cheek control handle length
 let eyeRT_ctrl_Radius2 = 1.1; // Top head control handle length
 
 let eyeRT_ctrl_X1 = eyeRStart_X + cos(eyeRT_ctrl_angle1) * eyeRT_ctrl_Radius1; // Upper left control point X
 let eyeRT_ctrl_Y1 = eyeRStart_Y + sin(eyeRT_ctrl_angle1) * eyeRT_ctrl_Radius1; // Upper left control point Y
 let eyeRT_ctrl_X2 = eyeRT_ed_X + cos(eyeRT_ctrl_angle2) * eyeRT_ctrl_Radius2; // Top left control point X
 let eyeRT_ctrl_Y2 = eyeRT_ed_Y + sin(eyeRT_ctrl_angle2) * eyeRT_ctrl_Radius2; // Top left control point Y
 let eyeRT_ctrl_X3 = eyeRT_ed_X + cos(eyeRT_ctrl_angle3) * eyeRT_ctrl_Radius2; // Top right control point X
 let eyeRT_ctrl_Y3 = eyeRT_ed_Y + sin(eyeRT_ctrl_angle3) * eyeRT_ctrl_Radius2; // Top right control point Y
 let eyeRT_ctrl_X4 = eyeREnd_X + cos(eyeRT_ctrl_angle4) * eyeRT_ctrl_Radius1; // Upper right control point X
 let eyeRT_ctrl_Y4 = eyeREnd_Y + sin(eyeRT_ctrl_angle4) * eyeRT_ctrl_Radius1; // Upper right control point Y

 let eyeRD_ctrl_Radius1 = 1.5; // Cheek control handle length
 let eyeRD_ctrl_Radius2 = 1; // Jaw control handle length
 
 let eyeRD_ctrl_X1 = eyeRStart_X + cos(eyeRD_ctrl_angle1) * eyeRD_ctrl_Radius1; // Lower left control point X
 let eyeRD_ctrl_Y1 = eyeRStart_Y + sin(eyeRD_ctrl_angle1) * eyeRD_ctrl_Radius1; // Lower left control point Y
 let eyeRD_ctrl_X2 = eyeRD_ed_X + cos(eyeRD_ctrl_angle2) * eyeRD_ctrl_Radius2; // Bottom left control point X
 let eyeRD_ctrl_Y2 = eyeRD_ed_Y + sin(eyeRD_ctrl_angle2) * eyeRD_ctrl_Radius2; // Bottom left control point Y
 let eyeRD_ctrl_X3 = eyeRD_ed_X + cos(eyeRD_ctrl_angle3) * eyeRD_ctrl_Radius2; // Bottom right control point X
 let eyeRD_ctrl_Y3 = eyeRD_ed_Y + sin(eyeRD_ctrl_angle3) * eyeRD_ctrl_Radius2; // Bottom right control point Y
 let eyeRD_ctrl_X4 = eyeREnd_X + cos(eyeRD_ctrl_angle4) * eyeRD_ctrl_Radius1; // Lower right control point X
 let eyeRD_ctrl_Y4 = eyeREnd_Y + sin(eyeRD_ctrl_angle4) * eyeRD_ctrl_Radius1; // Lower right control point Y

 beginShape();
 vertex(eyeRStart_X, eyeRStart_Y);
 bezierVertex(eyeRT_ctrl_X1, eyeRT_ctrl_Y1, eyeRT_ctrl_X2, eyeRT_ctrl_Y2, eyeRT_ed_X, eyeRT_ed_Y);
 bezierVertex(eyeRT_ctrl_X3, eyeRT_ctrl_Y3, eyeRT_ctrl_X4, eyeRT_ctrl_Y4, eyeREnd_X, eyeREnd_Y);
 bezierVertex(eyeRD_ctrl_X4, eyeRD_ctrl_Y4, eyeRD_ctrl_X3, eyeRD_ctrl_Y3, eyeRD_ed_X, eyeRD_ed_Y);
 bezierVertex(eyeRD_ctrl_X2, eyeRD_ctrl_Y2, eyeRD_ctrl_X1, eyeRD_ctrl_Y1, eyeRStart_X, eyeRStart_Y);
 endShape();

 /////////////////////////////////////////
  // Draw Control lines
  stroke(255,0,0);
  strokeWeight(0.1);
  // Upper bezier control lines
  // line(eyeLStart_X, eyeLStart_Y, eyeLT_ctrl_X1, eyeLT_ctrl_Y1);
  // line(eyeLT_ctrl_X2, eyeLT_ctrl_Y2, eyeLT_ed_X, eyeLT_ed_Y);
  // line(eyeLT_ed_X, eyeLT_ed_Y, eyeLT_ctrl_X3, eyeLT_ctrl_Y3);
  // line(eyeLT_ctrl_X4, eyeLT_ctrl_Y4, eyeLEnd_X, eyeLEnd_Y);
  // line(eyeLEnd_X, eyeLEnd_Y, eyeLD_ctrl_X4, eyeLD_ctrl_Y4);
  // line(eyeLD_ctrl_X3, eyeLD_ctrl_Y3, eyeLD_ed_X, eyeLD_ed_Y);
  // line(eyeLD_ed_X, eyeLD_ed_Y, eyeLD_ctrl_X2, eyeLD_ctrl_Y2);
  // line(eyeLD_ctrl_X1, eyeLD_ctrl_Y1, eyeLStart_X, eyeLStart_Y);

  // line(eyeRStart_X, eyeRStart_Y, eyeRT_ctrl_X1, eyeRT_ctrl_Y1);
  // line(eyeRT_ctrl_X2, eyeRT_ctrl_Y2, eyeRT_ed_X, eyeRT_ed_Y);
  // line(eyeRT_ed_X, eyeRT_ed_Y, eyeRT_ctrl_X3, eyeRT_ctrl_Y3);
  // line(eyeRT_ctrl_X4, eyeRT_ctrl_Y4, eyeREnd_X, eyeREnd_Y);
  // line(eyeREnd_X, eyeREnd_Y, eyeRD_ctrl_X4, eyeRD_ctrl_Y4);
  // line(eyeRD_ctrl_X3, eyeRD_ctrl_Y3, eyeRD_ed_X, eyeRD_ed_Y);
  // line(eyeRD_ed_X, eyeRD_ed_Y, eyeRD_ctrl_X2, eyeRD_ctrl_Y2);
  // line(eyeRD_ctrl_X1, eyeRD_ctrl_Y1, eyeRStart_X, eyeRStart_Y);
}

function nose(nose_width, nose_height, mouth_width, mouth_height){
  // let mouth_width = 1;
  // let mouth_height = 5;
  let noseStart_X = -nose_width;
  let noseStart_Y = 2.5;
  let noseEnd_X = nose_width;
  let noseEnd_Y = 2.5;

  let UN_ed_X = 0;
  let UN_ed_Y = nose_height; // Top nose height
  let LN_ed_X = 0;
  let LN_ed_Y = 3.5; // Bottom nose height
  
  
  // Upper half of face
  // UNL_angle is the angles of upper control lines (above middle line of face)
  // TNL_angle is the angles of top control lines
  UNL_angle = -135;
  TNL_angle = 180;
  let UN_ctrl_Radius1 = nose_width/2; // Upper cheek control handle length
  let UN_ctrl_Radius2 = nose_width; // Top head control handle length
  
  let UN_ctrl_X1 = noseStart_X + cos(UNL_angle) * UN_ctrl_Radius1; // Upper left control point X
  let UN_ctrl_Y1 = noseStart_Y + sin(UNL_angle) * UN_ctrl_Radius1; // Upper left control point Y
  let UN_ctrl_X2 = UN_ed_X + cos(TNL_angle) * UN_ctrl_Radius2; // Top left control point X
  let UN_ctrl_Y2 = UN_ed_Y + sin(TNL_angle) * UN_ctrl_Radius2; // Top left control point Y
  let UN_ctrl_X3 = UN_ed_X + cos(180-TNL_angle) * UN_ctrl_Radius2; // Top right control point X
  let UN_ctrl_Y3 = UN_ed_Y + sin(180-TNL_angle) * UN_ctrl_Radius2; // Top right control point Y
  let UN_ctrl_X4 = noseEnd_X + cos(-180-UNL_angle) * UN_ctrl_Radius1; // Upper right control point X
  let UN_ctrl_Y4 = noseEnd_Y + sin(-180-UNL_angle) * UN_ctrl_Radius1; // Upper right control point Y

  beginShape();
  vertex(noseStart_X, noseStart_Y);
  bezierVertex(UN_ctrl_X1, UN_ctrl_Y1, UN_ctrl_X2, UN_ctrl_Y2, UN_ed_X, UN_ed_Y);
  bezierVertex(UN_ctrl_X3, UN_ctrl_Y3, UN_ctrl_X4, UN_ctrl_Y4, noseEnd_X, noseEnd_Y);
  endShape();


  // Lower half of face
  // cheek_angle is the angles of lower control lines (below middle line of face)
  // jaw_angle is the angles of bottom control lines
  LNL_angle = 0;
  DNL_angle = -90;
  let LN_ctrl_Radius1 = nose_width/2; // Cheek control handle length
  let LN_ctrl_Radius2 = nose_width/2; // Jaw control handle length
  
  let LN_ctrl_X1 = noseStart_X + cos(LNL_angle) * LN_ctrl_Radius1; // Lower left control point X
  let LN_ctrl_Y1 = noseStart_Y + sin(LNL_angle) * LN_ctrl_Radius1; // Lower left control point Y
  let LN_ctrl_X2 = LN_ed_X + cos(DNL_angle) * LN_ctrl_Radius2; // Bottom left control point X
  let LN_ctrl_Y2 = LN_ed_Y + sin(DNL_angle) * LN_ctrl_Radius2; // Bottom left control point Y
  let LN_ctrl_X3 = LN_ed_X + cos(-180-DNL_angle) * LN_ctrl_Radius2; // Bottom right control point X
  let LN_ctrl_Y3 = LN_ed_Y + sin(-180-DNL_angle) * LN_ctrl_Radius2; // Bottom right control point Y
  let LN_ctrl_X4 = noseEnd_X + cos(180-LNL_angle) * LN_ctrl_Radius1; // Lower right control point X
  let LN_ctrl_Y4 = noseEnd_Y + sin(180-LNL_angle) * LN_ctrl_Radius1; // Lower right control point Y

  beginShape();
  vertex(noseStart_X, noseStart_Y);
  bezierVertex(LN_ctrl_X1, LN_ctrl_Y1, LN_ctrl_X2, LN_ctrl_Y2, LN_ed_X, LN_ed_Y);
  bezierVertex(LN_ctrl_X3, LN_ctrl_Y3, LN_ctrl_X4, LN_ctrl_Y4, noseEnd_X, noseEnd_Y);
  endShape();

  // Draw mouth
  push();
  fill('#F25790');
  beginShape();
  vertex(-mouth_width, LN_ed_Y);
  bezierVertex(-mouth_width, mouth_height, mouth_width, mouth_height, mouth_width, LN_ed_Y);
  endShape();

  // Draw upper lip left
  fill(255);
  beginShape();
  vertex(noseStart_X, noseStart_Y);
  bezierVertex(LN_ctrl_X1, LN_ctrl_Y1, LN_ctrl_X2, LN_ctrl_Y2, LN_ed_X, LN_ed_Y);
  bezierVertex(0, nose_height+2.5, -nose_width-1, nose_height+2.5, -nose_width-1, nose_height+1.5);
  endShape();

  // Draw upper lip right
  beginShape();
  vertex(noseEnd_X, noseEnd_Y);
  bezierVertex(LN_ctrl_X4, LN_ctrl_Y4, LN_ctrl_X3, LN_ctrl_Y3, LN_ed_X, LN_ed_Y);
  bezierVertex(0, nose_height+2.5, nose_width+1, nose_height+2.5, nose_width+1, nose_height+1.5);
  endShape();
  
  pop();
}





///////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////