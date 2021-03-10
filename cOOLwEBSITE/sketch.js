/*  CURRENT CODE WORKS.  GOAL 1 - PLEASE ALLOW PLAYER CHARACTER'S IMAGE, TO MATCH DIRECTION OF MOTION (LEFT RIGHT)

                         Goal 2 make character selection each with different traits.

                         GOAL 3 CREATE LEVEL 2 WHICH INCLUDES THE ENEMIES FIRING PROJECTILES TOWARDS YOU SLOWLY ENOUGH SO THAT YOU CAN DODGE THEM*/


var canvasWidth = 1024;
var canvasHeight = 600;

var player0 = 0;
/*var player1 = 0;
var player2 = 0;*/
var player0X = 300;
var player0Y = 100;
/*var player1X = 200;
var player1Y = 100;
var player2X = 100;
var player2Y = 100;*/
var sprWidth = 100;
var sprHeight = 100;
var speed = 4;
var fr = 30;

//def. player varibles
var monster0 = 0;

var monster1 = 0;
var monster2 = 0;   



//var ghostImg0;
//var ghostImg1;
//var ghostImg2;
//def. ghost varibles
var projectile = 0;

var direction = 90;

var score = 0;

//var enemy;




var monster0X = random(canvasWidth);
    var monster0Y = 0;
    var monster1X = 0;
    var monster1Y = 0;
    var monster2X = 0;
    var monster2Y = 0;
//def. monster varibles
    var ghost0 = 0;
    var ghost0X = 0;
    var ghost0Y = 0;
    var ghost1 = 0;
    var ghost1X = 0;
    var ghost1Y = 0;
    var ghost2 = 0;
    var ghost2X = 0;
    var ghost2Y = 0;


//var playerImg3;*/

function preload() {
    bgImg = loadImage("images/Backround 1.png");
    playerImg0 = loadImage("images/machine Gunner.png");//gameplan used load sprite sheet
    playerImg0_2 = loadImage("images/machine Gunner 2.png");
    //playerImg1 = loadImage("images/rifle man.png");
    //playerImg2 = loadImage("images/sniper.png");
    //player controlled character image is getting loaded
    monsterImg0 = loadImage("images/enemy machine Gunner.png");
    monsterImg1 = loadImage("images/rifle man.png");
    monsterImg2 = loadImage("images/sniper.png");
    //monster getting loaded
    projectileImg = loadImage("images/bullet.png");
    //projectile images loading
    ghostImg0 = loadImage("images/rifle man.png");
    ghostImg1 = loadImage("images/sniper.png");
    ghostImg2 = loadImage("images/machine Gunner.png");
    //Ghost images*/
}
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    player0 = createSprite(player0X, player0Y, sprWidth, sprHeight);
    player0.addImage(playerImg0);
    //player1 = createSprite(player1X, player1Y, sprWidth, sprHeight);
    //player1.addImage(playerImg1, "image/rifle man.png");
    //player2 = createSprite(player2X, player2Y, sprWidth, sprHeight);   
    //player2.addImage(playerImg2, "image/sniper.png");
    //creating player controlled character spirtes
    monster0X = random(canvasWidth);
    monster0Y = random(canvasHeight);
    monster1X = random(canvasWidth);
    monster1Y = random(canvasHeight);
    monster2X = random(canvasWidth);
    monster2Y = random(canvasHeight);
//def. monster varibles
   
    ghost0X = random(canvasWidth);
    ghost0Y = random(canvasHeight);
   
    ghost1X = random(canvasWidth);
    ghost1Y = random(canvasHeight);
    
    ghost2X = random(canvasWidth);
    ghost2Y = random(canvasHeight);
    
    monster0 = createSprite(monster0X, monster0Y, sprWidth,sprHeight);
    monster0.addImage(monsterImg0, monsterImg0);
    monster1 = createSprite(monster1X, monster1Y, sprWidth,sprHeight);
    monster1.addImage(monsterImg1);
    monster2 = createSprite(monster2X, monster2Y, sprWidth, sprHeight);
    monster2.addImage(monsterImg2);
    //creating monster spirtes
    ghost0 = createSprite(ghost0X, ghost0Y, sprWidth, sprHeight);
    ghost0.addImage(ghostImg0);
    ghost1 = createSprite(ghost1X, ghost1Y, sprWidth, sprHeight);
    ghost1.addImage(ghostImg1);
    ghost2 = createSprite(ghost2X, ghost2Y, sprWidth, sprHeight);
    ghost2.addImage(ghostImg2);
    projectile = new Group();
    //creating ghost spirtes
    enemy = new Group();
    enemy.add(monster0);
    enemy.add(monster1);
    enemy.add(monster2);
    //makeing enemy monster group
    enemy.add(ghost0);
    enemy.add(ghost1);
    enemy.add(ghost2);
    //making enemy ghost group*/
    
    player0.setCollider("rectangle", 0, 0, 40, 40 );
    //player1.setCollider("rectangle", 0, 0, 40, 40 );
    //player2.setCollider("rectangle", 0, 0, 40, 40 );
    //making player controlled chacter colliders
    monster0.setCollider("rectangle", 0 , 0, 40, 40);
    monster1.setCollider("rectangle", 0 , 0, 40, 40);
    monster2.setCollider("rectangle", 0 , 0, 40, 40);
    //making monster colliders
    ghost0.setCollider("rectangle", 0, 0, 40, 40); 
    ghost1.setCollider("rectangle", 0, 0, 40, 40);
    ghost2.setCollider("rectangle", 0, 0, 40, 40);
    //making colliders for ghosts
    
      //frameRate(fr);
    /*
    for (var i = 0; i < 8; i++) {
        var ang = random(360);
        var px = canvasWidth/2 + 10000 * ang;
        var py = canvasHeight/2 + 10000 * ang;
        createEnemy(px,py);
        //making enemy x, y
    }*/
}

function playerControls() {
        
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        player0.position.x+= speed;
         playerImg0 = loadImage("images/machine Gunner 2.png");
    if (player0.position.x + sprWidth/2 > canvasWidth) {
        player0.position.x = canvasWidth - sprWidth/2;
     }
    } else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
     player0.position.x-= speed;
         playerImg0 = loadImage("images/machine Gunner.png");
     if (player0.position.x < 0 + sprWidth/2) {
         player0.position.x = 0 + sprWidth/2;
         //WASD and arrow keys
     }
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
     player0.position.y+= speed;
     if (player0.position.y + sprHeight/2 >  canvasHeight){
         player0.position.y = canvasHeight - sprHeight/2;
         //WASD and arrow keys
     }
     
    } else if (keyIsDown(UP_ARROW) || keyIsDown (87)) {
     player0.position.y-= speed;
     if (player0.position.y < 0 + sprHeight/2){
         player0.position.y = 0 + sprHeight/2;
         //WASD and arrow keys
        }
    }
}

function enemyMovements() {
    direction += 2;
    monster0.setSpeed(3, direction);
    monster1.setSpeed(3, direction);
    monster2.setSpeed(3, direction);
    //monster speed
}
function collisions() {
  enemy.overlap(projectile, destroyOther);
  player0.collide(enemy, gameOver);
    
  //projectile collisions function
}


function destroyOther (destroyed) {
    destroyed.remove();
    projectile.remove();
    score++;
    // projectile destroying function.
}

function gameOver() {
    alert("GAME OVER. Final Score: " + score);
    window.location.reload();
    clearInterval(interval);
    //gameover function
}

function mousePressed()  {
    projectile = createSprite(player0.position.x, player0.position.y);
    projectile.addImage(projectileImg);
    projectile.attractionPoint(10+speed, mouseX, mouseY);
    projectile.setCollider("rectangle", 0, 0, 40, 40);
    //shoting projectile function
}     


function createEnemy(x,y) {
 var newEnemy = createSprite(x,y);
 var attackImg = loadImage("images/enemy rifle men.png");
 newEnemy.addImage(attackImg);
 newEnemy.setSpeed(2.5, random(360));
 newEnemy.setCollider("rectangle", 0, 0, 40, 40);
 enemy.add(newEnemy);
 //creating enemys
 
}

function draw() {
   background(bgImg); 
    drawSprites();  //this command actually draws the images of the players on the screen DO NOT DELETE #DONOTDELETE
   playerControls();
   collisions();
   enemyMovements();
   ghost0.attractionPoint(0.2, player0.position.x, player0.position.y);
   ghost0.maxSpeed = 4;
   ghost1.attractionPoint(0.2, player0.position.x, player0.position.y);
   ghost1.maxSpeed = 4;
   ghost2.attractionPoint(0.2, player0.position.x, player0.position.y);
   ghost2.maxSpeed = 4;
    
   for(var i=0; i<enemy.length; i++) {
   var s = enemy[i];
   if(s.position.x<-40) s.position.x = canvasWidth+40;
   if(s.position.x>canvasWidth+40) s.position.x = -40;
   if(s.position.y<-40) s.position.y = canvasHeight+40;
   if(s.position.y>canvasHeight+40) s.position.y= -40;
   //draw functions
   }
    
   
    
    if(score >= 6) {
       alert("You Win! Final Score:" + score);
      score = 0;
       window.location.reload();
       clearInterval(interval);
        //win function
    }
}

setInterval(draw, 10);