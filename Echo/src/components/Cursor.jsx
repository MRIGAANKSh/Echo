import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile or touch device
    const checkMobile = () =>
      /Android|iPhone|iPad|iPod|Windows Phone|webOS/i.test(navigator.userAgent) ||
      window.innerWidth < 768;

    setIsMobile(checkMobile());

    if (!checkMobile()) {
      document.body.style.cursor = "none"; // hide default cursor

      let posX = 0,
        posY = 0;
      let mouseX = 0,
        mouseY = 0;

      // Mouse move listener
      const mouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Small dot follows instantly
        gsap.to(dotRef.current, {
          x: mouseX,
          y: mouseY,
          duration: 0,
        });
      };

      // Smooth delayed movement for big circle
      gsap.ticker.add(() => {
        posX += (mouseX - posX) * 0.1; // delay factor
        posY += (mouseY - posY) * 0.1;

        gsap.set(circleRef.current, {
          x: posX - 20, // adjust to center the circle
          y: posY - 20,
        });
      });

      window.addEventListener("mousemove", mouseMove);

      return () => {
        window.removeEventListener("mousemove", mouseMove);
        document.body.style.cursor = "auto";
      };
    }
  }, []);

  if (isMobile) return null; // No cursor for mobile

  return (
    <>
      {/* Big delayed white circle */}
      <motion.div
        ref={circleRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full bg-white pointer-events-none z-[9998] mix-blend-difference"
        style={{
          position: "fixed",
          willChange: "transform",
        }}
      />

      {/* Small black dot */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-black pointer-events-none z-[9999]"
        style={{
          position: "fixed",
          willChange: "transform",
        }}
      />
    </>
  );
}
