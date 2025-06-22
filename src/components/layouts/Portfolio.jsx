
import Container from '../Container'
import Image from '../Image'
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import HeadingWithPara from '../HeadingWithPara';

import { RiLiveLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import Flex from '../Flex';

import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import DividerLine from '../DividerLine';

const Portfolio2 = () => {
    return (
        <div class="py-[105px] px-7 bg-[#111827]" id="portfolio">
            <Container>
                <HeadingWithPara className={"mb-[80px]"}  classH={"text-indigo-500"} classP={""} hText={"Portfolio"} pText={"Showcasing some of my best work"} />
              
                {/* ---------------------------- Project 1 --------------------------------------------------*/}
                <div class=" lg:flex md:flex lg:justify-between md:justify-between">
                    {/* Project Image */}
                    <div class="lg:w-[50%] md:w-[50%] rounded-lg bg-black border border-white/10  shadow-[0_0_10px_#f472b6,0_0_2px_#60a5fa,0_0_1px_#34d399]">
                        <picture>
                            <Image className={"h-full rounded-lg"} imgSrc={project1} imgAlt={project1} />
                        </picture>
                    </div>

                    {/* Project Description */}
                    <div class="mt-10 lg:w-[40%] md:w-[40%]">
                        {/* Project Name */}
                        <h2 class="text-indigo-400 text-[20px] font-bold font-poppins mb-2">Project Name : <span className='pl-2 text-white text-[20px] font-medium font-poppins'>Creative Digital Agency</span> </h2>

                        {/* Tech Stack Logos start*/}
                        <Flex className={"items-center"}>
                            <h2 class="text-[#615FFF] text-[20px] font-bold pr-1 ">Tech Stack :</h2>
                            <div
                                class="hover:scale-x-105 transition-all duration-300 *:transition-all *:duration-300 flex text-2xl shadow-xl z-10  dark:bg-[#191818] "
                            >
                                <button
                                    class="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.9rem] before:px-1 before:content-['React'] before:bg-[#C27AFF] dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125  dark:bg-[#191818] rounded-full p-1"
                                >

                                    <FaReact className='text-[#00D8FF] text-4xl' />
                                </button>
                                <button
                                    class="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.9rem] before:px-1 before:content-['TailwindCSS'] before:bg-[#C27AFF] dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125  dark:bg-[#191818] rounded-full p-1"
                                >

                                    <RiTailwindCssFill className='text-[#06B6D4] text-4xl' />

                                </button>
                                <button
                                    class="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.9rem] before:px-1 before:content-['JavaScript'] before:bg-[#C27AFF] dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125  dark:bg-[#191818] rounded-full p-1"
                                >

                                    <IoLogoJavascript className='text-[#F7DF1D] text-4xl' />
                                </button>
                            </div>
                        </Flex>
                        {/* Tech Stack Logos End*/}

                        {/* Live demo, github link buttons */}
                        <Flex className='mt-5 gap-x-5'>
                            {/* <!-- From Uiverse.io by themrsami --> */}
                            <button
                                class="cursor-pointer relative px-3 py-3 lg:px-5 lg:py-3 bg-black text-white font-semibold rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
                            >
                                <a href="https://creative-agency-react-three.vercel.app/" target="_blank" rel="noopener noreferrer" >
                                    <span class="flex items-center space-x-2">
                                        <RiLiveLine />
                                        <span>Live Demo</span>
                                    </span>
                                </a>
                            </button>
                            {/* <!-- From Uiverse.io by themrsami --> */}
                            <button
                                class="cursor-pointer relative px-3 py-3 lg:px-5 lg:py-3 bg-black text-white font-semibold rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
                            >
                                <a href="https://github.com/RubiyaHud/CreativeAgency-React" target="_blank" rel="noopener noreferrer" >
                                    <span class="flex items-center space-x-2">
                                        <FaGithub />
                                        <span>Github Link</span>
                                    </span>
                                </a>
                            </button>
                        </Flex>

                    </div>
                </div>
                {/* <DividerLine /> */}
                {/* DividerLine */}
                <div class="border-t border-gray-300 shadow-xl shadow-gray-400 my-9"></div>

                {/* ---------------------------- Project 2 --------------------------------------------------*/}
                <div class=" lg:flex md:flex lg:justify-between md:justify-between">
                    {/* Project Image */}
                    <div class="lg:w-[50%] md:w-[50%] rounded-lg bg-black border border-white/10  shadow-[0_0_10px_#f472b6,0_0_2px_#60a5fa,0_0_1px_#34d399]">
                        <picture>
                            <Image className={"h-full rounded-lg"} imgSrc={project2} imgAlt={project2} />
                        </picture>
                    </div>

                    {/* Project Description */}
                    <div class="mt-10 lg:w-[40%] md:w-[40%]">
                        {/* Project Name */}
                        <h2 class="text-indigo-400 text-[20px] font-bold font-poppins mb-2">Project Name : <span className='pl-2 text-white text-[20px] font-medium font-poppins'>Comforty - eCommerce</span> </h2>

                        {/* Tech Stack Logos start*/}
                        <Flex className={"items-center"}>
                            <h2 class="text-[#615FFF] text-[20px] font-bold ">Tech Stack :</h2>
                            <div
                                class="hover:scale-x-105 transition-all duration-300 *:transition-all *:duration-300 flex justify-start text-2xl items-center shadow-xl z-10  dark:bg-[#191818] "
                            >

                                <button
                                    class="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.9rem] before:px-1 before:content-['Html'] before:bg-[#C27AFF] dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125  dark:bg-[#191818] rounded-full p-1"
                                >

                                    <FaHtml5 className='text-[#E54C21] text-4xl' />
                                </button>
                                <button
                                    class="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.9rem] before:px-1 before:content-['CSS'] before:bg-[#C27AFF] dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125  dark:bg-[#191818] rounded-full p-1"
                                >

                                    <FaCss3Alt className='text-[#006CB4] text-4xl' />

                                </button>
                                <button
                                    class="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.9rem] before:px-1 before:content-['JavaScript'] before:bg-[#C27AFF] dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125  dark:bg-[#191818] rounded-full p-1"
                                >

                                    <IoLogoJavascript className='text-[#F7DF1D] text-4xl' />
                                </button>
                                <button
                                    class="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.9rem] before:px-1 before:content-['Bootstrap'] before:bg-[#C27AFF] dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125  dark:bg-[#191818] rounded-full p-1"
                                >

                                    <FaBootstrap className='text-[#8913FD] text-4xl' />
                                </button>
                            </div>
                        </Flex>
                        {/* Tech Stack Logos End*/}

                        {/* Live demo, github link buttons */}
                        <Flex className='mt-5 gap-x-5'>
                            {/* <!-- From Uiverse.io by themrsami --> */}
                            <button
                                class="cursor-pointer relative px-3 py-3 lg:px-5 lg:py-3 bg-black text-white font-semibold rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
                            >
                                <a href="https://figma-comforty-e-commerce.vercel.app/" target="_blank" rel="noopener noreferrer" >
                                    <span class="flex items-center space-x-2">
                                        <RiLiveLine />
                                        <span>Live Demo</span>
                                    </span>
                                </a>
                            </button>
                            {/* <!-- From Uiverse.io by themrsami --> */}
                            <button
                                class="cursor-pointer relative px-3 py-3 lg:px-5 lg:py-3 bg-black text-white font-semibold rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
                            >
                                <a href="https://github.com/RubiyaHud/Figma-Comforty-eCommerce" target="_blank" rel="noopener noreferrer" >
                                    <span class="flex items-center space-x-2">
                                        <FaGithub />
                                        <span>Github Link</span>
                                    </span>
                                </a>
                            </button>
                        </Flex>

                    </div>
                </div>
                {/* <DividerLine /> */}

                {/* DividerLine */}
                <div class="border-t border-gray-300 shadow-xl shadow-gray-400 my-9"></div>

                {/* ---------------------------- Project 3 --------------------------------------------------*/}
                <div class=" lg:flex md:flex lg:justify-between md:justify-between">
                    {/* Project Image */}
                    <div class="lg:w-[50%] md:w-[50%] rounded-lg bg-black border border-white/10  shadow-[0_0_10px_#f472b6,0_0_2px_#60a5fa,0_0_1px_#34d399]">
                        <picture>
                            <Image className={"h-full rounded-lg"} imgSrc={project3} imgAlt={project3} />
                        </picture>
                    </div>

                    {/* Project Description */}
                    <div class="mt-10 lg:w-[40%] md:w-[40%]">
                        {/* Project Name */}
                        <h2 class="text-indigo-400 text-[20px] font-semibold font-poppins mb-2">Project Name : <span className='pl-2 text-white text-[20px] font-medium font-poppins'>About Me - Personal Portfolio</span> </h2>

                        {/* Tech Stack Logos start*/}
                        <Flex className={"items-center"}>
                            <h2 class="text-[#615FFF] text-[20px] font-bold ">Tech Stack :</h2>
                            <div
                                class="hover:scale-x-105 transition-all duration-300 *:transition-all *:duration-300 flex justify-start text-2xl items-center shadow-xl z-10  dark:bg-[#191818] "
                            >

                                <button
                                    class="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.9rem] before:px-1 before:content-['Html'] before:bg-[#C27AFF] dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125  dark:bg-[#191818] rounded-full p-1"
                                >

                                    <FaHtml5 className='text-[#E54C21] text-4xl' />
                                </button>
                                <button
                                    class="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.9rem] before:px-1 before:content-['CSS'] before:bg-[#C27AFF] dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125  dark:bg-[#191818] rounded-full p-1"
                                >

                                    <FaCss3Alt className='text-[#006CB4] text-4xl' />

                                </button>
                                <button
                                    class="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.9rem] before:px-1 before:content-['JavaScript'] before:bg-[#C27AFF] dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125  dark:bg-[#191818] rounded-full p-1"
                                >

                                    <IoLogoJavascript className='text-[#F7DF1D] text-4xl' />
                                </button>
                                <button
                                    class="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.9rem] before:px-1 before:content-['Bootstrap'] before:bg-[#C27AFF] dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125  dark:bg-[#191818] rounded-full p-1"
                                >

                                    <FaBootstrap className='text-[#8913FD] text-4xl' />
                                </button>
                            </div>
                        </Flex>
                        {/* Tech Stack Logos End*/}

                        {/* Live demo, github link buttons */}
                        <Flex className='mt-5 gap-x-5'>
                            {/* <!-- From Uiverse.io by themrsami --> */}
                            <button
                                class="cursor-pointer relative px-3 py-3 lg:px-5 lg:py-3 bg-black text-white font-semibold rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
                            >
                                <a href="https://figma-about-me-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" >
                                    <span class="flex items-center space-x-2">
                                        <RiLiveLine />
                                        <span>Live Demo</span>
                                    </span>
                                </a>
                            </button>
                            {/* <!-- From Uiverse.io by themrsami --> */}
                            <button
                                class="cursor-pointer relative px-3 py-3 lg:px-5 lg:py-3 bg-black text-white font-semibold rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
                            >
                                <a href="https://github.com/RubiyaHud/Figma-AboutMe-Portfolio" target="_blank" rel="noopener noreferrer" >
                                    <span class="flex items-center space-x-2">
                                        <FaGithub />
                                        <span>Github Link</span>
                                    </span>
                                </a>
                            </button>
                        </Flex>

                    </div>
                </div>

            </Container>

        </div>
    )
}

export default Portfolio2