import React from 'react'
import Container from '../Container'
import Image from '../Image'
import project1 from "../../assets/project1.png";
import HeadingWithPara from '../HeadingWithPara';

import { RiLiveLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import Flex from '../Flex';

const Portfolio2 = () => {
    return (
        <div class="border border-4 border-amber-300 py-[105px] ">
            <Container>
                <HeadingWithPara className={"mb-[50px] "} classH={"text-amber-300"} classP={"m-auto"} hText={"Portfolio"} pText={"Showcasing some of my best work"} />

                <div class="border border-4 border-red-200 mb-[55px] lg:flex lg:justify-between md:flex md:justify-between">
                    <div class="lg:w-[40%] md:w-[40%]">
                        <picture>
                            <Image className={"h-full rounded-lg mb-4"} imgSrc={project1} imgAlt={project1} />
                        </picture>
                    </div>
                    <div class="w-[55%]">
                        <h2 class="text-white text-2xl lg:text-3xl font-poppins font-bold mb-3">Creative Digital Agency</h2>
                        <p class="text-white/80 text-[13px] lg:text-[16px] font-poppins mb-4 ">
                            Landing page for a digital product design agency to showcase services and attract clients.
                        </p>
                        <h2 class="text-white text-[20px] font-bold mb-11">Tech Stack : <span className='text-[#5ED5F6]'> React </span>  | <span className='text-[#667EF7]'> Tailwind CSS </span>  | <span className='text-[#F3832F]'> JavaScript </span> </h2>

                        <Flex className='gap-x-2'>
                            <button class="bg-yellow-950 text-yellow-400 border border-yellow-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                                <span class="bg-yellow-400 shadow-yellow-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                <a href="https://creative-agency-react-three.vercel.app/" target="_blank" rel="noopener noreferrer" >
                                    <Flex className={"items-center gap-x-2"}>
                                        <RiLiveLine /> Live Demo
                                    </Flex>
                                </a>
                            </button>

                            <button class="bg-yellow-950 text-yellow-400 border border-yellow-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                                <span class="bg-yellow-400 shadow-yellow-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                <a href="https://github.com/RubiyaHud/CreativeAgency-React" target="_blank" rel="noopener noreferrer" >
                                    <Flex className={"items-center gap-x-2"}>

                                        <FaGithub /> Github Link
                                    </Flex>
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