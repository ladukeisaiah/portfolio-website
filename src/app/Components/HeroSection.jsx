"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const hireMe = () => {
    window.location.href = 'https://www.linkedin.com/in/isaiah-laduke-04074218b';
};

const downloadCV = () => {
        // Create a new anchor element dynamically
        const link = document.createElement('a');
        // Set the href to the path of the PDF file starting with a forward slash
        // The root of the public folder is the root URL (`/`)
        link.href = '/resume.pdf';
        // Set the download attribute to the desired file name
        link.download = 'Isaiah-LaDuke-Resume.pdf';
        // Append the anchor to the body
        document.body.appendChild(link);
        // Trigger click event on the anchor
        link.click();
        // Remove the anchor from the body after triggering the download
        document.body.removeChild(link);
};

const HeroSection = () => {
    return (
        
        <section className="lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <motion.div 
                initial={{opacity: 0, scale: 0.5}} 
                animate={{opacity: 1, scale: 1}} 
                transition={{duration: 0.5}} 
                className="col-span-8 space-self-center text-center sm:text-left justify-self start">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-custom-gradient bg-gradient-to-r from-primary-400 to-secondary-600">Hello, I&apos;m{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Isaiah',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'A Software Engineer',
                                1000,
                                'A UX/UI Designer',
                                1000,
                                'A Mobile App Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            />
                    </h1>
                    <p className="text-[#aADB7BE] text-base sm:text-lg mb-6 lg:text-xl"> 
                    I&apos;m so glad you&apos;re here!
                    </p>
                    <div className=""> 
                        <button onClick={hireMe} className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-500 via-primary-500 to-tertiary-500 hover:bg-slate-200 text-white">
                            Hire Me
                        </button>
                        <button onClick={downloadCV} className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-secondary-500 via-primary-500 to-tertiary-500 hover:bg-slate-800 text-white  mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                        </button>
                    </div>
                </motion.div>
                <motion.div 
                initial={{opacity: 0, scale: 0.5}} 
                animate={{opacity: 1, scale: 1}} 
                transition={{duration: 0.5}} 
                className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[275px] h-[275px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/hero-image.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                            />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;