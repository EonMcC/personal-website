import { useEffect, useRef } from "react";
import { gameSetup } from "./Game";

const App = () => {

  const cRef = useRef<HTMLCanvasElement>(null);
  // let canvas: HTMLCanvasElement;
  // let c: CanvasRenderingContext2D;

  useEffect(() => {
    const canvas = cRef.current as HTMLCanvasElement;
    if (canvas) {
      const c = canvas.getContext("2d") as CanvasRenderingContext2D;
      canvas.width = window.innerWidth;
      canvas.height = 700;
      canvas.style.border = '1px solid black';
      gameSetup(canvas, c)
    }
  }, [])

  return (
    <div className="app">
      <canvas ref={cRef} />
    </div>
  )
}

export default App;