var car, wall;
var speed, weight;

function setup() 
{
  createCanvas(2000,400);
  
  //setting the speed and weight of the car.  
  speed  = Math.round(random(40,100));
  weight = Math.round(random(500,1500));
  
  //creating the car sprite
  car = createSprite(75,200,100,40);
  
  //creating the wall sprite
  wall = createSprite(1900,200,60,250);
  wall.shapeColor = "white";

  //assigning the velocity to the car. 
  car.velocityX = speed;
  
}

function draw() 
{
  background(color(0,0,0));

  if((wall.x - car.x < (car.width + wall.width)/2))
  {
    //making sure the car collides with wall
    car.collide(wall);
    
    //making sure that the car stops
    car.velocityX = 0;
    
    //creating variable that calculates deformation of car.
    var deformation = Math.round((0.5 * speed * speed * weight)/22500);
    
    //if the deformation is less than 80, the color of the car is green, to represent good deformation.
    if(deformation < 80)
    {
      car.shapeColor = color(0,255,0);
    }

    //if the deformation is greater than 80 AND less than 180. The color of the car is yellow, to represent average deformation.    
    if(deformation > 80 && deformation < 180)
    {
      car.shapeColor = color(230,230,0);
    }

    //if the deformation is greater than 180, the color of the car is red, to represent lethal deformation.    
    if(deformation > 180)
    {
      car.shapeColor = color(255,0,0);
    }

  }
  
  drawSprites();
}
