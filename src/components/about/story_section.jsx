"use client";

import React, { useState } from "react";

import BlurText from "@/components/animation/blur_text";
import CountUp from "@/components/animation/count_up";
import { aboutContent } from "@/app/data/content";
import Image from "next/image";

export default function StorySection() {
    const { story } = aboutContent;
    return (
        <main>
            <section className="px-8 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
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
                            className=" bg-black/30 backdrop-blur-lg border border-purple-400/30 
                            rounded-xl p-4 text-center hover:border-purple-300/50 
                            transition-all duration-300 group"
                            style={{
                                boxShadow: "0 0 15px rgba(147, 51, 234, 0.2)",
                            }}
                            >
                            <div className=" flex items-center justify-center text-lg font-bold text-purple-300 
                            group-hover:text-purple-200 transition-colors duration-300">
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
                            className="relative w-full h-full transition-transform duration-700 ease-out 
                            transform-style-preserve-3d group-hover:rotate-y-180">
                            {/* Front Side - Professional */}
                            <div
                                className="
                                absolute inset-0 w-full h-full backface-hidden
                                rounded-2xl overflow-hidden from-purple-500/20 via-violet-400/15 to-fuchsia-500/20
                                backdrop-blur-lg border border-purple-400/30
                                shadow-glow"
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
                                className="absolute inset-0 w-full h-full backface-hidden rotate-y-180
                                rounded-2xl overflow-hidden
                                from-fuchsia-500/20 via-purple-400/15 to-violet-500/20
                                backdrop-blur-lg border border-fuchsia-400/30
                                shadow-glow">
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
        </main>
    );
}
