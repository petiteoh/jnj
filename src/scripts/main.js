import Dog from "./dogs";
import ForceField from "./force_field";

class Main {
  constructor(ctx, canvas) {
    this.dogs = [];
    this.ctx = ctx;
    // this.myDogs = [new Dog(this.canvas, this.ctx, 0, 0, 2, 2), new Dog(this.canvas, this.ctx, 0, 0, 2, 2)]
    this.canvas = canvas;
    this.makeDogs(10);
    this.forceField = new ForceField(this.ctx, this.canvas)
    // this.dogs.push(this.forceField);
    debugger
    this.canvas.addEventListener("mousemove", this.mouseMoveHandler.bind(this), false);

  }

  mouseMoveHandler(e) {
    this.forceField.setMousePosition(e)
    // function that will perform the collisiondetection
  }

  // collisionDetection() {
  //   this.dogs.forEach((dog) => {
  //     let dogPos = { posX: dog.posX, posY = dog.posY }
  //     let forceFieldPos = this.forceField.getPosition(this.canvas)
  //     if (this.forceField.getPosition(this.canvas)) {
        
  //     }
  //   });
  //   // with the borders, dogs, then house
  //   // depending on what you collided with, you want to triger another function like dogsMove

  // }

  detectCollisions() {
    let obj1;
    let obj2;

  // Reset collision state of all objects
  for (let i = 0; i < this.dogs.length; i++) {
    this.dogs[i].isColliding = false;
  }

  // Start checking for collisions
  for (let i = 0; i < this.dogs.length; i++) {
    obj1 = this.dogs[i];
    for (let j = i + 1; j < this.dogs.length; j++) {
      obj2 = this.dogs[j];

      // Compare object1 with object2
      if (this.forceIntersect(obj1.x, obj1.y, obj1.radius, obj2.x, obj2.y, obj2.radius)) {
        obj1.isColliding = true;
        obj2.isColliding = true;
        obj1.vx = -obj1.vx;
        obj1.vy = -obj1.vy;
        obj2.vx = -obj2.vx;
        obj2.vy = -obj2.vy;
      }

      
    }
  }
}

  forceIntersect(x1, y1, r1, x2, y2, r2) {

    // Calculate the distance between the two circles
    let squareDistance = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);

    // When the distance is smaller or equal to the sum
    // of the two radius, the circles touch or overlap
    return squareDistance <= ((r1 + r2) * (r1 + r2)) + 5;
  }

  makeDogs(dogCount) {
    for (let i = 0; i < dogCount; i++) {
      //   dogs.push(Dog.randomDog(canvas.width, canvas.height, 10));
      let dog = new Dog(this.canvas, this.ctx, 0, 0, 5 * Math.random(), 5 * Math.random()); //randomi
      this.dogs.push(dog);

      // randomly select 2 to be the target dogs and change their colors
    }
  }

  wallCollision(dog) {
    if (dog.x + dog.vx > this.canvas.width - dog.radius || dog.x + dog.vx < dog.radius) {
      dog.vx = -dog.vx;
    } 
    
    if (dog.y + dog.vy < dog.radius || dog.y + dog.vy > this.canvas.height - dog.radius) {
      dog.vy = -dog.vy;
    }
  }

  game(timeStamp) {
    debugger
    let timeLapsed = (timeStamp - oldTime) / 1000;
    let oldTime = timeStamp;

    this.dogs.forEach((dog) => {
      dog.moveRandom(timeLapsed);
      this.wallCollision(dog);
    });
    
    this.detectCollisions();


    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.dogs.forEach((dog) => {
      dog.draw();
    });
    
    this.forceField.update();

    requestAnimationFrame(this.game.bind(this));
  }

  moveDog() {
    // let dx = Math.random() * 2 - 1;
    // let dy = Math.random() * 2 - 1;

    // this.centerX = Math.abs((this.centerX + dx * this.radius * 0.1) % maxX);
    // this.centerY = Math.abs((this.centerY + dy * this.radius * 0.1) % maxY);
  }

  // start() {
  //   const animateCallback = () => {
  //     // this.moveDogs();
  //     this.render();
  //     requestAnimationFrame(animateCallback);
  //   };

  //   animateCallback();
  // }

  // draw() {
  //   this.render();
  //   // this.moveDog();
  //   // this.start();
  //   // this.forceField.update();

  //   requestAnimationFrame(this.draw.bind(this));
  // }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.dogs.forEach((dog) => {
      // dog.render(this.ctx);
    });

    this.forceField.update();
  }

  run() {
    requestAnimationFrame(this.game.bind(this));
  }
}


export default Main;