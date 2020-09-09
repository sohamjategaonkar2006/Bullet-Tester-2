var bullet,wall;
var speed,weight,thickness;
var damage;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52 )
  thickness=random(22,83);  
  bullet=createSprite(50,200,50,20)
  wall=createSprite(1200,200,thickness,height/2)
  bullet.velocityX=speed;
  bullet.shapeColor=color(0,0,0 )
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness) ;
  //console.log(damage);

}
function draw() {
  background(255,255,255);  
  drawSprites();
  isTsouching();
  
}

function isTsouching() {
  if (bullet.x - wall.x < wall.width/2 + bullet.width/2 && wall.x - bullet.x < wall.width/2 + bullet.width/2 && bullet.y - wall.y < wall.height/2 + wall.height/2 && wall.y -bullet.y < wall.height/2 + bullet.height/2){
    bullet.velocityX=0;
    bullet.x=1200+5-thickness;
    if (damage>10){
      bullet.shapeColor=color(255,0,0);
    }
    if (damage<10){
      bullet .shapeColor=color(0,255,0);
}
console.log(damage);  
}
}