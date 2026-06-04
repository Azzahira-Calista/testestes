"use client";

import React from "react";
import { aboutContent } from "@/app/data/content";
import BlurText from "@/components/animation/blur_text";


export default function InterestSection() {
    const { interests } = aboutContent;
    return (
        <main>
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