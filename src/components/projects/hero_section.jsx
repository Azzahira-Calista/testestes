"use client";

import React from "react";
import { Button } from "@headlessui/react";
import BlurText from "@/components/animation/blur_text";

export default function HeroSection({ project }) {
    return (
        <section className="px-8 py-24">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <div
                    data-aos="fade-down"
                    className={`
                    inline-block px-4 py-2 rounded-full text-sm font-medium mb-6
                    ${
                        project.status === "Completed"
                        ? "bg-green-500/20 text-green-300 border border-green-400/30"
                        : "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30"
                    }
                    `}
                    >
                    {project.status}
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                    <BlurText
                        text={project.title}
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                        style={{ textShadow: "0 0 30px rgba(147, 51, 234, 0.4)" }}
                    />

                    <BlurText
                        text={project.description}
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-xl text-white/80 max-w-3xl mx-auto mb-8 text-center"
                    />
                    </div>

                    {/* Technologies Used */}
                    <div
                    data-aos="fade-down"
                    className="flex flex-wrap justify-center gap-3 mb-8"
                    >
                    {project.technologies.map((tech, index) => (
                        <span
                        key={index}
                        className="
                            px-4 py-2 text-sm rounded-full font-medium
                            bg-purple-500/20 border border-purple-400/40 text-purple-200
                        "
                        style={{ textShadow: "0 0 8px rgba(196, 181, 253, 0.5)" }}
                        >
                        {tech}
                        </span>
                    ))}
                    </div>

                    {/* Action Buttons */}
                    <div data-aos="fade-left" className="flex justify-center gap-4">
                    {project.projectUrl && (
                        <Button
                        onClick={() => window.open(project.projectUrl, "_blank")}
                        className="
                            bg-gradient-to-r from-purple-500/80 to-fuchsia-500/80
                            hover:from-purple-500 hover:to-fuchsia-500
                            text-white font-semibold py-3 px-8 rounded-full
                            border border-purple-400/50 hover:border-purple-300/70
                            transition-all duration-300 shadow-glow hover:shadow-glow-lg
                            cursor-pointer flex items-center gap-2
                        "
                        >
                        <span>Live Demo</span>
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                        </Button>
                    )}

                    {project.projectCode && (
                        <Button
                        onClick={() => window.open(project.projectCode, "_blank")}
                        className="
                        bg-black/30 hover:bg-purple-500/20 backdrop-blur-lg 
                        border border-purple-400/30 hover:border-purple-300/50 
                        text-white/95 hover:text-white font-semibold 
                        py-3 px-8 rounded-full transition-all duration-300 
                        shadow-glass hover:shadow-glow cursor-pointer
                        flex items-center gap-2
                        "
                        >
                        <span>View Code</span>
                        <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                        </svg>
                    </Button>
                    )}
                    </div>
                </div>
            </div>
        </section>
    );
}