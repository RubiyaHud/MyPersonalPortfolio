import React from 'react'
import Container from '../Container'
import HeadingWithPara from '../HeadingWithPara'
import Flex from '../Flex'
import { RiLiveLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import project1 from "../../assets/project1.png";
import Image from "../Image";

const Portfolio = () => {
    return (
        <div className=" py-[250px]">
            <Container className={""}>
                <div>
                    <HeadingWithPara className={"mb-[50px] "} classH={"text-center"} classP={"text-center m-auto"} hText={"Portfolio"} pText={"Showcasing some of my best work"} />
                </div>



                <div class="text-center p-0 block lg:flex lg:flex-nowrap  lg:justify-center lg:gap-6 md:flex md:flex-nowrap md:justify-center md:gap-6">

                    <div class="p-2 inline-block sm:w-[350px] lg:w-1/3 md:w-[350px] rounded-lg bg-black border border-white/10  shadow-[0_0_10px_#f472b6,0_0_20px_#60a5fa,0_0_15px_#34d399] ">
                        <Image className={"rounded-lg mb-4"} imgSrc={project1} imgAlt={project1} />
                        <h2 class="text-center  text-white text-3xl font-bold mb-4">Creative Digital Agency</h2>
                        {/* <p class="text-center text-sm text-gray-600 mb-4 ">
                            Landing page for a digital product design agency to showcase services and attract clients.
                        </p> */}
                        <p class="text-white/80 mb-4 ">
                            Landing page for a digital product design agency to showcase services and attract clients.
                        </p>

                        <Flex className={"justify-center gap-2.5"}>
                            <div class="text-center">
                                <button class="bg-indigo-600 text-white font-bold py-2 px-4 rounded">
                                    <a href="https://creative-agency-react-three.vercel.app/" target="_blank" rel="noopener noreferrer" >
                                        <Flex className={"items-center gap-x-2"}>
                                            <RiLiveLine /> Live Demo
                                        </Flex>
                                    </a>
                                </button>

                            </div>
                            <div class="text-center">
                                <button class="bg-indigo-600 text-white font-bold py-2 px-4 rounded">
                                    <a href="https://github.com/RubiyaHud/CreativeAgency-React" target="_blank" rel="noopener noreferrer" >
                                        <Flex className={"items-center gap-x-2"}>

                                            <FaGithub /> Github Link
                                        </Flex>
                                    </a>
                                </button>
                            </div>
                        </Flex>
                    </div>
                    <div class="p-2 inline-block sm:w-[350px] lg:w-1/3 md:w-[350px] rounded-lg bg-white border border-cyan-500 shadow-[0_0_12px_#22d3ee] rounded-xl p-6">
                        <Image className={"rounded-lg mb-4"} imgSrc={project1} imgAlt={project1} />
                        <h2 class="text-center  text-white text-3xl font-bold mb-4">Creative Digital Agency</h2>
                        {/* <p class="text-center text-sm text-gray-600 mb-4 ">
                            Landing page for a digital product design agency to showcase services and attract clients.
                        </p> */}
                        <p class="text-white/80 mb-4 ">
                            Landing page for a digital product design agency to showcase services and attract clients.
                        </p>

                        <Flex className={"justify-center gap-2.5"}>
                            <div class="text-center">
                                <button class="bg-indigo-600 text-white font-bold py-2 px-4 rounded">
                                    <a href="https://creative-agency-react-three.vercel.app/" target="_blank" rel="noopener noreferrer" >
                                        <Flex className={"items-center gap-x-2"}>
                                            <RiLiveLine /> Live Demo
                                        </Flex>
                                    </a>
                                </button>
                                {/* <!-- From Uiverse.io by themrsami --> */}
                                <button
                                    class="relative px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
                                >
                                    <span class="flex items-center space-x-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            fill="none"
                                            class="w-6 h-6 text-purple-500 group-hover:text-white transition-colors duration-300"
                                        >
                                            <path
                                                d="M5 13l4 4L19 7"
                                                stroke-width="2"
                                                stroke-linejoin="round"
                                                stroke-linecap="round"
                                            ></path>
                                        </svg>
                                        <span>Subscribe</span>
                                    </span>
                                    <span
                                        class="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-indigo-500/20"
                                    ></span>
                                </button>


                            </div>
                            <div class="text-center">
                                <button class="bg-indigo-600 text-white font-bold py-2 px-4 rounded">
                                    <a href="https://github.com/RubiyaHud/CreativeAgency-React" target="_blank" rel="noopener noreferrer" >
                                        <Flex className={"items-center gap-x-2"}>

                                            <FaGithub /> Github Link
                                        </Flex>
                                    </a>
                                </button>
                            </div>
                        </Flex>
                    </div>
                    <div class="p-2 inline-block sm:w-[350px] lg:w-1/3 md:w-[350px] rounded-lg bg-black border border-white/10  shadow-[0_0_10px_#f472b6,0_0_20px_#60a5fa,0_0_15px_#34d399] ">
                        <Image className={"rounded-lg mb-4"} imgSrc={project1} imgAlt={project1} />
                        <h2 class="text-center  text-white text-3xl font-bold mb-4">Creative Digital Agency</h2>
                        {/* <p class="text-center text-sm text-gray-600 mb-4 ">
                            Landing page for a digital product design agency to showcase services and attract clients.
                        </p> */}
                        <p class="text-white/80 mb-4 ">
                            Landing page for a digital product design agency to showcase services and attract clients.
                        </p>

                        <Flex className={"justify-center gap-2.5"}>
                            <div class="text-center">
                                <button class="bg-indigo-600 text-white font-bold py-2 px-4 rounded">
                                    <a href="https://creative-agency-react-three.vercel.app/" target="_blank" rel="noopener noreferrer" >
                                        <Flex className={"items-center gap-x-2"}>
                                            <RiLiveLine /> Live Demo
                                        </Flex>
                                    </a>
                                </button>

                            </div>
                            <div class="text-center">
                                <button class="bg-indigo-600 text-white font-bold py-2 px-4 rounded">
                                    <a href="https://github.com/RubiyaHud/CreativeAgency-React" target="_blank" rel="noopener noreferrer" >
                                        <Flex className={"items-center gap-x-2"}>

                                            <FaGithub /> Github Link
                                        </Flex>
                                    </a>
                                </button>
                            </div>
                        </Flex>
                    </div>





                    {/* <div class=" sm:w-[350px] lg:w-[350px] bg-white rounded-lg shadow p-2">
                        <img class="rounded-lg mb-4" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoe" />
                        <h2 class="text-center font-semibold text-lg">Card Title</h2>
                        <p class="text-center text-sm text-gray-600 mb-4">
                            A card component has a figure, a body part, and inside body there are title and actions parts
                        </p>
                        <div class="text-center">
                            <button class="bg-indigo-600 text-white font-bold py-2 px-4 rounded">Buy Now</button>
                        </div>
                    </div>
                    <div class=" sm:w-[350px] lg:w-[350px] bg-white rounded-lg shadow p-2">
                        <img class="rounded-lg mb-4" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoe" />
                        <h2 class="text-center font-semibold text-lg">Card Title</h2>
                        <p class="text-center text-sm text-gray-600 mb-4">
                            A card component has a figure, a body part, and inside body there are title and actions parts
                        </p>
                        <div class="text-center">
                            <button class="bg-indigo-600 text-white font-bold py-2 px-4 rounded">Buy Now</button>
                        </div>
                    </div> */}


                </div>

            </Container>
        </div>
    )
}

export default Portfolio