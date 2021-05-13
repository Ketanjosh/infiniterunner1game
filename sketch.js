
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var PLAY=1
var END=0
var gameState=PLAY
var man;
var obstacle, obstacleImage;
var obstaclesGroup;

var ground;
var land;
function preload() {

  landImage = loadImage("football.jpg");
manImage = loadImage("running.jpg");
  obstacleImage = loadImage("zombie.png");

}
function setup() {

  createCanvas(600,600);
  land = createSprite(500,200,600,600);
  land.addImage(landImage)
  land.velocityX = -1;
    console.log(land.x)
  man = createSprite(80, 315, 20, 20);
  man.addImage(manImage)
  man.scale = 0.1


  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x)

  obstaclesGroup = createGroup();

  

}


function draw() {
   


  drawSprites();
 
  man.collide(ground);
 

  if(gameState===PLAY){    
    

 

  if (ground.x < 0) {
    ground.x = ground.width / 2;
    
      
  }

   if (land.x < 0){
      land.x = land.width/2;
    }


  if (obstaclesGroup.isTouching(man)) {
    man.destroy();
    
    gameState = END;
    land.velocityX = 0;
    
       obstaclesGroup.setLifetimeEach(-1);
  
   obstaclesGroup.setLifetimeEach(0);

   
  }




  if (keyDown("space") && man.y >= 100) {
    man.velocityY = -10;

  }


  man.velocityY = man.velocityY + 0.8

  spawnobstacles();


 
  }
  if(gameState===END){
    obstaclesGroup.setVelocityXEach(0);
    ground.velocityX=0

  }
  drawSprites();
}

function reset() {

  obstaclesGroup.destroyEach();
}



function spawnobstacles() {
  if (frameCount % 70 === 0) {
    obstacle = createSprite(590, 326, 10, 10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.07;
    obstacle.velocityX = -3;
    obstacle.depth = man.depth;
    man.depth = man.dept1 + 6;
    obstaclesGroup.add(obstacle);
    
  }
}
 

 

