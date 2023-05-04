/*
 * This editor shows the possible faces that can be created
 */

const canvasWidth = 960;
const canvasHeight = 500;
const bg_color = ['#FFE3CC'];
let slider1, slider2, slider3, slider4, slider5;
let slider6, slider7, slider8, slider9, slider10;
let slider11, slider12;
let faceSelector;
let faceGuideCheckbox;

function setup() {

    // create the drawing canvas, save the canvas element
    let main_canvas = createCanvas(canvasWidth, canvasHeight);
    main_canvas.parent('canvasContainer');

    // create sliders
    slider1 = createSlider(0, 100, 50);
    slider2 = createSlider(0, 100, 50);
    slider3 = createSlider(0, 100, 50);
    slider4 = createSlider(0, 100, 50);
    slider5 = createSlider(0, 100, 50);
    slider6 = createSlider(0, 100, 0);
    slider7 = createSlider(0, 100, 50);
    slider8 = createSlider(0, 100, 50);
    slider9 = createSlider(0, 100, 50);
    slider10 = createSlider(0, 100, 50);
    slider11 = createSlider(0, 100, 50);
    slider12 = createSlider(0, 100, 0);

    slider1.parent('slider1Container');
    slider2.parent('slider2Container');
    slider3.parent('slider3Container');
    slider4.parent('slider4Container');
    slider5.parent('slider5Container');
    slider6.parent('slider6Container');
    slider7.parent('slider7Container');
    slider8.parent('slider8Container');
    slider9.parent('slider9Container');
    slider10.parent('slider10Container');
    slider11.parent('slider11Container');
    slider12.parent('slider12Container');

    faceGuideCheckbox = createCheckbox('', true);
    faceGuideCheckbox.parent('checkbox1Container');

    faceSelector = createSelect();
    faceSelector.option('1');
    faceSelector.option('2')
    faceSelector.value('1');
    faceSelector.parent('selector1Container');
}

function draw() {
    strokeWeight(0.2);

    let mode = faceSelector.value();

    background(bg_color);

    let s1 = slider1.value();
    let s2 = slider2.value();
    let s3 = slider3.value();
    let s4 = slider4.value();
    let s5 = slider5.value();
    let s6 = slider6.value();
    let s7 = slider7.value();
    let s8 = slider8.value();
    let s9 = slider9.value();
    let s10 = slider10.value();
    let s11 = slider11.value();
    let s12 = slider12.value();

    let show_face_guide = faceGuideCheckbox.checked();

    // use same size / y_pos for all faces
    let face_size = canvasWidth / 5;
    let face_scale = face_size / 10;
    let face_y = height / 2;
    let face_x = width / 2;

    push();
    translate(face_x, face_y);
    scale(face_scale);

    push();

    if (mode == '1') {
        let topHead_angle = map(s1, 0, 100, 175, 200);
        let upperCheek_angle = map(s2, 0, 100, -30, -70);
        let MF_width = map(s3, 0, 100, 5.5, 6.8);
        let cheek_angle = map(s4, 0, 100, -5, 35);
        let jaw_angle = map(s5, 0, 100, -10, 30);
        let earType = int(map(s6, 0, 100, 1, 3.9));
        let eye_width = map(s7, 0, 100, 3, 4.5);
        let nose_width = map(s8, 0, 100, 0.5, 1.7);
        let nose_height = map(s9, 0, 100, 1, 2.2);
        let mouth_width = map(s10, 0, 100, 0.5, 1.4);
        let mouth_height = map(s11, 0, 100, 4, 7);
        let colorValue = int(map(s12, 0, 100, 0, 3));

        myFace(
            topHead_angle,
            upperCheek_angle,
            MF_width,
            cheek_angle,
            jaw_angle,
            earType,
            eye_width,
            nose_width,
            nose_height,
            mouth_width,
            mouth_height,
            colorValue
        );
    }

    if (mode == '2') {
        // draw face using values mapped from 3 sliders
        let tilt_value = map(s1, 0, 100, -90, 90);
        let mouth_value = map(s2, 0, 100, 0.5, 10);
        let eye_value = int(map(s3, 0, 100, 1, 3));
        orangeAlienFace(tilt_value, eye_value, mouth_value);
    }

    pop();

    
    push();
    if (show_face_guide) {
        strokeWeight(0.1);
        rectMode(CORNER);
        noFill()
        stroke(0, 0, 255);
        rect(-10, -10, 20, 20);
        line(0, -11, 0, -10);
        line(0, 10, 0, 11);
        line(-11, 0, -10, 0);
        line(11, 0, 10, 0);
    }
    pop();

    pop();

    // Show mouse coordinate within face guide
    push();
    strokeWeight(2);
    stroke(255);
    let mX = int(map(mouseX - 480, -480, 480, -25, 25));
    let mY = int(map(mouseY - 250, -250, 250, -13, 13));

    fill(0);
    text("Mouse X: " + mX + ", Mouse Y: " + mY, 410, 20);
    pop();

}

function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    } else if (key == '@') {
        saveBlocksImages(true);
    }
}
