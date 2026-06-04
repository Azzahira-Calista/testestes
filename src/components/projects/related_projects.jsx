"use client";

import React from "react";
import Link from "next/link";
import BlurText from "@/components/animation/blur_text";

export default function RelatedProjects({ relatedProjects }) {
    if (!relatedProjects || relatedProjects.length === 0) {
        return null; 
    }
    return (
        <section className="px-8 py-16">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-center">
                <BlurText
                    text="Related Projects"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-3xl font-bold text-center text-white mb-12"
                    style={{ textShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
                />
                </div>

                <div data-aos="fade-up" className="grid md:grid-cols-2 gap-8">
                {relatedProjects.map((relatedProject) => (
                    <Link
                    href={`/projects/${relatedProject.id}`}
                    key={relatedProject.id}
                    >
                    <div
                        className="
                        bg-black/30 backdrop-blur-lg border border-purple-400/30 
                        rounded-2xl overflow-hidden hover:border-purple-300/50 
                        transition-all duration-300 group shadow-glass hover:shadow-glow
                        cursor-pointer
                    "
                    >
                        <div className="relative overflow-hidden h-48">
                        <img
                            src={relatedProject.imageUrl}
                            alt={relatedProject.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>

                        <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                            {relatedProject.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-4 line-clamp-2">
                            {relatedProject.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {relatedProject.technologies
                            .slice(0, 3)
                            .map((tech, index) => (
                                <span
                                key={index}
                                className="px-2 py-1 text-xs rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-200"
                                >
                                {tech}
                                </span>
                            ))}
                        </div>
                        </div>
                    </div>
                    </Link>
                ))}
                </div>
            </div>
        </section>
    );
}