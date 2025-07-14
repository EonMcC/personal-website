import { CanvasObj } from "./CanvasObj";

export interface ICheckpoint extends CanvasObj {
  reached: boolean;
  setReached(): void;
}

export class Checkpoint extends CanvasObj implements ICheckpoint {
  reached: boolean;

  constructor(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    position: {x: number, y: number}
  ) {
    super(position, 25, 25, ctx, canvas);
    this.reached = false;
  }

  draw() {
    this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  setReached() {
    this.reached = true;
  }
}