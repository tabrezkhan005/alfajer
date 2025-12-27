"use client";

import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  opacity: number;
}

export function SnowfallEffect() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Generate snowflakes
    const generateSnowflakes = () => {
      const count = typeof window !== "undefined" && window.innerWidth < 768 ? 30 : 50;
      const newSnowflakes: Snowflake[] = [];

      for (let i = 0; i < count; i++) {
        newSnowflakes.push({
          id: i,
          left: Math.random() * 100,
          animationDuration: 10 + Math.random() * 20, // 10-30 seconds
          animationDelay: Math.random() * 5,
          size: 4 + Math.random() * 6, // 4-10px
          opacity: 0.3 + Math.random() * 0.5, // 0.3-0.8
        });
      }

      setSnowflakes(newSnowflakes);
    };

    generateSnowflakes();

    // Regenerate on window resize for responsive count
    const handleResize = () => {
      generateSnowflakes();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="absolute top-0 rounded-full bg-white"
          style={{
            left: `${snowflake.left}%`,
            width: `${snowflake.size}px`,
            height: `${snowflake.size}px`,
            opacity: snowflake.opacity,
            animation: `snowfall ${snowflake.animationDuration}s linear infinite`,
            animationDelay: `${snowflake.animationDelay}s`,
            boxShadow: `0 0 ${snowflake.size}px rgba(255, 255, 255, 0.8)`,
          }}
        />
      ))}
    </div>
  );
}
