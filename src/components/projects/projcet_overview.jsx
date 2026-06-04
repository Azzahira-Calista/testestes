"use client";

import React from "react";

export default function ProjectOverview({project}) {
    return (
        <section className="px-8 py-16">
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                    <div
                    data-aos="fade-down"
                    className="
                    bg-black/30 backdrop-blur-lg border border-purple-400/30 
                    rounded-2xl p-8 shadow-glass hover:shadow-glow
                    transition-all duration-300
                    "
                    >
                    <h2
                        className="text-3xl font-bold text-white mb-6"
                        style={{ textShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
                    >
                        Project Overview
                    </h2>
                    <p className="text-white/80 text-lg leading-relaxed mb-6">
                        {project.overview}
                    </p>
                    <p className="text-white/80 text-lg leading-relaxed">
                        {project.overview2}
                    </p>
                    </div>

                    <div className="space-y-6">
                    <div
                        data-aos="fade-left"
                        className="
                        bg-black/30 backdrop-blur-lg border border-purple-400/30 
                        rounded-2xl p-6 shadow-glass
                    "
                    >
                        <h3 className="text-xl font-semibold text-white mb-4">
                        Project Info
                        </h3>
                        <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-white/70">Category:</span>
                            <span className="text-purple-300 font-medium">
                            {project.category}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-white/70">Status:</span>
                            <span
                            className={`font-medium ${
                                project.status === "Completed"
                                ? "text-green-300"
                                : "text-yellow-300"
                            }`}
                            >
                            {project.status}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-white/70">Featured:</span>
                            <span className="text-purple-300 font-medium">
                            {project.featured ? "Yes" : "No"}
                            </span>
                        </div>
                        </div>
                    </div>

                    <div
                        data-aos="fade-right"
                        className="
                        bg-black/30 backdrop-blur-lg border border-purple-400/30 
                        rounded-2xl p-6 shadow-glass
                    "
                    >
                        <h3 className="text-xl font-semibold text-white mb-4">
                        Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, index) => (
                            <span
                            key={index}
                            className="
                                px-3 py-2 text-sm rounded-lg font-medium
                                bg-purple-500/20 border border-purple-400/40 text-purple-200
                                hover:bg-purple-500/30 hover:border-purple-300/60
                                transition-all duration-300 cursor-pointer
                            "
                            style={{ textShadow: "0 0 8px rgba(196, 181, 253, 0.5)" }}
                            >
                            {tech}
                            </span>
                        ))}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}