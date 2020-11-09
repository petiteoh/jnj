import Dog from "./dogs";
import ForceField from "./force_field";
import Home from "./home"

class Main {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.dogs = [];
    this.makeDogs(10);
    this.forceField = new ForceField(this.ctx, this.canvas)
    this.home = new Home(this.ctx, this.canvas)
    this.score = 0;
    this.time = 0;
    this.canvas.addEventListener("mousemove", this.mouseMoveHandler.bind(this), false);
  }

  mouseMoveHandler(e) {
    this.forceField.setMousePosition(e)
  }

  intersect(x1, y1, r1, x2, y2, r2) {
    // Calculate the distance between the two circles
    let circDistance = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);

    // When the distance is smaller or equal to the sum
    // of the two radius, the circles touch or overlap
    return circDistance <= ((r1 + r2) * (r1 + r2)) + 5;
  }
  
  wallCollision(newX, newY, dog) {
    const padding = 0;

    if (newX + dog.radius > this.canvas.width - padding || newX < dog.radius + padding) {
      return true;
    } 
  
    if (newY + dog.radius > this.canvas.height - padding || newY < dog.radius + padding) {
      return true;
    }

    return false;
  }
    
  circleRect(dog, rx, ry, rw, rh) {
    let newX = dog.x;
    let newY = dog.y;

    // which edge is closest?
    if (dog.x < rx) { // left edge
      newX = rx;
    } else if (dog.x > rx + rw) { // right edge
      newX = rx + rw;
    }   

    if (dog.y < ry) { // top edge
      newY = ry; 
    } else if (dog.y > ry + rh) { // bottom edge
      newY = ry + rh;   
    }

    // get distance from closest edges
    let distX = dog.x - newX;
    let distY = dog.y - newY;
    let distance = Math.sqrt((distX * distX) + (distY * distY));

    // if the distance is less than the radius, collision!
    if (distance <= dog.radius) {
      if (dog.color === "#803809" && dog.isHome === false) {
        dog.isHome = true;
        this.score++
        return true;
      }
    }

    return false;
  }

  gameCheck() {
    if (this.score === 2) {
      
    }
  }
    // add alert to signify win // separate function to check win
    // change score to timer 
    // modal 


  doorCollision(dog) {
    let hit = this.circleRect(dog, this.home.doorX, this.home.doorY, this.home.doorWidth, this.home.doorHeight)
    
    if (hit) {
      dog.color = "#ffffff"
      console.log("home")
    }
    else {
      // dog.color = "#000000"
      console.log("not home")
    }
    // rect(sx, sy, sw, sh);
  }


  makeDogs(dogCount) {
    for (let i = 0; i < dogCount; i++) {
      if ( i < 2 ) {
        let dog = new Dog(this.canvas, this.ctx, 0, 0, 5 * Math.random(), 5 * Math.random());
        dog.color = "#803809";
        dog.radius = 7;
        this.dogs.push(dog);
      } else {
        let dog = new Dog(this.canvas, this.ctx, 0, 0, 5 * Math.random(), 5 * Math.random());
        this.dogs.push(dog);
      }
    }
  }

  move(e) {
    for (let i = 0; i < this.dogs.length; i++) {
      var xDistance = this.dogs[i].x - this.forceField.mouseX;
      var yDistance = this.dogs[i].y - this.forceField.mouseY;
      var distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);

      if ((this.intersect(this.forceField.mouseX, this.forceField.mouseY, 50, this.dogs[i].x, this.dogs[i].y, this.dogs[i].radius))) {
        let angle = Math.atan2(yDistance, xDistance);
        const newX = this.dogs[i].x + Math.cos(angle) * distance;
        const newY = this.dogs[i].y + Math.sin(angle) * distance;
        if (!this.wallCollision(newX, newY, this.dogs[i])) {
              this.dogs[i].x = newX;
              this.dogs[i].y = newY;
        }
      }
    }
  }

  timer() {
    let timer = setInterval(this.canvas, 1000)
    this.time++
    if (this.score === 2) {
      clearInterval(timer)
    }
  }

  drawTimer() {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "#000000";
    this.ctx.fillText("Time: " + this.time, 8, 20);
  }


  game() {
    this.dogs.forEach((dog) => {
      // dog.moveRandom();
      this.doorCollision(dog);
    });
    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.dogs.forEach((dog) => {
      dog.draw();
    });
    
    this.forceField.update();
    this.home.draw();
    this.drawTimer();
    requestAnimationFrame(this.game.bind(this));
    this.move();
  }

  run() {
    requestAnimationFrame(this.game.bind(this));
  }
}


export default Main;