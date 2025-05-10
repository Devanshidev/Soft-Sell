"use client";

import { useState, useEffect } from "react";

interface Box {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
  speedX: number;
  speedY: number;
}

const FloatingBoxes = () => {
  const [boxes, setBoxes] = useState<Box[]>([]);

  useEffect(() => {
    // Function to create boxes with random properties
    const createBoxes = () => {
      const newBoxes: Box[] = [];
      for (let i = 0; i < 25; i++) {
        newBoxes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 10 + Math.random() * 30,
          opacity: 0.1 + Math.random() * 0.2,
          rotation: Math.random() * 45,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
        });
      }
      setBoxes(newBoxes);
    };

    createBoxes();

    // Update position and handle bouncing
    const interval = setInterval(() => {
      setBoxes((prevBoxes) =>
        prevBoxes.map((box) => {
          let newX = box.x + box.speedX;
          let newY = box.y + box.speedY;

          const updatedBox = { ...box };

          // Bounce on horizontal edges
          if (newX < 0 || newX > 100) {
            updatedBox.speedX = -box.speedX;
            newX = box.x;
          }

          // Bounce on vertical edges
          if (newY < 0 || newY > 100) {
            updatedBox.speedY = -box.speedY;
            newY = box.y;
          }

          return {
            ...updatedBox,
            x: newX,
            y: newY,
            rotation: (box.rotation + 0.1) % 360,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {boxes.map((box) => (
        <div
          key={box.id}
          className="absolute bg-gray-300"
          style={{
            left: `${box.x}%`,
            top: `${box.y}%`,
            width: `${box.size}px`,
            height: `${box.size}px`,
            opacity: box.opacity,
            transform: `rotate(${box.rotation}deg)`,
            transition: "transform 0.5s ease-out",
            borderRadius: "4px",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBoxes;
