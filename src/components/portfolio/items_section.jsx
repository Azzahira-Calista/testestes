"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ItemsSection({ projects }) {
    return (
        <section data-aos="fade-down" className="px-8 py-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            }}
                        >
                            <Link href={`/projects/${project.id}`}>
                            <div
                                className="
                                bg-black/30 backdrop-blur-lg
                                border border-purple-400/30
                                rounded-2xl overflow-hidden
                                hover:border-purple-300/50
                                transition-all duration-300
                                group shadow-glass hover:shadow-glow
                                cursor-pointer
                                "
                            >
                                <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="
                                    w-full h-full object-cover
                                    group-hover:scale-105
                                    transition-transform duration-500
                                    "
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                                <div
                                    className={`
                                    absolute top-4 right-4
                                    px-3 py-1 rounded-full text-xs font-medium
                                    ${
                                        project.status === "Completed"
                                        ? "bg-green-500/80 text-white"
                                        : "bg-yellow-500/80 text-white"
                                    }
                                    `}
                                >
                                    {project.status}
                                </div>
                                </div>

                                <div className="p-6">
                                <h3
                                    className="
                                    text-xl font-bold text-white mb-2
                                    group-hover:text-purple-200
                                    transition-colors duration-300
                                    "
                                >
                                    {project.title}
                                </h3>

                                <p className="text-white/80 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies
                                    .slice(0, 3)
                                    .map((tech, index) => (
                                        <span
                                        key={index}
                                        className="
                                            px-2 py-1 text-xs rounded-full
                                            bg-purple-500/20
                                            border border-purple-400/40
                                            text-purple-200
                                        "
                                        >
                                        {tech}
                                        </span>
                                    ))}

                                    {project.technologies.length > 3 && (
                                    <span
                                        className="
                                        px-2 py-1 text-xs rounded-full
                                        bg-gray-500/20
                                        border border-gray-400/40
                                        text-gray-300
                                        "
                                    >
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
        </section>
    );
}