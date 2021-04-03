const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground1;
var tray1, tray2;
var polygon
var chain;

var engine, world;   
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16

function preload()
{
	
}

function setup() {

    createCanvas(1500, 700);

    engine = Engine.create();
	world = engine.world;

    ground1 = new ground(width/2,height-20,width,10)
    polygon = new Polygon(100,410,65)
    Chain = new Sling(polygon.body,{x:200,y:200})
    //tray 1
    tray1 = new ground(600,450,350,10)
    //layer 1
    block = new box(495,430,40,40)
    block1 = new box(525,430,40,40)
    block2 = new box(555,430,40,40)
    block3 = new box(585,430,40,40)
    block4 = new box(615,430,40,40)
    block5 = new box(645,430,40,40)
    block6 = new box(675,430,40,40)
    block7 = new box(705,430,40,40)
    //layer 2
    block8 = new box(505,400,40,40)
    block9 = new box(535,400,40,40)
    block10 = new box(565,400,40,40)
    block11 = new box(595,400,40,40)
    block12 = new box(625,400,40,40)
    block13 = new box(655,400,40,40)
    block14 = new box(695,400,40,40)
    //layer 3
    block15 = new box(500,345,40,40)
    block16 = new box(540,345,40,40)
    block17 = new box(580,345,40,40)
    block18 = new box(620,345,40,40)
    block19 = new box(660,345,40,40)
    block20 = new box(700,345,40,40)
    //layer 4
    block21 = new box(520,300,40,40)
    block22 = new box(560,300,40,40)
    block23 = new box(600,300,40,40)
    block24 = new box(640,300,40,40)
    block25 = new box(680,300,40,40)
    //layer 5
    block26 = new box(540,260,40,40)
    block27 = new box(580,260,40,40)
    block28 = new box(620,260,40,40)
    block29 = new box(660,260,40,40)
    //layer 6
    block30 = new box(560,225,40,40)
    block31 = new box(600,225,40,40)
    block32 = new box(640,225,40,40)
    //layer 7
    block33 = new box(600,185,40,40)
    //tray 2
    tray2 = new ground(1215,450,275,10)
    //layer 1
    block34 = new box(1110,430,40,60)
    block35 = new box(1250,430,40,60)
    block36 = new box(1180,430,40,60)
    block37 = new box(1320,430,40,60)
    //layer 2
    block38 = new box(1215,360,300,10)
    //layer 3
    block39 = new box(1215,300,30,40)
    block40 = new box(1215,300,30,40)
    block41 = new box(1215,300,30,40)
    //layer 4
    block42 = new box(1215,295,270,10)
    //layer 5
    block43 = new box(1165,280,40,60)
    block44 = new box(1275,280,40,60)
    //layer 6
    block45 = new box(1220,250,175,10)
    //layer 7
    block46 = new box(1220,230,50,50)



    Engine.run(engine)
}


function draw() {
background(220);
 
text(mouseX + "," + mouseY, mouseX,mouseY)

ground1.display();
//layer-1
block.display();
block1.display();     
block2.display();     
block3.display();     
block4.display();     
block5.display();     
block6.display();     
block7.display();  
block8.display();     
block9.display();     
block10.display();     
block11.display();     
block12.display();     
block13.display();     
block14.display();     
block15.display();     
block16.display();   
block17.display();   
block18.display();   
block19.display();   
block20.display();  
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
block27.display();
block28.display();
block29.display();
block30.display();
block31.display();
block32.display();
block33.display();

//layer-2
block34.display();     
block35.display();     
block36.display(); 
block37.display(); 
block38.display();
block39.display();
block40.display();
block41.display();
block42.display();
block43.display();
block44.display();
block45.display();
block46.display();

tray1.display();
tray2.display();
Chain.display();
polygon.display();
}

function mouseDragged()
{
   Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
   Chain.fly();
}