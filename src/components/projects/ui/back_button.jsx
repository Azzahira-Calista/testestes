"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@headlessui/react";


export default function BackButton() {
    return (
        <div className="fixed top-5 left-8 z-50">
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
    );
}