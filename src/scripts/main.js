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

  // doorCollision(dog) {
  //   if (dog.x + dog.vx > this.home.doorWidth - dog.radius && dog.x + dog.vx < dog.radius) {
  //     dog.vx = -dog.vx;
  //     this.score++
  //     // dog.x = 0
  //     // dog.y = 0
  //     return true;
  //   } 
  
  //   if (dog.y + dog.vy < dog.radius && dog.y + dog.vy > this.home.doorHeight - dog.radius) {
    //     dog.radius = 20;
    //     this.score++
    //     // dog.x = 0
    //     // dog.y = 0
    //     return true;
    //   }
    
    //   return false;
    // }
    
    circleRect(cx, cy, r, rx, ry, rw, rh, dog) {
      let newX = cx;
      let newY = cy;
  
      // which edge is closest?
      if (cx < rx) { // left edge
        newX = rx;
      } else if (cx > rx + rw) { // right edge
        newX = rx + rw;
      }   

      if (cy < ry) { // top edge
        newY = ry; 
      } else if (cy > ry + rh) { // bottom edge
        newY = ry + rh;   
      }

      // get distance from closest edges
      let distX = cx - newX;
      let distY = cy - newY;
      let distance = Math.sqrt((distX * distX) + (distY * distY));
  
      // if the distance is less than the radius, collision!
      if (distance <= r) {
        if (dog.color === "#803809" && dog.isHome === false)
          dog.isHome = true;
          this.score++
          return true;
      }
  
      return false;
    }


    // change dogs to transprent
    // add alert to signify win // separate function to check win
    // change score to timer 
    // modal 


  doorCollision(dog) {
    let hit = this.circleRect(dog.x, dog.y, dog.radius, this.home.doorX, this.home.doorY, this.home.doorWidth, this.home.doorHeight)
    
    if (hit) {
      dog.color = "#000000"
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
      // if (!this.wallCollision(this.dogs[i])) {
          let angle = Math.atan2(yDistance, xDistance);
          const newX = this.dogs[i].x + Math.cos(angle) * distance;
          const newY = this.dogs[i].y + Math.sin(angle) * distance;
      if (!this.wallCollision(newX, newY, this.dogs[i])) {
            this.dogs[i].x = newX;
            this.dogs[i].y = newY;
          }
      // }
      // else {
      //   this.dogs[i].x = this.dogs[i].x
      //   this.dogs[i].y = this.dogs[i].y
      // }
      }
    }
  }

  drawScore() {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "#000000";
    this.ctx.fillText("Score: " + this.score, 8, 20);
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
    this.drawScore();
    requestAnimationFrame(this.game.bind(this));
    this.move();
  }

  run() {
    requestAnimationFrame(this.game.bind(this));
  }
}


export default Main;