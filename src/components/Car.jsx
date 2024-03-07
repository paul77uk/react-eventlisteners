"use client";
import { use, useEffect, useState } from "react";

const Car = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setPosition(position + 5);
        document.removeEventListener("keydown", handleKeyDown);
      } else if (e.key === "ArrowLeft") {
        setPosition(position - 5);
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
  }, [position]);

  return (
    <div>
      <div id="car" style={{ marginLeft: `${position}px` }}>
        🏎
      </div>
    </div>
  );
};
export default Car;
