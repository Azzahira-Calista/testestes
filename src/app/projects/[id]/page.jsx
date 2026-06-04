"use client";

import React from "react";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "../../data/project";
import HeroSection from "@/components/projects/hero_section";
import BackButton from "@/components/projects/ui/back_button";
import ProjectImage from "@/components/projects/ui/project_image";
import RelatedProjects from "@/components/projects/related_projects";
import ProjectOverview from "@/components/projects/projcet_overview";

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
      <BackButton />
      <HeroSection project={project} />
      <ProjectImage project={project} />
      <ProjectOverview project={project} />
      <RelatedProjects relatedProjects={relatedProjects} />
    </main>
  );
}
