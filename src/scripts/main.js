import Dog from "./dogs";
import ForceField from "./force_field";

class Main {
  constructor(ctx, canvas) {
    this.dogs = [];
    this.ctx = ctx;
    this.canvas = canvas;
    this.game(10);
    this.forceField = new ForceField(this.ctx, this.canvas)
  }

  game(dogCount) {
    for (let i = 0; i < dogCount; i++) {
      //   dogs.push(Dog.randomDog(canvas.width, canvas.height, 10));
      let dog = new Dog(this.canvas);
      this.dogs.push(dog);
    }
  }

  moveDog() {
    // let dx = Math.random() * 2 - 1;
    // let dy = Math.random() * 2 - 1;

    // this.centerX = Math.abs((this.centerX + dx * this.radius * 0.1) % maxX);
    // this.centerY = Math.abs((this.centerY + dy * this.radius * 0.1) % maxY);
  }

  start() {
    const animateCallback = () => {
      // this.moveDogs();
      this.render();
      requestAnimationFrame(animateCallback);
    };

    animateCallback();
  }

  draw() {
    this.render();
    // this.moveDog();
    this.start();
    // this.forceField.update();

    requestAnimationFrame(this.draw.bind(this));
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.dogs.forEach((dog) => {
      dog.render(this.ctx);
    });
  }
}

export default Main;