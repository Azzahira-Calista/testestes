"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import BlurText from "@/components/animation/blur_text";
import Background from "@/components/animation/background";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");
    setIsLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        { name, title, email, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setName("");
          setTitle("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <main className="min-h-screen relative">
       <div className="fixed inset-0 w-full h-full -z-10">
        <Background
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="relative z-10">
{/* Hero Section */}
      <section className="px-8 py-16">
        <div className="flex flex-col items-center md:mt-24">
          <BlurText
            text="Contact Me"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            style={{ textShadow: "0 0 30px rgba(147, 51, 234, 0.4)" }}
          />

          <BlurText
            text="Let's create something amazing together"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl text-purple-300 mb-8"
            style={{ textShadow: "0 0 10px rgba(196, 181, 253, 0.5)" }}
          />
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="
              flex flex-col gap-6 p-8
              bg-black/30 backdrop-blur-lg border border-purple-400/30
              rounded-2xl shadow-glass hover:shadow-glow
              transition-all duration-300
              relative overflow-hidden
            "
          >
            {/* Glass reflection */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            
            <h2 
              className="text-3xl font-bold text-center text-white mb-6 relative z-10"
              style={{textShadow: '0 0 20px rgba(147, 51, 234, 0.3)'}}
            >
              Get in Touch
            </h2>

            {/* Name Input */}
            <div className="relative z-10">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="
                  w-full p-4 rounded-xl
                  bg-black/40 backdrop-blur-md border border-purple-400/40
                  text-white placeholder-white/50
                  focus:border-purple-300/60 focus:bg-purple-500/10
                  focus:outline-none focus:ring-2 focus:ring-purple-500/30
                  transition-all duration-300
                "
                style={{
                  boxShadow: 'inset 0 0 10px rgba(147, 51, 234, 0.1)'
                }}
              />
            </div>

            {/* Subject Input */}
            <div className="relative z-10">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="What's this about?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="
                  w-full p-4 rounded-xl
                  bg-black/40 backdrop-blur-md border border-purple-400/40
                  text-white placeholder-white/50
                  focus:border-purple-300/60 focus:bg-purple-500/10
                  focus:outline-none focus:ring-2 focus:ring-purple-500/30
                  transition-all duration-300
                "
                style={{
                  boxShadow: 'inset 0 0 10px rgba(147, 51, 234, 0.1)'
                }}
              />
            </div>

            {/* Email Input */}
            <div className="relative z-10">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="
                  w-full p-4 rounded-xl
                  bg-black/40 backdrop-blur-md border border-purple-400/40
                  text-white placeholder-white/50
                  focus:border-purple-300/60 focus:bg-purple-500/10
                  focus:outline-none focus:ring-2 focus:ring-purple-500/30
                  transition-all duration-300
                "
                style={{
                  boxShadow: 'inset 0 0 10px rgba(147, 51, 234, 0.1)'
                }}
              />
            </div>

            {/* Message Textarea */}
            <div className="relative z-10">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project or just say hi!"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="6"
                className="
                  w-full p-4 rounded-xl resize-none
                  bg-black/40 backdrop-blur-md border border-purple-400/40
                  text-white placeholder-white/50
                  focus:border-purple-300/60 focus:bg-purple-500/10
                  focus:outline-none focus:ring-2 focus:ring-purple-500/30
                  transition-all duration-300
                "
                style={{
                  boxShadow: 'inset 0 0 10px rgba(147, 51, 234, 0.1)'
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="
                relative z-10 py-4 px-8 rounded-xl font-semibold text-lg
                bg-gradient-to-r from-purple-500/80 to-fuchsia-500/80
                hover:from-purple-500 hover:to-fuchsia-500
                text-white border border-purple-400/50 hover:border-purple-300/70
                transition-all duration-300 shadow-glow hover:shadow-glow-lg
                disabled:opacity-50 disabled:cursor-not-allowed
                disabled:hover:from-purple-500/80 disabled:hover:to-fuchsia-500/80
                group/button cursor-pointer
              "
              style={{textShadow: '0 0 10px rgba(147, 51, 234, 0.5)'}}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  Send Message
                  <svg 
                    className="w-5 h-5 group-hover/button:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
              )}
              
              {/* Button glow effect */}
              <div className="
                absolute inset-0 rounded-xl opacity-0 group-hover/button:opacity-100
                bg-gradient-to-r from-purple-400/30 to-fuchsia-400/30
                blur-lg transition-opacity duration-300 -z-10
              "></div>
            </button>

            {/* Status Message */}
            {status && (
              <div className={`
                relative z-10 text-center p-4 rounded-xl border
                ${status.includes('successfully') 
                  ? 'bg-green-500/20 border-green-400/40 text-green-300' 
                  : status.includes('Failed')
                  ? 'bg-red-500/20 border-red-400/40 text-red-300'
                  : 'bg-purple-500/20 border-purple-400/40 text-purple-300'
                }
                backdrop-blur-md
              `}>
                {status}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="
              bg-black/30 backdrop-blur-lg border border-purple-400/30 
              rounded-2xl p-6 text-center hover:border-purple-300/50 
              transition-all duration-300 group shadow-glass hover:shadow-glow
            ">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                📧
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-purple-300">hello@calista.dev</p>
            </div>

            {/* Location */}
            <div className="
              bg-black/30 backdrop-blur-lg border border-purple-400/30 
              rounded-2xl p-6 text-center hover:border-purple-300/50 
              transition-all duration-300 group shadow-glass hover:shadow-glow
            ">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                📍
              </div>
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-purple-300">Tangerang, Indonesia</p>
            </div>

            {/* Response Time */}
            <div className="
              bg-black/30 backdrop-blur-lg border border-purple-400/30 
              rounded-2xl p-6 text-center hover:border-purple-300/50 
              transition-all duration-300 group shadow-glass hover:shadow-glow
            ">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h3 className="text-white font-semibold mb-2">Response Time</h3>
              <p className="text-purple-300">Within 24 hours</p>
            </div>
          </div>
        </div>
      </section>
      </div>
      
    </main>
  );
}