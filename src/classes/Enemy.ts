import { CanvasObj, ICanvasObj } from "./CanvasObj";

export interface IEnemy extends ICanvasObj {
  attack: number;
}

export class Enemy extends CanvasObj implements IEnemy {
  attack: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    position: {x: number, y: number}
  ) {
    super(position, 30, 30, ctx, canvas)
    this.attack = 20;
  }

  draw() {
    this.c.beginPath();
    this.c.arc(this.position.x, this.position.y, this.width / 2, 0, Math.PI * 2);
    this.c.closePath();
    this.c.fill();
  }
}