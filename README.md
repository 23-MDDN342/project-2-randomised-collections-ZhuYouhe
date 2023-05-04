[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/TMOxyln0)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10649389&assignment_repo_type=AssignmentRepo)
## 2023 MDDN342 Assignment 2: Randomised Collections
**This is where you talk about your project!**

>For this project, I was required to draw some random faces. I started thinking of simple square-shaped faces based on some previous examples, but I ended up not doing that as I saw some panda videos and decided to draw panda face using Bezier curves.
Using Bezier curves to draw shaped really gives me more possibilities, with these variables I can tweak all the elements of the face to make it appears in random variations.

Most random bounds are for aesthetic purpose, as well as to prevent the shapes exceed the guide lines.
Variables list:

+++(continuous variables)+++

--topHead_angle = random(170, 210)
    This is the curve of forehead

--upperCheek_angle = random(-30, -70)
    This is the width of upper head

--MF_width = random(5.5, 6.8)
    This is the main shape/size of the face
 
--cheek_angle = random(-5, 35)
    This is the curve of cheek

--jaw_angle = random(-10, 30)
    This is the curve of jaw

--eye_width = random(3, 4.5)
    This is the shape/size of eyes

--nose_width = random(0.5, 1.7)
    This is the width of nose & upper lip

--nose_height = random(1, 2.2)
    This is the height of nose & upper lip

--mouth_width = random(0.5, 1.4)
    This is the width of lower lip

--mouth_height = random(4, 7)
    This is the height of lower lip


+++(discrete variables)+++

--earType = int(random(1, 3.9))
    This for switching 3 types of ears

--circleColor[colorValue]
    This for changing fur colors and circle background colors, picking up elements from color arrays

--arcRadius = int(random(w / 18, w / 12))
    This is only in the arrangement code for changing the random size of the faces