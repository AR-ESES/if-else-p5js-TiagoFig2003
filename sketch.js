
function setup(){
    createCanvas(windowWidth, windowHeight);;
    background(0);
  }
  
  function draw(){
    background(0);
    stroke(255);
    strokeWeight(3);
  
    if(mouseX<width/2) {
      if(mouseY<height/2){
        fill(255,0,0);
      }
      else{
        fill(0,0,255);
      }
    }
    
    else {
      if(mouseY<height/2){
        fill(21,255,83);
      }
      else{
        fill(255,131,0);
      }
    }
    circle(width/2,height/2,height/4);
    
  }
  