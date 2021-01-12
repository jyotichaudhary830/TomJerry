var garden, gardenImage;
var tom, tomImage1, tomImage2, tomImage3, tomImage4;
var jerry, jerryImage1, jerryImage2, jerryImage3, jerryImage4;


function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png");

    jerryImage1 = loadImage("images/jerryOne.png");
    jerryImage2 = loadImage("images/jerryTwo.png", "images/jerryThree.png");
    jerryImage3 = loadImage("images/jerryFour.png");

    tomImage1 = loadImage("images/tomOne.png");
    tomImage2 = loadImage("images/tomTwo.png", "images/tomThree.png");
    tomImage3 = loadImage("images/tomFour.png");

    
}

function setup(){
    createCanvas(1000,900);
    //create the garden
    garden = createSprite(400,100);
    garden.addImage(gardenImage);
    garden.scale = 1.5;

    //create the tom
    tom = createSprite(900,250);
    tom.addImage(tomImage1);
    tom.scale = 0.1;

    //create the jerry
    jerry = createSprite(300,450);
    jerry.addImage(jerryImage1);
    jerry.scale = 0.2;

}

function draw() {

    background(255);

    
    if(keyDown(LEFT_ARROW)) {
        tom.velocityX = -2;
        tom.velocityY = 0;
        tom.addImage(tomImage2);
        tom.changeImage(tomImage2);
    }
    
    if(keyDown(RIGHT_ARROW)) {
        tom.velocityX = 2;
        tom.velocityY = 0;
        tom.addImage(tomImage2);
        tom.changeImage(tomImage2);
    }

    if(keyDown(UP_ARROW)) {
        tom.velocityX = 0;
        tom.velocityY = -2;
        tom.addImage(tomImage2);
        tom.changeImage(tomImage2);
    }

    if(keyDown(DOWN_ARROW)) {
        tom.velocityX = 0;
        tom.velocityY = 2;
        tom.addImage(tomImage2);
        tom.changeImage(tomImage2);
    }

    if((tom.x-jerry.x<jerry.width/2 + tom.width/2)
      && (jerry.x-tom.x<jerry.width/2 + tom.width/2)
      && (tom.y-jerry.y<jerry.height/2 + tom.height/2)
      && (jerry.y-tom.y<jerry.height/2 + tom.height/2))
  {
      tom.changeImage(tomImage3);
      jerry.changeImage(jerryImage3);
  }

    drawSprites();
}


function keyPressed(){




}
