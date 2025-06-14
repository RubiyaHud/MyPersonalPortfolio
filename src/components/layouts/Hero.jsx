import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        typed.current = new Typed(el.current, {
            strings: [
                '<span class="text-red-400"> Frontend Web Developer. </span>',
                '<span class="text-green-400"> PhD in Computer Science. </span>',
                '<span class="text-blue-400"> Skilled in React and Tailwind CSS. </span>',                
                '<span class="text-blue-400"> Enthusiastic about Web Technologies. </span>',                
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

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium font-poppins">
                <span ref={el} />
            </h2>
            
        </section>
    );
};

export default Hero;
