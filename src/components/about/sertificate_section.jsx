"use client";

import React from "react";
import Carousel, {Slider, SliderContainer, ThumsSlider,
} from "@/components/ui/carousel";
import Image from "next/image";
import BlurText from "@/components/animation/blur_text";

export default function SertificateSection() {
    const OPTIONS = { loop: true };
    return (
        <main>
            <section className="px-8 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-center mb-12">
                    <BlurText
                        text="Certifications"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-4xl font-bold text-white text-center"
                        style={{ textShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
                    />
                    </div>

                    <div 
                    data-aos="fade-up" 
                    className="
                        w-full max-w-4xl mx-auto rounded-2xl overflow-hidden
                        bg-black/30 backdrop-blur-lg border border-purple-400/30
                        shadow-glass hover:shadow-glow transition-all duration-300
                        p-6
                    "
                    >
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-t-2xl"></div>
                    
                    <Carousel options={OPTIONS} className="relative z-10" isAutoPlay={true}>
                        <SliderContainer className="gap-4">
                        <Slider
                            className="
                            xl:h-[600px] md:h-[550px] sm:h-[400px] h-[300px] w-full
                            rounded-xl overflow-hidden
                            border border-purple-400/20 hover:border-purple-300/40
                            transition-all duration-300 group
                        "
                            thumnailSrc="/sertifikat/intern1.png"
                        >
                            <div className="relative h-full w-full">
                            <Image
                                src="/sertifikat/intern1.png"
                                width={1400}
                                height={800}
                                alt="Internship Certificate 1"
                                className="h-full object-cover w-full group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="
                                absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            "></div>
                            <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700"></div>
                            </div>
                        </Slider>

                        <Slider
                        className="
                            xl:h-[600px] md:h-[550px] sm:h-[400px] h-[300px] w-full
                            rounded-xl overflow-hidden
                            border border-purple-400/20 hover:border-purple-300/40
                            transition-all duration-300 group
                        "
                            thumnailSrc="/sertifikat/intern2.png"
                        >
                            <div className="relative h-full w-full">
                            <Image
                                src="/sertifikat/intern2.png"
                                width={1400}
                                height={800}
                                alt="Internship Certificate 2"
                                className="h-full object-cover w-full group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="
                                absolute inset-0 bg-gradient-to-t from-violet-900/30 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            "></div>
                            <div className="absolute bottom-4 left-4 w-1 h-1 bg-violet-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700 delay-200"></div>
                            </div>
                        </Slider>

                        <Slider
                            className="
                            xl:h-[600px] md:h-[550px] sm:h-[400px] h-[300px] w-full
                            rounded-xl overflow-hidden
                            border border-purple-400/20 hover:border-purple-300/40
                            transition-all duration-300 group
                        "
                            thumnailSrc="/sertifikat/dicoding_react_expert.png"
                        >
                            <div className="relative h-full w-full">
                            <Image
                                src="/sertifikat/dicoding_react_expert.png"
                                width={1400}
                                height={800}
                                alt="Dicoding React Expert Certificate"
                                className="h-full object-cover w-full group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="
                                absolute inset-0 bg-gradient-to-t from-fuchsia-900/30 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            "></div>
                            <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-fuchsia-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700 delay-500"></div>
                            </div>
                        </Slider>

                        <Slider
                            className="
                            xl:h-[600px] md:h-[550px] sm:h-[400px] h-[300px] w-full
                            rounded-xl overflow-hidden
                            border border-purple-400/20 hover:border-purple-300/40
                            transition-all duration-300 group
                        "
                            thumnailSrc="/sertifikat/id_camp_react.png"
                        >
                            <div className="relative h-full w-full">
                            <Image
                                src="/sertifikat/id_camp_react.png"
                                width={1400}
                                height={800}
                                alt="ID Camp React Certificate"
                                className="h-full object-cover w-full group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="
                                absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            "></div>
                            <div className="absolute bottom-6 right-6 w-2 h-2 bg-purple-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700 delay-300"></div>
                            </div>
                        </Slider>
                        </SliderContainer>
                        
                        <div className="mt-6">
                        <ThumsSlider className="
                            [&_.thumbnail]:border-purple-400/30 
                            [&_.thumbnail]:hover:border-purple-300/50
                            [&_.thumbnail.active]:border-purple-500/70
                            [&_.thumbnail.active]:shadow-glow
                            [&_.thumbnail]:transition-all
                            [&_.thumbnail]:duration-300
                        " />
                        </div>
                    </Carousel>
                    </div>

                    
                </div>
                </section>
        </main>
    );
}