"use client";

import React from "react";

import BlurText from "@/components/animation/blur_text";
import { PortoContent } from "@/app/data/content";

export default function HeroSectionPortfolio() {
    return (
        <section className="min-h-[60vh] flex flex-col items-center justify-center px-6">
            <BlurText
                text={PortoContent.hero.title}
                delay={150}
                animateBy="words"
                direction="top"
                className="text-6xl md:text-8xl font-bold text-white mb-6 text-center"
                style={{
                textShadow: "0 0 30px rgba(147, 51, 234, 0.4)",
                }}
            />

            <BlurText
                text={PortoContent.hero.subtitle}
                delay={150}
                animateBy="words"
                direction="top"
                className="w-full justify-center text-xl text-purple-300"
                style={{
                    textShadow: "0 0 10px rgba(196, 181, 253, 0.5)",
                }}
            />
        </section>
    );
}