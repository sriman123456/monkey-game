
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var ground;
var foodGroup;
var obstacleGroup;
var score;
var SurvivalTime=0;
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  
  //To loadImages 
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
}

function setup() {
  createCanvas(500,500);

  //To create the sprites
  monkey = createSprite(50,420,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1; 
  
  ground = createSprite(50,450,900,10);
  
}

score=0;

function draw() {
  background(500);
  
  //To create groups
  foodsGroup = createGroup();
  obstaclesGroup = createGroup();
  
  //To make the ground reset
  if (ground.x < 0){
      ground.x = ground.width/2;
      ground.velocityX=-4;
  }
  
  //console.log(ground.x);
  //when space is pressed monkey should jump
   if(keyDown("space")&& monkey.y >= 380) {
        monkey.velocityY = -12;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
  
  //To call the functions food and obstacles 
  food();
  obstacle();
  
  //To make monkey collide with ground
  monkey.collide(ground);
  
  //To make score display 
  
  stroke("black");
  textSize(20);
  fill("black");
  score=Math.ceil(frameCount/frameRate());
  text("score : "+score,100,75);

  //To make survivalTime display
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime : "+SurvivalTime,100,50);
  
  //To display the sprites
  drawSprites();
}

function food(){
  //To make bananas come in random y position
  if (frameCount % 80 === 0){
    banana = createSprite(500,350,10,40);
    banana.addImage("banana",bananaImage); 
    banana.scale = .06;
    banana.velocityX = -6;
    banana.lifetime = 83;  
    foodsGroup.add(banana);
  }
}

function obstacle(){
  //To make obsyacles come in random y position
  if (frameCount % 150 === 0){
    stone = createSprite(500,435,30,30);
    stone.addImage("obstacle",obstacleImage);
    stone.scale = 0.1;
    stone.velocityX = -6;
    stone.lifetime = 90;
    obstaclesGroup.add(stone);
  }
}