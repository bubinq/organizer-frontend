import { useState, useEffect } from "react";

export const useWindowResize = () => {
  const [size, setSize] = useState({ width: window.innerWidth });

  const resizeHandler = () => {
    setSize({ width: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return size;
};
