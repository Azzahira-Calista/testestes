"use client";

import DomeGallery from "@/components/animation/dome_gallery";
import BlurText from "@/components/animation/blur_text";

export default function ArchivePage() {
  return (
    <main className="relative min-h-screen w-full bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-10 text-center">
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-40"></div>
        </div> */}
        <BlurText
          text="My ArtChive."
          className=" text-4xl md:text-6xl font-bold text-shadow-yellow-300"
        />
      </div>

      <div className="w-full h-screen">
        <DomeGallery
          grayscale={false}
          fitBasis="max"
          imageBorderRadius="20px"
          fit={1}
        />
      </div>
    </main>
    
  );
}
