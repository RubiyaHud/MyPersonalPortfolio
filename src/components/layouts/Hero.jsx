import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaLinkedinIn, FaGithub, FaFacebookF, FaDev, FaCodepen } from "react-icons/fa";

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
        <section className="min-h-screen mx-auto pt-[100px] lg:pt-55 lg:px-4  bg-bgC text-white text-center ">
            <h2 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-poppins font-medium text-indigo-400 "> Hi, I am </h2>
            <h1 className="mb-4 text-4xl leading-[57.6px] md:text-[62px] md:leading-[74.4px] lg:text-[70px] lg:leading-[84px] font-poppins font-bold text-white ">
                Rubiya Yasmin Reba
            </h1>

            <h2 className="text-[23px] md:text-2xl lg:text-3xl font-medium font-poppins">
                <span ref={el} />
            </h2>

            <div className="absolute bottom-13 right-10 flex gap-2 lg:block ">

                <div className="lg:mb-2">
                    <a href="https://www.linkedin.com/in/rubiyahud/" target="_blank" rel="noopener noreferrer" >
                        <FaLinkedinIn className="cursor-pointer p-[5px] text-amber-50 text-[35px] border border-y-zinc-400 rounded-sm hover:text-[#FB01AA]" />
                    </a>
                </div>

                <div className="lg:mb-2">
                    <a href="https://github.com/RubiyaHud" target="_blank" rel="noopener noreferrer" >
                        <FaGithub className="cursor-pointer p-[5px] text-amber-50 text-[35px] border border-y-zinc-400 rounded-sm hover:text-[#FB9703]" />
                    </a>
                </div>

                <div className="lg:mb-2">
                    <a href="https://codepen.io/RubiyaHud" target="_blank" rel="noopener noreferrer">
                        <FaCodepen className='cursor-pointer p-[5px] text-amber-50 text-[35px] border border-y-zinc-400 rounded-sm  hover:text-[#09A7F9]' />
                    </a>
                </div>

                <div className="lg:mb-2">
                    <a href="https://dev.to/rubiyahud" target="_blank" rel="noopener noreferrer">
                        <FaDev className='cursor-pointer p-[5px] text-amber-50 text-[35px] border border-y-zinc-400 rounded-sm  hover:text-[#24D3C8]' />
                    </a>
                </div>


            </div>



        </section>
    );
};

export default Hero;
