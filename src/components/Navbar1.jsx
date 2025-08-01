import React, { useState } from 'react';
import Image from './Image';
import logoImg from "../assets/logo1.png";
import { Link } from "react-scroll";

const Navbar1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <nav className="bg-black border-gray-200  relative z-50">
      <div className="flex items-center justify-between p-4">
        {/* <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a> */}

        {/* Navbar Start: Logo */}
        <div className=" lg:pl-[50px] ">
          <Image imgSrc={logoImg} imgAlt={logoImg} />
        </div>


        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-indigo-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-indigo-400 focus:ring-2 focus:ring-indigo-600 "
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Mobile dropdown menu */}
        <div
          className={`
            ${isMenuOpen ? 'block' : 'hidden'}
            absolute top-full left-0 w-full bg-indigo-300  md:static md:block md:w-auto md:bg-transparent  md:border-0
          `}
          id="navbar-default"
        >
          {/* <ul className="cursor-pointer font-medium flex flex-col p-4 md:p-0 mt-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse"> */}
          <ul className="p-4 mt-0 mr-10 lg:flex md:flex lg:items-center md:items-center lg:gap-x-5 md:gap-x-5 ">
            <li className="cursor-pointer block py-2 px-3 font-poppins text-black lg:text-FontC md:text-FontC text-[16px] lg:text-[16px] md:text-[14px] font-normal leading-7 rounded hover:bg-gray-100 hover:text-indigo-700 hover:font-bold md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
              <Link to="about" smooth={true} duration={500}> About </Link>
            </li>
            <li className="cursor-pointer block py-2 px-3 font-poppins text-black lg:text-FontC md:text-FontC text-[16px] lg:text-[16px] md:text-[14px] font-normal leading-7 rounded hover:bg-gray-100 hover:text-indigo-700 hover:font-bold md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
              <Link to="portfolio" smooth={true} duration={500}> Portfolio </Link>
            </li>
            <li className="cursor-pointer block py-2 px-3 font-poppins text-black lg:text-FontC md:text-FontC text-[16px] lg:text-[16px] md:text-[14px] font-normal leading-7 rounded hover:bg-gray-100 hover:text-indigo-700 hover:font-bold md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
              <Link to="skills" smooth={true} duration={500}> Skills </Link>
            </li>
            <li className="cursor-pointer block py-2 px-3 font-poppins text-black lg:text-FontC md:text-FontC text-[16px] lg:text-[16px] md:text-[14px] font-normal leading-7 rounded hover:bg-gray-100 hover:text-indigo-700 hover:font-bold md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
              <Link to="services" smooth={true} duration={500}> Services </Link>
            </li>
            <li className="cursor-pointer block py-2 px-3 font-poppins text-black lg:text-FontC md:text-FontC text-[16px] lg:text-[16px] md:text-[14px] font-normal leading-7 rounded hover:bg-gray-100 hover:text-indigo-700 hover:font-bold md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
              <Link to="blog" smooth={true} duration={500}> Blog </Link>
            </li>
            <li className="cursor-pointer block py-2 px-3 font-poppins text-black lg:text-FontC md:text-FontC text-[16px] lg:text-[16px] md:text-[14px] font-normal leading-7 rounded hover:bg-gray-100 hover:text-indigo-700 hover:font-bold md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
              <Link to="contact" smooth={true} duration={500}> Contact </Link>
            </li>

            {/* Button "Download cv" start  */}
            {/* <!-- From Uiverse.io by carlosepcc --> */}

            <a
              href="https://drive.google.com/file/d/1TmSOUJc-JqjVYkjSL_7f0krjiczi9Qvx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              class="cursor-pointer px-6 py-2 lg:px-10 lg:py-2 transition-all bg-blue-500 
              text-white text-[16px] lg:text-[14px] md:text-[14px] font-poppins font-normal  
              rounded-lg border-blue-600 border-b-[4px] 
              hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              Download My CV
            </a>

            {/* Button "Download cv" end  */}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
