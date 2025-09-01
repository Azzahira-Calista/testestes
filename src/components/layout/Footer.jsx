import React from 'react';

import { Button } from "@headlessui/react";

import { socialLinks } from '@/app/data/content';

export default function Footer() {
  return (
    <main className="">
      {/* Contact CTA */}
      <section data-aos="fade-up" className="px-8 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ textShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
          >
            Let's Work Together
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Ready to bring your ideas to life? Let's create something amazing
            together.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12 rounded-full flex items-center justify-center
                  bg-black/30 backdrop-blur-lg border border-purple-400/30
                  hover:border-purple-300/50 hover:bg-purple-500/20
                  transition-all duration-300 shadow-glass hover:shadow-glow
                  text-xl group
                "
              >
                <span className="text-white group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>

          <Button
            className="
            bg-gradient-to-r from-purple-500/80 to-fuchsia-500/80
            hover:from-purple-500 hover:to-fuchsia-500
            text-white font-semibold py-3 px-8 rounded-full
            border border-purple-400/50 hover:border-purple-300/70
            transition-all duration-300 shadow-glow hover:shadow-glow-lg
            cursor-pointer
          "
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </main>
  );
};