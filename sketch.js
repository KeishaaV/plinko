var ground, div1, div2, div3;
var particles=[];
var plinkos=[];
var divisions=[];
var divHeight=300;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  ground = new Ground(400,390,800,5);

}

function draw() {
  background("black"); 
  ground.display();
  for (var k=0; k<=800; k+=80){
    divisions.push(new divisions(k, 400-divisionHeight/2, 10, divisionHeight));
  }

  for (var j= 40; j<=800; j+=50){
    plinkos.push(new plinko(j,75));
  }

  for (var j= 15; j<=800; j+=50){
    plinkos.push(new plinko(j,175));
  }

  for (var j=0; j<particles.length; j++){
    particles[j].display();
  }

  for (var k= 0; k<particles.length; k++){
    divisions[k].display();
  }
  /*div1.display();
  div2.display();
  div3.display(); 
  drawSprites();*/
}