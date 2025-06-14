// Hero2.jsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { ChevronDown } from "lucide-react"; // optional icon library

const Hero2 = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        typed.current = new Typed(el.current, {
            strings: ["Web Developer.", "UI/UX Designer.", "React Enthusiast."],
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 1500,
            loop: true,
            showCursor: true,
            cursorChar: "|",
        });

        return () => {
            typed.current.destroy();
        };
    }, []);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white text-center px-4 relative">
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
                Hi, I'm <span className="text-indigo-400">Your Name</span>
            </h1>
            <h2 className="text-2xl sm:text-4xl font-medium">
                <span ref={el} />
            </h2>
            <p className="mt-6 max-w-xl text-lg text-gray-300">
                I build beautiful, fast, and responsive web apps using modern frontend technologies.
            </p>
            <div className="mt-8 flex gap-4">
                <a
                    href="#projects"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-md transition"
                >
                    View Projects
                </a>
                <a
                    href="#contact"
                    className="border border-white hover:bg-white hover:text-indigo-700 text-white font-semibold px-6 py-3 rounded-2xl transition"
                >
                    Contact Me
                </a>
            </div>

            {/* Scroll down icon */}
            <a
                href="#next-section"
                className="absolute bottom-6 animate-bounce text-indigo-400"
                aria-label="Scroll down"
            >
                <ChevronDown size={32} />
                {/* <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg> */}
            </a>
        </section>
    );
};

export default Hero2;
