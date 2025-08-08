import React from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.05,
    })
      .from(
        ".sub-content p, .stats",
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.5"
      )
      .from(
        ".image-grid img",
        {
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: "power2.out",
          stagger: 0.15,
        },
        "-=0.3"
      );
  }, []);

  return (
    <div
      id="about"
      className="bg-black text-white py-20 md:px-12 px-6 font-[Inter]"
    >
      {/* Text */}
      <div className="mb-16 max-w-6xl mx-auto">
        <div className="content grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <p className="text-sm tracking-wide uppercase text-gray-400">
              About Echo
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              Where <span className="text-gray-300">Innovation</span> Meets{" "}
              <span className="text-white">Execution</span>
            </h2>
          </div>

          <div className="sub-content md:col-span-4 space-y-6">
            <p className="text-lg text-gray-400">
              Echo is a digital agency crafting modern experiences that blend
              creativity, strategy, and technology. From sleek dashboards to AI
              automation, we turn ideas into pixel-perfect reality.
            </p>

            <div className="stats">
              <p className="text-3xl font-light">
                <span className="text-white">500+</span> Projects
              </p>
              <p className="text-sm text-gray-500">
                Delivered for global brands & startups
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="image-grid max-w-6xl mx-auto space-y-6">
        {/* First row - two big images */}
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-6">
            <img
              src="/chrome_DoILqRxL5p.png"
              alt="UI Design"
              className="rounded-2xl object-cover w-full h-[350px] md:h-[450px] shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:col-span-6">
            <img
              src="/chrome_FCxJz3Cl2B.png"
              alt="Dashboard"
              className="rounded-2xl object-cover w-full h-[350px] md:h-[450px] shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Second row - three smaller images */}
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <img
              src="/chrome_PLDwJOR5xg.png"
              alt="Tech"
              className="rounded-2xl object-cover w-full h-[250px] md:h-[350px] shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:col-span-4">
            <img
              src="/chrome_3ywxbsm5nQ.png"
              alt="Web App"
              className="rounded-2xl object-cover w-full h-[250px] md:h-[350px] shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:col-span-4">
            <img
              src="/chrome_FCxJz3Cl2B.png"
              alt="Extra"
              className="rounded-2xl object-cover w-full h-[250px] md:h-[350px] shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
