"use client";

import React, { useState } from "react";
import BlurText from "@/components/animation/blur_text";
import { PortoContent } from "../data/content";
import {
  projects,
  getFeaturedProjects,
  getProjectsByCategory,
} from "../data/project";
import { Button } from "@headlessui/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioPage() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredProjects = getFeaturedProjects();
  const categories = [
    "All",
    "Web Development",
    "Design",
    "Mobile",
    "Motion Graphics",
  ];

  // Filter projects based on category and show all state
  const getDisplayedProjects = () => {
    let filteredProjects =
      selectedCategory === "All"
        ? projects
        : getProjectsByCategory(selectedCategory);

    return showAll ? filteredProjects : filteredProjects.slice(0, 3);
  };

  const displayedProjects = getDisplayedProjects();
  const hasMoreProjects =
    selectedCategory === "All"
      ? projects.length > 3
      : getProjectsByCategory(selectedCategory).length > 3;

  return (
    <main className="min-h-screen relative">
      <section className="px-8 py-16 text-center">
        <div className="flex flex-col items-center md:mt-24">
          <BlurText
            text={PortoContent.hero.title}
            delay={150}
            animateBy="words"
            direction="top"
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            style={{ textShadow: "0 0 30px rgba(147, 51, 234, 0.4)" }}
          />

          <BlurText
            text={PortoContent.hero.subtitle}
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl text-purple-300"
            style={{ textShadow: "0 0 10px rgba(196, 181, 253, 0.5)" }}
          />
        </div>
      </section>

      {/* Category Filter */}
      <section data-aos="fade-right" className="px-8 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowAll(false); // Reset show all when changing category
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

      {/* Projects Grid */}
      <section data-aos="fade-down" className="px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Link href={`/projects/${project.id}`}>
                    <div
                      className="
                bg-black/30 backdrop-blur-lg border border-purple-400/30 
                rounded-2xl overflow-hidden hover:border-purple-300/50 
                transition-all duration-300 group shadow-glass hover:shadow-glow
                cursor-pointer
              "
                    >
                      {/* Project Image */}
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                        {/* Status Badge */}
                        <div
                          className={`
                    absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium
                    ${
                      project.status === "Completed"
                        ? "bg-green-500/80 text-white"
                        : "bg-yellow-500/80 text-black"
                    }
                  `}
                        >
                          {project.status}
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies
                            .slice(0, 3)
                            .map((tech, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 text-xs rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-200"
                              >
                                {tech}
                              </span>
                            ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 text-xs rounded-full bg-gray-500/20 border border-gray-400/40 text-gray-300">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {hasMoreProjects && (
  <div className="text-center mt-12">
    <Button
      onClick={() => setShowAll(!showAll)}
      className="
        bg-black/30 hover:bg-purple-500/20 backdrop-blur-lg 
        border border-purple-400/30 hover:border-purple-300/50 
        text-white/95 hover:text-white font-semibold 
        py-3 px-8 rounded-full transition-all duration-300 
        shadow-glow hover:shadow-glow-lg cursor-pointer
      "
    >
      {showAll ? "Show Less" : "View All Projects"}
    </Button>
  </div>
)}
      </section>
    </main>
  );
}
