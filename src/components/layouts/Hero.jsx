import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaLinkedinIn, FaGithub, FaDev, FaCodepen, FaMedium } from "react-icons/fa";

import Image from "../Image";
import logoImg from "../../assets/logo.png";
import RubiyaHud from "../../assets/RubiyaYasmin.png";
import Navbar1 from "../Navbar1";
import Navbar2 from "../Navbar2";
import Navbar from "../Navbar";

const Hero = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        typed.current = new Typed(el.current, {
            strings: [
                '<span class="text-[#FB01AA]"> Frontend Web Developer. </span>',
                '<span class="text-[#FB9703]"> PhD in Computer Science. </span>',
                '<span class="text-[#24D3C8]"> Skilled in React and Tailwind CSS. </span>',
                '<span class="text-[#FBED06]"> Enthusiastic about Web Technologies. </span>',
                '<span class="text-blue-400"> Let\'s build something impactful! </span>',
            ],
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 1500,
            loop: true,
            showCursor: true,
            cursorChar: "|",
            contentType: "html", // important!
        });
        return () => {
            typed.current.destroy();
        };
    }, []);

    return (
        <section className="min-h-screen mx-auto bg-bgC  text-center ">
            {/* Navbar part Start */}
             <Navbar/>           
            {/* Navbar part End */}

            {/* Body Text Start */}
            <div className="mt-10 lg:mt-52 ">
                <div className="avatar">
                    <div className="w-[240px] mb-1 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100 animate-ring-pulse">
                        <Image imgSrc={RubiyaHud} imgAlt={RubiyaHud} />
                    </div>
                </div>
                <h2 className="mt-3 mb-2 text-2xl md:text-3xl lg:text-4xl font-poppins font-medium text-indigo-400 "> Hi, I am </h2>
                <h1 className=" text-3xl pb-3 md:text-[62px] md:leading-[74.4px] lg:text-[65px] lg:leading-[84px] font-poppins font-bold text-white ">
                    Rubiya Yasmin Reba
                </h1>
                {/* Typed.js */}
                <h2 className="text-[19px] md:text-2xl lg:text-3xl font-medium font-poppins">
                    <span ref={el} />
                </h2>
            </div>
            {/* Body Text End */}

            {/* Social Media Links Start */}
            <div className="absolute bottom-9 md:bottom-13 lg:bottom-13 right-10 flex gap-2 lg:block ">
                <div className="lg:mb-2">
                    <a href="https://www.linkedin.com/in/rubiyahud/" target="_blank" rel="noopener noreferrer" >
                        <FaLinkedinIn className="cursor-pointer p-[5px] text-amber-50 text-[30px] lg:text-[35px] md:text-[35px] border border-y-zinc-400 rounded-sm hover:text-[#0094BA]" />
                    </a>
                </div>

                <div className="lg:mb-2">
                    <a href="https://github.com/RubiyaHud" target="_blank" rel="noopener noreferrer" >
                        <FaGithub className="cursor-pointer p-[5px] text-amber-50 text-[30px] lg:text-[35px] md:text-[35px] border border-y-zinc-400 rounded-sm hover:text-[#FB9703]" />
                    </a>
                </div>

                <div className="lg:mb-2">
                    <a href="https://codepen.io/RubiyaHud" target="_blank" rel="noopener noreferrer">
                        <FaCodepen className='cursor-pointer p-[5px] text-amber-50 text-[30px] lg:text-[35px] md:text-[35px] border border-y-zinc-400 rounded-sm  hover:text-[#09A7F9]' />
                    </a>
                </div>

                <div className="lg:mb-2">
                    <a href="https://dev.to/rubiyahud" target="_blank" rel="noopener noreferrer">
                        <FaDev className='cursor-pointer p-[5px] text-amber-50 text-[30px] lg:text-[35px] md:text-[35px] border border-y-zinc-400 rounded-sm  hover:text-[#24D3C8]' />
                    </a>
                </div>

                <div className="lg:mb-2">
                    <a href="https://medium.com/@rubiyahud" target="_blank" rel="noopener noreferrer">
                        <FaMedium className='cursor-pointer p-[5px] text-amber-50 text-[30px] lg:text-[35px] md:text-[35px] border border-y-zinc-400 rounded-sm  hover:text-[#34AB45]' />
                    </a>
                </div>
            </div>
            {/* Social Media Links End */}

        </section>
    );
};

export default Hero;
