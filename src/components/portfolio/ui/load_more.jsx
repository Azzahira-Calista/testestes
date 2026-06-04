"use client";

import { Button } from "@headlessui/react";

export default function LoadMore({
    showAll,
    setShowAll,
    hasMoreProjects,
    }) {
    if (!hasMoreProjects) return null;

    return (
        <div className="text-center mt-12">
            <Button
                onClick={() => setShowAll(!showAll)}
                className="
                bg-black/30 hover:bg-purple-500/20
                backdrop-blur-lg
                border border-purple-400/30
                hover:border-purple-300/50
                text-white/95 hover:text-white
                font-semibold
                py-3 px-8
                rounded-full
                transition-all duration-300
                cursor-pointer
                "
            >
                {showAll ? "Show Less" : "View All Projects"}
            </Button>
        </div>
    );
}