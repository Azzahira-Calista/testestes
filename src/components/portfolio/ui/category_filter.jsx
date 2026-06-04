"use client";

import React from "react";

export default function CategoryFilter({
    selectedCategory,
    setSelectedCategory,
    setShowAll,
    }) {
    const categories = [
        "All",
        "Web Development",
        "Design",
        "Mobile",
        "Motion Graphics",
    ];

    return (
        <section data-aos="fade-right" className="px-8 mb-8">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
                <button
                key={category}
                onClick={() => {
                    setSelectedCategory(category);
                    setShowAll(false);
                }}
                className={`
                    px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer
                    ${
                    selectedCategory === category
                        ? "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-glow border border-purple-300/50"
                        : "bg-black/30 backdrop-blur-lg border border-purple-400/30 text-white/80 hover:border-purple-300/50 hover:text-white"
                    }
                `}
                style={{
                    textShadow:
                    selectedCategory === category
                        ? "0 0 10px rgba(147, 51, 234, 0.5)"
                        : "none",
                }}
                >
                {category}
                </button>
            ))}
            </div>
        </div>
        </section>
    );
}