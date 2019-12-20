function setup() {
createCanvas(640, 360);
}
function draw () {
background ('maroon');
//head
fill ('tan');
ellipse (320,175,180,186);
//eyes
fill ('white');
ellipse (275,170,35,25);
ellipse (355,170,35,25);
fill ('black');
    ellipse (275,170,10);
    ellipse (355,170,10);
  //glasses
 strokeWeight(4);
  noFill();
  rect(mouseX,mouseY,60,50,20);
  line(mouseX+40,mouseY,mouseX+60,mouseY);
  rect(mouseX+90,mouseY,60,50,20);
  //Glasses change color as they move
  stroke(mouseX/2,mouseY/2, mouseX/2);
 
 

//nose
fill ('black')
arc(315,195, 16, 10, 2, PI + QUARTER_PI, OPEN);
//mouth
stroke ('black');
fill ('black');
arc(315, 227, 15, 10, 40, PI + QUARTER_PI, OPEN);

//hat
fill ('red');
arc(315, 82, 82, 82, 82, 2.8, PI + QUARTER_PI, CHORD);
fill('red');
arc(315,97,99,99,97.4,6.3,);


//body    	
    fill ('red');
rect (275,268,85,100);
    fill('gray');
rect (310,268,15,100);

  //mustache
  fill('black')
  arc(315, 200, 82, 82, 82, 2.8,);
 


   
}