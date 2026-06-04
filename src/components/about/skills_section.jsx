"use client";

import React from "react";
import { skills } from "@/app/data/skills";
import { aboutContent } from "@/app/data/content";
import BlurText from "@/components/animation/blur_text";

export default function SkillsSection() {
    return (
        <main>
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
        </main>
    );
}