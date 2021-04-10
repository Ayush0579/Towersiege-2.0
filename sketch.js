const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tries = 3;
var blocks = [];
var score = 0;

function preload() {
}

function setup() {
    canvas = createCanvas(1500,700);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(750,685,1500,50);
    border1 = new Ground(-25, 350, 50, 700);
    border2 = new Ground(750, -25, 1500, 50);
    border3 = new Ground(1525, 350, 50, 700);
    platform1 = new Ground(550,500,200,20);
    platform2 = new Ground(1250,300,200,20);

    ball = new Ball(200,500);
    ballSling = new slinger(ball.body, {x: 200, y: 500});

    block1A = new Box(565,470,30,30);
    block2A = new Box(535,470,30,30);
    block3A = new Box(595,470,30,30);
    block4A = new Box(505,470,30,30);
    block5A = new Box(625,470,30,30);
    block6A = new Box(475,470,30,30);
    blocks.push(block1A,block2A,block3A,block4A,block5A,block6A);

    block7A = new Box(550,440,30,30);
    block8A = new Box(520,440,30,30);
    block9A = new Box(580,440,30,30);
    block10A = new Box(490,440,30,30);
    block11A = new Box(610,440,30,30);
    blocks.push(block7A,block8A,block9A,block10A,block11A);

    block12A = new Box(565,410,30,30);
    block13A = new Box(535,410,30,30);
    block14A = new Box(595,410,30,30);
    block15A = new Box(505,410,30,30);
    blocks.push(block12A,block13A,block14A,block15A);

    block16A = new Box(550,380,30,30);
    block17A = new Box(520,380,30,30);
    block18A = new Box(580,380,30,30);
    blocks.push(block16A,block17A,block18A);

    block19A = new Box(565,350,30,30);
    block20A = new Box(535,350,30,30);
    blocks.push(block19A,block20A);

    block21A = new Box(550,320,30,30);
    blocks.push(block21A);

    block1B = new Box(1250,270,30,30);
    block2B = new Box(1220,270,30,30);
    block3B = new Box(1280,270,30,30);
    block4B = new Box(1190,270,30,30);
    block5B = new Box(1310,270,30,30);
    blocks.push(block1B,block2B,block3B,block4B,block5B);

    block6B = new Box(1235,240,30,30);
    block7B = new Box(1265,240,30,30);
    block8B = new Box(1205,240,30,30);
    block9B = new Box(1295,240,30,30);
    blocks.push(block6B,block7B,block8B,block9B);

    block10B = new Box(1250,210,30,30);
    block11B = new Box(1220,210,30,30);
    block12B = new Box(1280,210,30,30);
    blocks.push(block10B,block11B,block12B);

    block13B = new Box(1235,180,30,30);
    block14B = new Box(1265,180,30,30);
    blocks.push(block13B,block14B);
    
    block15B = new Box(1250,150,30,30);
    blocks.push(block15B);

    Engine.run(engine);
}

function draw() {
    rectMode(CENTER);
    background(51,132,220);

    ground.display();
    platform1.display();
    platform2.display();

    ball.display(200,500);
    ballSling.display(ball.body, {x: 200, y: 500});

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].display();
        blocks[i].score();
    }

    fill("black");
    textSize(35);
    text("Tries left: " + tries,100,50);
    text("Score: " + score,1300,50);
}

function keyPressed(){
    if(keyCode === 32){
        ballSling.attach(ball.body);
    }
}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX, y:mouseY});
}

function mouseReleased(){
    if(tries > 0){
        ballSling.fly();
        tries = tries-1;
    }
}