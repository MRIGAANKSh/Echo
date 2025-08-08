import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  const lettersRef = useRef([]);
  const loaderRef = useRef(null);

  useEffect(() => {
    // Step 1: Animate each letter in
    gsap.fromTo(
      lettersRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        ease: "power4.out",
        duration: 1,
        onComplete: () => {
          // Step 2: Slide loader upward
          gsap.to(loaderRef.current, {
            y: "-100%",
            duration: 1,
            ease: "power4.inOut",
            delay: 0.5,
            onComplete,
          });
        },
      }
    );
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="loader fixed inset-0 bg-black flex justify-center items-center z-[9999]"
    >
      <h1 className="text-5xl font-extrabold text-white font-serif tracking-wide uppercase drop-shadow-lg flex">
        {"Echo".split("").map((char, index) => (
          <span
            key={index}
            ref={(el) => (lettersRef.current[index] = el)}
            className="inline-block"
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}
