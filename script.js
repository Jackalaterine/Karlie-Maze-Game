var bar
var bottom
var topping
var left
var right
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30, wall31, wall32, wall33
var karlieX = 200
var karlieY = 300
var karlieImage
var tRexImage
var rex
var rexing
var rext
var rexy
var rexImage
var rexingImage
var rextImage
var rexyImage
var freeKey1, freeKey2, freeKey3, freeKey4, freeKey5
var freeKeyImage1, freeKeyImage2, freeKeyImage3, freeKeyImage4, freeKeyImage5
var keys;
function setup() {
    tRex = loadImage("Tyrannosaurus_Rex_colored.png")
    karlie = loadImage("Karlie_Kloss.png")
    rexy = loadImage("rexy.png")
    rext = loadImage("rext.png")
    rexing = loadImage("rexing.png")
    rex = loadImage("rex.png")
    freeKey1 = loadImage("Key-PNG-Image.png")
    freeKey2 = loadImage("Key-PNG-Image.png")
    freeKey3 = loadImage("Key-PNG-Image.png")
    freeKey4 = loadImage("Key-PNG-Image.png")
    freeKey5 = loadImage("Key-PNG-Image.png")
    createCanvas(800, 800);
    //border
    bottom = createSprite(400, 800, 800, 10);
    topping = createSprite(400, 0, 800, 10);
    right = createSprite(800, 400, 10, 800);
    left = createSprite(0, 400, 10, 800);
    //maze
    wall1 = createSprite(0, 100, 200, 10);
    wall2 = createSprite(100, 150, 10, 100);
    wall3 = createSprite(250, 200, 300, 10);
    wall4 = createSprite(200, 50, 10, 100);
    wall5 = createSprite(250, 100, 100, 10);
    wall6 = createSprite(300, 50, 10, 100);
    wall7 = createSprite(250, 300, 300, 10);
    wall8 = createSprite(100, 400, 10, 200);
    wall9 = createSprite(200, 400, 10, 200);
    wall10 = createSprite(0, 600, 200, 10);
    wall11 = createSprite(100, 650, 10, 100);
    wall12 = createSprite(0, 700, 200, 10);
    wall13 = createSprite(200, 700, 10, 200);
    wall14 = createSprite(300, 550, 10, 300);
    wall15 = createSprite(350, 700, 100, 10);
    wall16 = createSprite(400, 600, 10, 200);
    wall17 = createSprite(600, 700, 200, 10);
    wall18 = createSprite(700, 600, 10, 200);
    wall19 = createSprite(500, 550, 10, 100);
    wall20 = createSprite(600, 550, 10, 100);
    wall21 = createSprite(650, 500, 100, 10);
    wall22 = createSprite(450, 500, 100, 10);
    wall23 = createSprite(550, 400, 300, 10);
    wall24 = createSprite(400, 350, 10, 100);
    wall25 = createSprite(400, 150, 10, 100);
    wall26 = createSprite(525, 200, 250, 10);
    wall27 = createSprite(500, 50, 10, 100);
    wall28 = createSprite(650, 150, 10, 100);
    wall29 = createSprite(700, 300, 200, 10);
    wall30 = createSprite(650, 600, 100, 10);
    wall31 = createSprite(350, 600, 100, 10);
    wall32 = createSprite(700, 350, 10, 100)
    wall33 = createSprite(600, 350, 10, 100)
        //image
    tRexImage = createSprite(250, 50, 100, 50)
    tRexImage.addImage(tRex)
    rexImage = createSprite(650, 550);
    rexImage.addImage(rex)
    rexingImage = createSprite(650, 350);
    rexingImage.addImage(rexing)
    rextImage = createSprite(360, 650);
    rextImage.addImage(rext)
    rexyImage = createSprite(60, 650);
    rexyImage.addImage(rexy)
    karlieImage = createSprite(50, 50)
    karlieImage.addImage(karlie)
    keys = new Group()
    
    freeKeyImage1 = createSprite(250, 150)
    freeKeyImage1.addImage(freeKey1)
    keys.add(freeKeyImage1)
    freeKeyImage2 = createSprite(350, 550)
    freeKeyImage2.addImage(freeKey2)
        keys.add(freeKeyImage2)
    freeKeyImage3 = createSprite(550, 350)
    freeKeyImage3.addImage(freeKey3)
        keys.add(freeKeyImage3)
    freeKeyImage4 = createSprite(50, 750)
    freeKeyImage4.addImage(freeKey4)
        keys.add(freeKeyImage4)
    freeKeyImage5 = createSprite(650, 650)
    freeKeyImage5.addImage(freeKey5)
        keys.add(freeKeyImage5)
    
    //  karlieImage.collide(freeKeyImage1, disappear(freeKeyImage1))
    // karlieImage.collide(freeKeyImage2, disappear(freeKeyImage2))
    // karlieImage.collide(freeKeyImage3,disappear(freeKeyImage3))
    // karlieImage.collide(freeKeyImage4,disappear(freeKeyImage4))
    // karlieImage.collide(freeKeyImage5,disappear(freeKeyImage5))
}
function draw() {
    background(100);
    
    karlieImage.collide(topping)
    karlieImage.collide(bottom)
    karlieImage.collide(right)
    karlieImage.collide(left)
    karlieImage.collide(wall1)
    karlieImage.collide(wall2)
    karlieImage.collide(wall3)
    karlieImage.collide(wall4)
    karlieImage.collide(wall5)
    karlieImage.collide(wall6)
    karlieImage.collide(wall7)
    karlieImage.collide(wall8)
    karlieImage.collide(wall9)
    karlieImage.collide(wall10)
    karlieImage.collide(wall11)
    karlieImage.collide(wall12)
    karlieImage.collide(wall13)
    karlieImage.collide(wall14)
    karlieImage.collide(wall15)
    karlieImage.collide(wall16)
    karlieImage.collide(wall17)
    karlieImage.collide(wall18)
    karlieImage.collide(wall19)
    karlieImage.collide(wall20)
    karlieImage.collide(wall21)
    karlieImage.collide(wall22)
    karlieImage.collide(wall23)
    karlieImage.collide(wall24)
    karlieImage.collide(wall25)
    karlieImage.collide(wall26)
    karlieImage.collide(wall27)
    karlieImage.collide(wall28)
    karlieImage.collide(wall29)
    karlieImage.collide(wall30)
    karlieImage.collide(wall31)
    karlieImage.collide(wall32)
    karlieImage.collide(wall33)
    karlieImage.collide(keys,disappear)
    // karlieImage.collide(freeKeyImage2,disappear)
    // karlieImage.collide(freeKeyImage3,disappear)
    // karlieImage.collide(freeKeyImage4,disappear)
    // karlieImage.collide(freeKeyImage5,disappear)
    drawSprites();
    if (keyDown(LEFT_ARROW)) {
        console.log("hey");
        karlieImage.setVelocity(-5, 0)
    }
    else if (keyDown(UP_ARROW)) {
        console.log("hey");
        karlieImage.setVelocity(0, -5)
    }
    else if (keyDown(DOWN_ARROW)) {
        console.log("hey");
        karlieImage.setVelocity(0, 5)
    }
    else if (keyDown(RIGHT_ARROW)) {
        console.log("hey");
        karlieImage.setVelocity(5, 0)
    }
    else {
        karlieImage.setVelocity(0, 0)
    }
}
function disappear(karlie,key){
    key.remove()
    // karlie.position.x = karlie.position.x + 10
    console.log("hi")
}