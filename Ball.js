class Ball {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          'restitution':0.5,
          'friction':1,
          'density':1
          
      }
      this.image=loadImage("Superhero-01.png")
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER)
image(this.image,0,0,this.radius,this.radius)
      pop();
    }
  }