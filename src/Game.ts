let canvas: HTMLCanvasElement;
let c: CanvasRenderingContext2D;
const GRAVITY = 0.5;
const RUN_SPEED = 3;

interface IPlayer {
  position: { x: number, y: number };
  width: number;
  height: number;
  velocity: { x: number, y: number };
  jumpCount: number
  draw(context2d: CanvasRenderingContext2D): void;
  animate(): void;
}

class Player implements IPlayer {
  position: { x: number; y: number };
  width: number;
  height: number;
  velocity: { x: number, y: number };
  jumpCount: number;

  constructor() {
    this.position = {
      x: 100,
      y: 100
    };
    this.width = 50;
    this.height = 75;
    this.velocity = {
      x: 0,
      y: 1
    };
    this.jumpCount = 0;
  }

  draw(c: CanvasRenderingContext2D) {
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  isOnGround() {
    return this.position.y + this.height >= canvas.height;
  }

  jump() {
    if (this.jumpCount > 1 && this.isOnGround()) {
      this.jumpCount = 0;
    }
    if (this.isOnGround() || this.jumpCount < 2) {
      this.jumpCount++;
      this.position.y -= 10;
      this.velocity.y = -10;
    }
  }

  run(direction: "LEFT" | "RIGHT" | "STOP") {
    // if (this.isOnGround()) {
    switch (direction) {
      case "LEFT":
        this.velocity.x = -RUN_SPEED;
        break;
      case "RIGHT":
        this.velocity.x = RUN_SPEED;
        break;
      default:
        this.velocity.x = 0;
    }
    // }
  }

  animate() {
    this.position.x += this.velocity.x;
    if (this.isOnGround()) {
      this.velocity.y = 0;
      this.position.y = canvas.height - this.height
    } else if (this.position.y < canvas.height) {
      this.position.y += this.velocity.y;
      this.velocity.y += GRAVITY;
    }
    this.draw();
  }
}

const player = new Player();

const gameLoop = () => {
  requestAnimationFrame(gameLoop);
  c.clearRect(0, 0, canvas.width, canvas.height);

  player.animate();
}

export const gameSetup = (HTMLCanvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
  canvas = HTMLCanvas;
  c = context;
  gameLoop();
}

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case "ArrowUp":
      player.jump();
      break;
    case "ArrowRight":
      player.run("RIGHT");
      break;
    case "ArrowLeft":
      player.run("LEFT");
      break;
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case "ArrowRight":
      player.run("STOP");
      break;
    case "ArrowLeft":
      player.run("STOP");
      break;
  }
})