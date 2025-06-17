import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaLinkedinIn, FaGithub, FaDev, FaCodepen, FaMedium  } from "react-icons/fa";

import logoImg from "../../assets/logo.png";
import Image from "../Image";

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
            <div className="navbar bg-bgC">
                {/* Navbar Start: Logo */}
                <div className="navbar-start lg:pl-[50px]">
                    <Image imgSrc={logoImg} imgAlt={logoImg} />
                </div>

                {/* Navbar Center (optional, can be used if needed) */}
                {/* <div className="navbar-center hidden lg:flex"> ... </div> */}

                {/* Navbar End: Links (Desktop) & Menu Icon (Mobile) */}
                <div className="navbar-end w-full justify-end lg:pt-5 lg:pr-[50px]">

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex menu menu-horizontal px-1 font-poppins text-FontC text-[15px] font-normal leading-7">
                        <li><a> About </a></li>
                        <li><a> Resume </a></li>
                        <li><a> Portfolio </a></li>
                        <li><a> Skills </a></li>
                        <li><a> Services </a></li>
                        <li><a> Blog </a></li>
                        <li><a> Contact </a></li>
                    </ul>

                    {/* Mobile Menu Dropdown */}
                    <div className="dropdown lg:hidden ">
                        <div tabIndex={0} role="button" className="btn btn-ghost bg-base-100 shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <div className="">
                            <ul tabIndex={0}
                                className=" menu menu-sm dropdown-content right-0 bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow font-poppins text-bgC text-[15px] font-normal leading-7"
                            >
                                <li><a>About</a></li>
                                <li><a>Resume</a></li>
                                <li><a>Portfolio</a></li>
                                <li><a>Skills</a></li>
                                <li><a>Services</a></li>
                                <li><a>Blog</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar part End */}

            {/* Body Text Start */}
            <div className="lg:mt-52 mt-36">
                <h2 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-poppins font-medium text-indigo-400 "> Hi, I am </h2>
                <h1 className="mb-4 text-4xl leading-[57.6px] md:text-[62px] md:leading-[74.4px] lg:text-[70px] lg:leading-[84px] font-poppins font-bold text-white ">
                    Rubiya Yasmin Reba
                </h1>

                <h2 className="text-[23px] md:text-2xl lg:text-3xl font-medium font-poppins">
                    <span ref={el} />
                </h2>
            </div>
            {/* Body Text End */}

            {/* Social Media Links Start */}
            <div className="absolute bottom-13 right-10 flex gap-2 lg:block ">
                <div className="lg:mb-2">
                    <a href="https://www.linkedin.com/in/rubiyahud/" target="_blank" rel="noopener noreferrer" >
                        <FaLinkedinIn className="cursor-pointer p-[5px] text-amber-50 text-[35px] border border-y-zinc-400 rounded-sm hover:text-[#0094BA]" />
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
                
                <div className="lg:mb-2">
                    <a href="https://medium.com/@rubiyahud" target="_blank" rel="noopener noreferrer">
                        <FaMedium  className='cursor-pointer p-[5px] text-amber-50 text-[35px] border border-y-zinc-400 rounded-sm  hover:text-[#34AB45]' />
                    </a>
                </div>
            </div>
            {/* Social Media Links End */}            

        </section>
    );
};

export default Hero;
