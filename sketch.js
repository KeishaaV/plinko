var ground, div1, div2, div3;
var divisionHeight= 100
var particles=[];
var plinkos=[];
var divisions=[];
var divHeight=300;
var rand; 
const Bodies= Matter.Bodies;
const Engine= Matter.Engine;
const World= Matter.World;

function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world= engine.world;
  ground = new Ground(400,390,800,5);
  for (var k=0; k<=800; k+=80){
    divisions.push(new Division(k, 400-divisionHeight/2, 10, divisionHeight));
  }
  console.log(divisions);
  for (var j= 40; j<=800; j+=50){
    for (var k=75; k<=275; k+=50){
    plinkos.push(new plinko(j,k,20,20));
    }
  }
  /*for (var j= 15; j<=800; j+=50){
    plinkos.push(new plinko(j,175));
  }*/
}

function draw() {
  background("black"); 
  ground.display();

  Engine.update(engine);

  for (var m=0; m<particles.length; m++){
    rand= Math.round(random(0,800))
    particles.push(new particle(m,rand,10,10));
  }

  for (var n=0; n<particles.length; n++){
    particles[n].display();
  }

  for (var j=0; j<plinkos.length; j++){
    plinkos[j].display();

  }

  for (var k= 0; k<divisions.length; k++){
    divisions[k].display();
  }
  /*div1.display();
  div2.display();
  div3.display(); 
  drawSprites();*/
}