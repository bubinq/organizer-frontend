import { useState, useEffect } from "react";

export const useWindowResize = () => {
  const [size, setSize] = useState({ width: undefined });

  useEffect(() => {
    console.log(size);
    const resizeHandler = () => {
      setSize({ width: window.innerWidth });
    };
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
    //eslint-disable-next-line
  }, []);

  return size;
};
