"use client";

import React from "react";

import HeroSection from "@/components/about/hero_section";
import StorySection from "@/components/about/story_section";
import SkillsSection from "@/components/about/skills_section";
import SertificateSection from "@/components/about/sertificate_section";
import InterestSection from "@/components/about/interest_section";

export default function AboutPage() {
  return (
    <main className="min-h-screen relative">
      <HeroSection />
      <StorySection />
      <SkillsSection />
      <SertificateSection />
      <InterestSection />
    </main>
  );
}
