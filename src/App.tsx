import { useEffect, useRef, useState } from "react";
import { gameSetup } from "./Game";

const App = () => {

  const cRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);

  const onScoreChange = (value: number) => {
    setScore(prevState => prevState + value);
  }

  useEffect(() => {
    const canvas = cRef.current as HTMLCanvasElement;
    if (canvas) {
      const c = canvas.getContext("2d") as CanvasRenderingContext2D;
      canvas.width = window.innerWidth;
      canvas.height = 700;
      canvas.style.border = '1px solid black';
      gameSetup(canvas, c, onScoreChange)
    }
  }, [])

  return (
    <div className="app">
      <p>Score: {score}</p>
      <canvas ref={cRef} />
    </div>
  )
}

export default App;