class Paper {
    constructor(x,y,radius) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      
      this.x=x;
      this.y=y;
      this.radius= 70;
      this.body =Bodies.circle(x, y, 70,options);
      this.image=loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push ();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("silver");
      ellipse(0,0,70,70);
      pop ();
    }
  };