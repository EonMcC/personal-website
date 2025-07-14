import { CanvasObj, ICanvasObj } from "./CanvasObj";

export interface IPlayer extends ICanvasObj {
  velocity: { x: number, y: number };
  jumpCount: number;
  runSpeed: number;
  animate(): void;
  jump(): void;
  run(direction: "LEFT" | "RIGHT" | "STOP"): void;
}

export class Player extends CanvasObj implements IPlayer {
  velocity: { x: number, y: number };
  jumpCount: number;
  runSpeed: number;
  GRAVITY: number;

  constructor(position: {x: number, y: number}, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, GRAVITY: number) {
    super(position, 50, 75, ctx, canvas);
    this.velocity = {
      x: 0,
      y: 1
    };
    this.jumpCount = 0;
    this.runSpeed = 3;
    this.GRAVITY = GRAVITY;
  }

  draw() {
    this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  isOnGround() {
    return this.position.y + this.height >= this.canvas.height;
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
        this.velocity.x = this.position.x < 50 ?  0 : -this.runSpeed;
        break;
      case "RIGHT":
        this.velocity.x = this.position.x > 450 ? 0 : this.runSpeed;
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
      this.position.y = this.canvas.height - this.height
    } else if (this.position.y < this.canvas.height) {
      this.position.y += this.velocity.y;
      this.velocity.y += this.GRAVITY;
    }
    this.draw();
  }
}