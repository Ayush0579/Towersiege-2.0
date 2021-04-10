class Ball{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.x = x;
        this.y = y;

        this.body = Bodies.circle(x, y, 20, options);
        World.add(world, this.body);
        
        this.image = loadImage("polygon.png");
      }
      display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      }
}