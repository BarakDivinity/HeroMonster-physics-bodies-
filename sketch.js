var bg,engine,world;
var hero,invisiblerope,invisiblerope2,Block1,Block2,Block3,Block4,Block5,Block6,ground,monster;
var gameState="onSling";

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

function preload() {
  bg=loadImage("Images/background.jpg")
 
  engine=Engine.create();
  world=engine.world;
  
}

function setup() {
  createCanvas(1350,660);
  // create sprites here

  hero=new Hero(100,250,300);
  monster=new Monster(800,100,20,29);

  invisiblerope=new Fly(hero.body,{x:200,y:200})
  invisiblerope2=new Fly(monster.body,{x:1000,y:100})

  ground=new Ground(700,500,500,15);

  Block1=new Block(600,450,50,50,PI/6);
  Block2=new Block(650,450,50,50,PI/6);
  Block3=new Block(700,450,50,50,PI/6);
  Block4=new Block(620,300,50,50,PI/6);
  Block5=new Block(675,300,50,50,PI/6);
  Block6=new Block(645,100,50,50,PI/6);

 
}

function draw() {
  background(bg);

  Engine.update(engine);

  hero.display();
  monster.display();
  invisiblerope.display();
  invisiblerope2.display();
  ground.display();

  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  Block6.display();

}

function mouseDragged(){
  if(gameState!="launched"){
  Body.setPosition(hero.body,{x:mouseX,y:mouseY});
  }
}

function mouseReleased(){
  invisiblerope.fly(hero.body);
  gameState="launched"
}