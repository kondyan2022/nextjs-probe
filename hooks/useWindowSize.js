import { useState, useEffect } from "react";

const BREACKPOINTS = [
  {
    width: 0,
    name: "none",
  },
  { width: 768, name: "md" },
  { width: 1280, name: "xl" },
];

export default function useWindowSize() {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
    breakpoint: "none",
  });

  useEffect(() => {
    function onResize() {
      const newName = BREACKPOINTS.reduce(
        (acc, elem, index, arr) =>
          window.innerWidth >= arr[index].width ? arr[index].name : acc,
        "none"
      );
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        breakpoint: newName,
      });
    }
    onResize();

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return size;
}
