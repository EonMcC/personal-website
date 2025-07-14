import { Checkpoint, ICheckpoint } from "./classes/Checkpoint";
import { Enemy, IEnemy } from "./classes/Enemy";
import { IPlayer, Player } from "./classes/Player";

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let isCurrentlyEnemyColliding = false;

const gameLoop = (
  player: IPlayer,
  enemies: IEnemy[],
  checkpoints: ICheckpoint[],
  onScoreChange: (value: number) => void
) => {
  requestAnimationFrame(() => gameLoop(player, enemies, checkpoints, onScoreChange));

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  player.animate();
  for (const enemy of enemies) {
    enemy.draw();
  }
  for (const checkpoint of checkpoints) {
    checkpoint.draw();
  }
  console.log(player.position.x)
  if (player.position.x > 450) {
    checkpoints.forEach((el) => el.position.x -= player.runSpeed);
    enemies.forEach((el) => el.position.x -= player.runSpeed);
  } else if (player.position.x < 50) {
    checkpoints.forEach((el) => el.position.x += player.runSpeed);
    enemies.forEach((el) => el.position.x += player.runSpeed);
  }

  let isEnemyColliding
  for (const enemy of enemies) {
    if (
      player.position.x + player.width > enemy.position.x - enemy.width / 2 &&
        player.position.x < enemy.position.x + enemy.width / 2 &&
        player.position.y + player.height > enemy.position.y - enemy.height / 2
    ) {
      isEnemyColliding = true;
      break;
    }
  }

  if (isEnemyColliding && !isCurrentlyEnemyColliding) {
    onScoreChange(-1);
    isCurrentlyEnemyColliding = true;
  } else if (!isEnemyColliding) {
    isCurrentlyEnemyColliding = false;
  }

  for (const checkpoint of checkpoints) {
    if (checkpoint.reached) return;
    if (
      player.position.x + player.width > checkpoint.position.x - checkpoint.width / 2 &&
        player.position.x < checkpoint.position.x + checkpoint.width / 2 &&
        player.position.y + player.height > checkpoint.position.y - checkpoint.height / 2
    ) {
      checkpoint.setReached();
      onScoreChange(1);
      break;
    }
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
      case "ArrowLeft":
        player.run("STOP");
        break;
    }
  })
}

export const gameSetup = (
  HTMLCanvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  onScoreChange: (value: number) => void
) => {
  canvas = HTMLCanvas;
  ctx = context;
  const GRAVITY = 0.5;
  const player = new Player({x: 100, y: 100}, ctx, canvas, GRAVITY);
  const enemies = [
    new Enemy(ctx, canvas, {x: 400, y: canvas.height - 15})
  ]
  const checkpoints = [
    new Checkpoint(ctx, canvas, {x: 600, y: canvas.height - 20})
  ]
  gameLoop(player, enemies, checkpoints, onScoreChange);
}
