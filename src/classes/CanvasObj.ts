export interface ICanvasObj {
  position: {x: number, y: number};
  width: number;
  height: number;
  c: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  draw(): void;
}

export class CanvasObj implements ICanvasObj {
  position: {x: number, y: number};
  width: number;
  height: number;
  c: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;

  constructor(
    position: {x: number, y: number},
    width: number,
    height: number,
    c: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
  ) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.c = c;
    this.canvas = canvas;
  }

  draw() {
    this.c.beginPath();
    this.c.arc(this.position.x, this.position.y, this.width / 2, 0, Math.PI * 2);
    this.c.closePath();
    this.c.fill();
  }
}