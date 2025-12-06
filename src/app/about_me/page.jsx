"use client";

import React, { useState, useEffect } from "react";
import { aboutContent } from "../data/content";
import { skills, frameworks } from "../data/skills";
import Carousel, {
  Slider,
  SliderContainer,
  ThumsSlider,
} from "@/components/ui/carousel";
import Image from "next/image";

// import hobby from "/public/images/hobby.jpg";
// import professional from "/public/images/professional.jpg";

import BlurText from "@/components/animation/blur_text";
import CountUp from "@/components/animation/count_up";

const FrameworkPills = ({
  frameworks = frameworks,
  speed = 30,
  direction = "left",
  className = "",
}) => {
  const duplicatedFrameworks = [...frameworks, ...frameworks];
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className={`relative overflow-hidden py-8 ${className}`}>
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none"></div>

      {/* Animated container */}
      <div
        className={`flex gap-4 ${isPaused ? "" : "animate-scroll"}`}
        style={{
          animation: isPaused
            ? "none"
            : `scroll-${direction} ${speed}s linear infinite`,
        }}
        onMouseEnter={() => setIsPaused(false)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedFrameworks.map((framework, index) => (
          <div
            key={`${framework.name}-${index}`}
            className="
              flex items-center gap-3 px-6 py-3 rounded-full whitespace-nowrap
              bg-black/30 backdrop-blur-lg border border-purple-400/30
              hover:border-purple-300/50 hover:bg-purple-500/20
              transition-all duration-300 cursor-pointer
              group relative overflow-hidden
              min-w-fit
            "
            style={{
              boxShadow: `
                0 0 15px rgba(147, 51, 234, 0.2),
                inset 0 0 15px rgba(147, 51, 234, 0.05)
              `,
            }}
          >
            {/* Background glow layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-fuchsia-500/10 rounded-full"></div>

            {/* Icon */}
            <span className="text-xl relative z-10">{framework.icon}</span>

            {/* Framework name */}
            <span
              className="text-white/90 group-hover:text-white font-medium relative z-10 transition-colors duration-300"
              style={{ textShadow: "0 0 8px rgba(147, 51, 234, 0.4)" }}
            >
              {framework.name}
            </span>

            {/* Hover glow effect */}
            <div
              className="
              absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20
              blur-lg transition-opacity duration-300 -z-10
            "
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function AboutPage() {
  const OPTIONS = { loop: true };
  const { hero, story, interests } = aboutContent;
  return (
    <main className="min-h-screen relative">
      {/* Hero Section */}
      <section className="px-8 py-16 text-center">
        <div className="flex flex-col items-center md:mt-24">
          <BlurText
            text="About Me"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            style={{ textShadow: "0 0 30px rgba(147, 51, 234, 0.4)" }}
          />
          
          <BlurText
            text={hero.subtitle}
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl text-purple-300 mb-8"
            style={{ textShadow: "0 0 10px rgba(196, 181, 253, 0.5)" }}
          />
        </div>
      </section>

      {/* Framework Pills Carousel */}
      <section data-aos="fade-down" className="mb-16">
        <h2
          className="text-3xl font-bold text-center text-white mb-8"
          style={{ textShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
        >
          Technologies I Love
        </h2>
        <FrameworkPills frameworks={frameworks} speed={25} direction="left" />
      </section>

      {/* Story Section */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Story Text */}
            <div data-aos="fade-right">
              <BlurText
                text="My Journey"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-4xl font-bold text-white mb-6"
                style={{ textShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
              />
              <div className="text-white/80 text-lg leading-relaxed mb-6">
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  {story.paragraphs[0]}
                </p>
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {story.paragraphs[1]}
              </p>
              {/* Fun Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div
                  className="
                  bg-black/30 backdrop-blur-lg border border-purple-400/30 
                  rounded-xl p-4 text-center hover:border-purple-300/50 
                  transition-all duration-300 group
                "
                  style={{
                    boxShadow: "0 0 15px rgba(147, 51, 234, 0.2)",
                  }}
                >
                  {/* <div className="text-2xl font-bold text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                    50+
                  </div> */}
                  <div className=" flex items-center justify-center text-lg font-bold text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                    <CountUp
                      from={0}
                      to={20}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    <p>+</p>
                  </div>

                  <div className="text-white/70 text-sm">Projects</div>
                </div>

                <div
                  className="
                  bg-black/30 backdrop-blur-lg border border-purple-400/30 
                  rounded-xl p-4 text-center hover:border-purple-300/50 
                  transition-all duration-300 group
                "
                  style={{
                    boxShadow: "0 0 15px rgba(147, 51, 234, 0.2)",
                  }}
                >
                  <div className="text-3xl font-bold text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                    ∞
                  </div>
                  <div className="text-white/70 text-sm">Chocolate Cups</div>
                </div>
              </div>
            </div>

            {/* Profile Image with Flip Card */}
            <div data-aos="fade-up" className="flex justify-center">
              <div className="w-80 h-80 perspective-1000 group cursor-pointer">
                {/* Flip Card Container */}
                <div
                  className="
      relative w-full h-full transition-transform duration-700 ease-out
      transform-style-preserve-3d group-hover:rotate-y-180
    "
                >
                  {/* Front Side - Professional */}
                  <div
                    className="
        absolute inset-0 w-full h-full backface-hidden
        rounded-2xl overflow-hidden
        bg-gradient-to-br from-purple-500/20 via-violet-400/15 to-fuchsia-500/20
        backdrop-blur-lg border border-purple-400/30
        shadow-glow
      "
                  >
                    {/* Professional Photo */}
                    <Image
                      // src={professional}
                      src="/images/professional.jpg"
                      alt="Calista - Professional"
                      className="w-full h-full object-cover"
                      width={320}
                      height={320}
                    />

                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/20"></div>

                    {/* Professional Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        style={{
                          textShadow: "0 0 15px rgba(147, 51, 234, 0.6)",
                        }}
                      >
                        Calista Azzahira Rusdy
                      </h3>
                      <p className="text-purple-300 text-sm font-medium">
                        Programmer
                      </p>
                    </div>

                    {/* Glass reflection */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>

                    {/* Floating particles */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400/60 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 left-6 w-1 h-1 bg-fuchsia-400/60 rounded-full animate-pulse delay-1000"></div>
                  </div>

                  {/* Back Side - Hobby/Personal */}
                  <div
                    className="
        absolute inset-0 w-full h-full backface-hidden rotate-y-180
        rounded-2xl overflow-hidden
        bg-gradient-to-br from-fuchsia-500/20 via-purple-400/15 to-violet-500/20
        backdrop-blur-lg border border-fuchsia-400/30
        shadow-glow
      "
                  >
                    {/* Hobby Photo */}
                    <Image
                      src="/images/hobby.jpg"
                      alt="Calista - Personal"
                      className="w-full h-full object-cover"
                      // style={{ filter: "hue-rotate(30deg) saturate(1.2)" }}
                      width={320}
                      height={320}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20"></div>

                    {/* Personal Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3
                        className="text-xl font-bold text-white mb-2"
                        style={{
                          textShadow: "0 0 15px rgba(217, 70, 239, 0.6)",
                        }}
                      >
                        When I'm Not Coding
                      </h3>

                      <p className="text-fuchsia-300 text-sm font-medium">
                        Cosplaying • Watching • Gaming
                      </p>
                    </div>

                    {/* Glass reflection */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>

                    {/* Different colored particles */}
                    <div className="absolute top-4 left-4 w-2 h-2 bg-fuchsia-400/60 rounded-full animate-pulse delay-500"></div>
                    <div className="absolute bottom-20 right-6 w-1 h-1 bg-violet-400/60 rounded-full animate-pulse delay-1500"></div>
                  </div>
                </div>

                {/* Flip Instruction */}
                <p className="text-center text-white/60 text-sm mt-4">
                  Psstt, try flipping me over!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <BlurText
            text={aboutContent.hero.subtitle}
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl font-bold text-center text-white mb-12"
            style={{ textShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
          />

          <div data-aos="fade-left" className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="
                  bg-black/30 backdrop-blur-lg border border-purple-400/30 
                  rounded-xl p-6 hover:border-purple-300/50 
                  transition-all duration-300 group
                "
                style={{ boxShadow: "0 0 15px rgba(147, 51, 234, 0.2)" }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-purple-300 font-bold">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="
                      h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full
                      transition-all duration-1000 ease-out
                      group-hover:shadow-[0_0_10px_rgba(147,51,234,0.6)]
                    "
                    style={{
                      width: `${skill.level}%`,
                      boxShadow: "0 0 8px rgba(147, 51, 234, 0.4)",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* certification */}
<section className="px-8 py-16">
  <div className="max-w-6xl mx-auto">
    {/* Centered Title */}
    <div className="flex justify-center mb-12">
      <BlurText
        text="Certifications"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl font-bold text-white text-center"
        style={{ textShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
      />
    </div>

    {/* Carousel Container with Purple Theme */}
    <div 
      data-aos="fade-up" 
      className="
        w-full max-w-4xl mx-auto rounded-2xl overflow-hidden
        bg-black/30 backdrop-blur-lg border border-purple-400/30
        shadow-glass hover:shadow-glow transition-all duration-300
        p-6
      "
    >
      {/* Glass reflection */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-t-2xl"></div>
      
      <Carousel options={OPTIONS} className="relative z-10" isAutoPlay={true}>
        <SliderContainer className="gap-4">
          <Slider
            className="
            xl:h-[600px] md:h-[550px] sm:h-[400px] h-[300px] w-full
            rounded-xl overflow-hidden
            border border-purple-400/20 hover:border-purple-300/40
            transition-all duration-300 group
          "
            thumnailSrc="/sertifikat/intern1.png"
          >
            <div className="relative h-full w-full">
              <Image
                src="/sertifikat/intern1.png"
                width={1400}
                height={800}
                alt="Internship Certificate 1"
                className="h-full object-cover w-full group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="
                absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
              "></div>
              {/* Glow particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700"></div>
            </div>
          </Slider>

          <Slider
          className="
            xl:h-[600px] md:h-[550px] sm:h-[400px] h-[300px] w-full
            rounded-xl overflow-hidden
            border border-purple-400/20 hover:border-purple-300/40
            transition-all duration-300 group
          "
            thumnailSrc="/sertifikat/intern2.png"
          >
            <div className="relative h-full w-full">
              <Image
                src="/sertifikat/intern2.png"
                width={1400}
                height={800}
                alt="Internship Certificate 2"
                className="h-full object-cover w-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="
                absolute inset-0 bg-gradient-to-t from-violet-900/30 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
              "></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-violet-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700 delay-200"></div>
            </div>
          </Slider>

          <Slider
            className="
            xl:h-[600px] md:h-[550px] sm:h-[400px] h-[300px] w-full
            rounded-xl overflow-hidden
            border border-purple-400/20 hover:border-purple-300/40
            transition-all duration-300 group
          "
            thumnailSrc="/sertifikat/dicoding_react_expert.png"
          >
            <div className="relative h-full w-full">
              <Image
                src="/sertifikat/dicoding_react_expert.png"
                width={1400}
                height={800}
                alt="Dicoding React Expert Certificate"
                className="h-full object-cover w-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="
                absolute inset-0 bg-gradient-to-t from-fuchsia-900/30 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
              "></div>
              <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-fuchsia-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700 delay-500"></div>
            </div>
          </Slider>

          <Slider
            className="
            xl:h-[600px] md:h-[550px] sm:h-[400px] h-[300px] w-full
            rounded-xl overflow-hidden
            border border-purple-400/20 hover:border-purple-300/40
            transition-all duration-300 group
          "
            thumnailSrc="/sertifikat/id_camp_react.png"
          >
            <div className="relative h-full w-full">
              <Image
                src="/sertifikat/id_camp_react.png"
                width={1400}
                height={800}
                alt="ID Camp React Certificate"
                className="h-full object-cover w-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="
                absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
              "></div>
              <div className="absolute bottom-6 right-6 w-2 h-2 bg-purple-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700 delay-300"></div>
            </div>
          </Slider>
        </SliderContainer>
        
        {/* Custom Thumbnail Slider with Purple Theme */}
        <div className="mt-6">
          <ThumsSlider className="
            [&_.thumbnail]:border-purple-400/30 
            [&_.thumbnail]:hover:border-purple-300/50
            [&_.thumbnail.active]:border-purple-500/70
            [&_.thumbnail.active]:shadow-glow
            [&_.thumbnail]:transition-all
            [&_.thumbnail]:duration-300
          " />
        </div>
      </Carousel>
    </div>

    
  </div>
</section>

      {/* Personal Touch */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <BlurText
            text="When I'm Not Coding"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl font-bold text-white mb-8"
            style={{ textShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
          />

          <div data-aos="fade-right" className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="
                  bg-black/30 backdrop-blur-lg border border-purple-400/30 
                  rounded-xl p-6 hover:border-purple-300/50 hover:bg-purple-500/10
                  transition-all duration-300 group cursor-pointer
                "
                style={{ boxShadow: "0 0 15px rgba(147, 51, 234, 0.2)" }}
              >
                <div className="text-4xl mb-4 group-hover:scale-150 transition-transform duration-300">
                  {interest.icon}
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-purple-200 transition-colors duration-300">
                  {interest.title}
                </h3>
                <p className="text-white/70 text-sm">{interest.description}</p>

                {/* Hover glow */}
                <div
                  className="
                  absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
                  bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10
                  transition-opacity duration-300 -z-10
                "
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
