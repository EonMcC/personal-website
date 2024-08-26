import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [position, setScrollPosition] = useState(0);
  const [isDown, setIsDown] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition((prev: number) => {
        if (prev > window.scrollY) setIsDown(false);
        else setIsDown(true);
        return window.scrollY
      });
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return {position, isDown};
};

export default useScrollPosition;