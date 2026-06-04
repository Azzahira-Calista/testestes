"use client";

import React, { useState } from "react";
import { frameworks } from "@/app/data/skills";
import { aboutContent } from "@/app/data/content";

import BlurText from "@/components/animation/blur_text";


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

export default function HeroSection() {
    const { hero } = aboutContent;
    return (
        <main>
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

            <section data-aos="fade-down" className="mb-16">
                <h2
                className="text-3xl font-bold text-center text-white mb-8"
                style={{ textShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
                >
                Technologies I Love
                </h2>
                <FrameworkPills frameworks={frameworks} speed={25} direction="left" />
            </section>

        </main>
    );
}