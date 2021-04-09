    //renaming or referencing
    
    const Engine= Matter.Engine;
    const World=Matter.World;
    const Bodies= Matter.Bodies;
    
    var myEngine, world, ground;

    function setup() {
      createCanvas(400,400);
    
      myEngine= Engine.create();
      world= myEngine.world;

      var options={
        isStatic:true
      }
      
      ground= Bodies.rectangle(200,370,400,30, options);
      World.add(world,ground);

      console.log(ground);
    }

    function draw() {
      background(0); 
      Engine.update(myEngine); 
      rectMode(CENTER);

      rect(ground.position.x, ground.position.y,400,30);

    }