var car, wall, speed, weight

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  car = createSprite(50,200,50,50)
  wall=createSprite(400,200,60,height/2)
  wall.shapeColor=color (80,80,80)
  car.velocityX= speed;
}

function draw() {
  background(0,0,0);  
  drawSprites();
  detectCollision()
  
}

function detectCollision (){

  var deformation= 0.5*weight*speed*speed/22500
  console.log(deformation)

if (car.isTouching(wall)&& deformation<100){

  car.shapeColor="Green"
  car.velocityX=0;
}

else if(car.isTouching(wall)&& deformation>100 && deformation <180){

  car.shapeColor="yellow"
  car.velocityX=0;

}

else if (car.isTouching(wall)&& deformation>180){

  car.shapeColor="red"
  car.velocityX=0;

}

}