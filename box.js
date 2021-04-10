class Box{
  constructor(x, y){
    this.body = Bodies.rectangle(x,y,30,30);
    World.add(world, this.body);
    this.image = loadImage("box.png");
    this.Visiblity = 255;
  }

 display(){
   if(this.body.speed < 3){
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
   }else{
    World.remove(world, this.body);
    push();
    this.Visiblity = this.Visiblity - 5;
    tint(255,this.Visiblity);
    imageMode(CENTER);
    image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
    pop();
   }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -6){
      score++;
    }
  }
};