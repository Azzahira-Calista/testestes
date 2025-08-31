"use client";
import React from "react";

import { Button } from "@headlessui/react";

import BlurText from "@/components/animation/blur_text";
import MagicBento from "@/components/animation/magic_bento";
import RotatingText from "@/components/animation/rotating_text";
import Background from "@/components/animation/background";

export default function Home() {
  return (
    <main className="w-full h-screen relative bg-black flex justify-center items-center overflow-hidden ">
      <div
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <Background
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div data-aos="fade-up" className="home absolute px-[1.5rem] py-[1rem] flex justify-center items-center min-h-screen">
        <div className=" flex flex-col justify-center gap-2">
          <div className="job flex items-center gap-2">
            <p className="text-white">I do </p>
            <RotatingText
              texts={[
                "Web Dev",
                "App Dev",
                "Motion Graphic",
                "Ui/Ux",
                "Graphic Design",
              ]}
              mainClassName="font-semibold px-2 sm:px-2 md:px-3 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white overflow-hidden py-0.25 sm:py-0.5 md:py-1 justify-center rounded-lg shadow-[0_0_15px_rgba(147,51,234,0.5)] border border-purple-400/30"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>

          <p
            className="text-4xl font-bold text-white"
            style={{ textShadow: "0 0 40px rgba(147, 51, 234, 0.3)" }}
          >
            Hi, I'm Calista
          </p>

          <BlurText
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl mb-4 text-purple-300"
            style={{ textShadow: "0 0 10px rgba(196, 181, 253, 0.5)" }}
          />

          <Button className="cursor-pointer bg-black/30 hover:bg-purple-500/20 backdrop-blur-lg border border-purple-400/30 hover:border-purple-300/50 text-white/95 hover:text-white font-semibold py-2 px-4 rounded-full w-fit transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,51,234,0.4),0_0_40px_rgba(147,51,234,0.2)] hover:shadow-purple-500/25">
            Get in Touch
          </Button>
        </div>
      </div>
    </main>
  );
}
