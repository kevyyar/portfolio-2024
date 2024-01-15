"use client";

import { useEffect, useState } from "react";

export const useMediaQuery = () => {
  const [width, setWidth] = useState(0);

  // set window width
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    console.log(width)

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, setWidth]);

  return {
    width
  }
};
