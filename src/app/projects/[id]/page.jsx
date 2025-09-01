"use client";

import React from "react";
import { Button } from "@headlessui/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "../../data/project";
import BlurText from "@/components/animation/blur_text";

export default function ProjectDetail({ params }) {
  // Use React.use() untuk unwrap params Promise
  const unwrappedParams = React.use(params);
  const projectId = parseInt(unwrappedParams.id);
  const project = getProjectById(projectId);

  // If project not found, show 404
  if (!project) {
    notFound();
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 2);

  return (
    <main className="min-h-screen relative md:top-10">
      {/* Back Button */}
      <div className="fixed top-20 left-8 z-50">
        <Link href="/portfolio">
          <Button
            className="
            bg-black/30 backdrop-blur-lg border border-purple-400/30 
            hover:border-purple-300/50 hover:bg-purple-500/20
            text-white/95 hover:text-white font-medium 
            px-4 py-2 rounded-full transition-all duration-300 
            shadow-glass hover:shadow-glow cursor-pointer
            flex items-center gap-2
          "
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Portfolio
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
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

              <Button
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
            </div>
          </div>
        </div>
      </section>

      {/* Project Image/Gallery */}
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
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Project Overview */}
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
                {project.description}
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                This project demonstrates my ability to create modern,
                responsive web applications with attention to detail and user
                experience. The implementation showcases best practices in React
                development and contemporary design principles.
              </p>
            </div>

            {/* Project Info */}
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

              {/* Technologies */}
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

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
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
      )}
    </main>
  );
}
