"use client";

import React from "react";

export default function ProjectImage({ project }) {
    return (
        <section data-aos="fade-up" className="px-8 py-8">
            <div className="max-w-4xl mx-auto">
            <div
                className="
                relative overflow-hidden rounded-2xl
                bg-black/30 backdrop-blur-lg border border-purple-400/30
                shadow-glow group
            "
            >
                <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-1/2 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            </div>
        </section>
    );
}