var garden,rabbit;
var gardenImg,rabbitImg;
var Apple,Leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  AppleImg = loadImage("apple.png");
  LeafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  rabbit.x=mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
  var select_sprites=Math.round(random(1,3))
  if(frameCount % 80 == 0){
    if(select_sprites == 1){
      createApple();
      
    }
    else {
      createLeaf();
    }
  }
}

function createApple(){
  Apple = createSprite(random(50,350),40,10,10)
  Apple.addImage(AppleImg);
  Apple.velocityY= +6
  Apple.scale = 0.08
  Apple.lifetime=150
}

function createLeaf(){
  Leaf = createSprite(random(50,350),40,10,10)
  Leaf.addImage(LeafImg)
  Leaf.velocityY= +6
  Leaf.scale = 0.08
  Leaf.lifetime=150
}