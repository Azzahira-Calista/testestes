"use client";

import React, { useState } from "react";
import {
  projects,
  getProjectsByCategory,
} from "../data/project";

import HeroSectionPortfolio from "@/components/portfolio/hero_sectrion";
import CategoryFilter from "@/components/portfolio/ui/category_filter";
import LoadMore from "@/components/portfolio/ui/load_more";
import ItemsSection from "@/components/portfolio/items_section";

export default function PortfolioPage() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : getProjectsByCategory(selectedCategory);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  const hasMoreProjects = filteredProjects.length > 3;

  return (
    <main className="min-h-screen relative">
      <HeroSectionPortfolio />

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        showAll={showAll}
        setShowAll={setShowAll}
      />

      <ItemsSection projects={displayedProjects} />

      <LoadMore
        showAll={showAll}
        setShowAll={setShowAll}
        hasMoreProjects={hasMoreProjects}
      />
    </main>
  );
}