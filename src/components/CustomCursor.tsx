import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="size-10 bg-gray-900/70 fixed pointer-events-none rounded-full z-50 flex items-center justify-center"
      style={{ left: position.x, top: position.y }}
    >
      <div className="border border-accent rounded-full size-6"></div>
    </div>
  );
};

export default CustomCursor;
