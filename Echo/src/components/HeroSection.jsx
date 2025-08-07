import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

function HeroSection() {
  const [isWebGL2Available, setIsWebGL2Available] = useState(true);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2");
    if (!gl) {
      setIsWebGL2Available(false);
    }
  }, []);

  return (
    <section className="w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      {isWebGL2Available ? (
        <Spline scene="https://prod.spline.design/r2eNgfHdXjGV3wSe/scene.splinecode" />
      ) : (
        <div className="w-full h-full bg-red-600 flex items-center justify-center">
          <p className="text-white text-xl font-bold">
            3D scene not supported on this device.
          </p>
        </div>
      )}
    </section>
  );
}

export default HeroSection;
