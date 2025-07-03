import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaDev, FaCodepen, FaMedium } from "react-icons/fa";

const ContactMeForm = () => {
    return (
        <>
            {/* grid lg:grid-cols-2 items-start gap-12 p-8 max-w-6xl max-lg:max-w-2xl */}
            <div className="p-5 lg:flex md:flex lg:gap-3 lg:justify-between md:justify-between border border-gray-700 bg-[rgba(15,15,15,0.46)] rounded-md drop-shadow-lg drop-shadow-cyan-500/50 ">
                {/* Let's Talk Part */}
                <div className='lg:w-[50%] md:w-[50%]'>
                    <h2 className=" mb-4 font-poppins font-bold text-2xl leading-[36px] text-[#f0f0f0]">Let's Talk</h2>
                    <p className="font-poppins font-normal text-[16px] leading-[29.3px] text-gray-400">
                        Always available for freelance work if the right project comes along,
                    </p>
                    <p className="font-poppins font-normal text-[16px] leading-[29.3px] text-gray-400"> Feel free to contact me! </p>

                    {/* Name and Email */}
                    <div className={"lg:flex justify-between "}>
                        {/* <!-- Name --> */}
                        <div className="mt-12">
                            <h2 className="font-poppins font-semibold text-[17px] leading-[18px] text-[#f0f0f0]">Name</h2>
                            <ul className="mt-4">
                                <li className="flex items-center">
                                    {/* Circle around the icon */}
                                    <div className="w-12 h-12 rounded-full border border-[#f0f0f0] flex items-center justify-center">
                                        <MdOutlineDriveFileRenameOutline className="text-blue-500 text-2xl" />
                                    </div>
                                    <p class="text-sm ml-4">
                                        <span class="font-poppins font-medium text-[17px] leading-[27.3px] text-blue-400">Rubiya Yasmin</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Email --> */}
                        <div className="mt-12">
                            <h2 className="font-poppins font-semibold text-[17px] leading-[18px] text-[#f0f0f0]">Email Me</h2>
                            <ul className="mt-4">
                                <li className="flex items-center">
                                    {/* Circle around the icon */}
                                    <div className="w-12 h-12 rounded-full border border-[#f0f0f0] flex items-center justify-center">
                                        <TfiEmail className="text-blue-500 text-2xl" />
                                    </div>
                                    <a href="mailto:rubiya.hud@gmail.com" class="text-sm ml-4">
                                        <span class="font-poppins font-normal text-[17px] leading-[27.3px] text-blue-400">rubiya.hud@gmail.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Socials --> */}
                    <div class="mt-12">
                        <h2 class="font-poppins font-semibold text-[17px] leading-[18px] text-[#f0f0f0]">Socials</h2>
                        <ul class="flex mt-4 space-x-4">

                            {/* <!-- LinkedIn --> */}
                            <li class="cursor-pointer bg-black border border-[#f0f0f0] h-10 w-10 rounded-full flex items-center justify-center shrink-0 transition duration-300 hover:bg-[#1877F2] hover:ring-4 hover:ring-blue-400 hover:ring-offset-2 hover:ring-offset-gray-900">
                                <a
                                    href="https://www.linkedin.com/in/rubiyahud/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn className="cursor-pointer text-white" />
                                </a>
                            </li>
                            {/* <!-- Github --> */}
                            <li class="cursor-pointer bg-black border border-[#f0f0f0] h-10 w-10 rounded-full flex items-center justify-center shrink-0 
             transition duration-300 hover:bg-[#1877F2] hover:ring-4 hover:ring-blue-400 hover:ring-offset-2 hover:ring-offset-gray-900">
                                <a
                                    href="https://github.com/RubiyaHud"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="cursor-pointer text-white" />
                                </a>
                            </li>
                            {/* <!-- Codepen --> */}
                            <li className="cursor-pointer bg-black border border-[#f0f0f0] h-10 w-10 rounded-full flex items-center justify-center shrink-0 transition duration-300 hover:bg-[#1877F2] hover:ring-4 hover:ring-blue-400 hover:ring-offset-2 hover:ring-offset-gray-900">
                                <a
                                    href="https://codepen.io/RubiyaHud"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaCodepen className="cursor-pointer text-white" />
                                </a>
                            </li>
                            {/* <!-- DEv.to --> */}
                            <li className="cursor-pointer bg-black border border-[#f0f0f0] h-10 w-10 rounded-full flex items-center justify-center shrink-0 transition duration-300 hover:bg-[#1877F2] hover:ring-4 hover:ring-blue-400 hover:ring-offset-2 hover:ring-offset-gray-900">
                                <a
                                    href="https://dev.to/rubiyahud"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >

                                    <FaDev className='cursor-pointer text-white' />
                                </a>
                            </li>
                            {/* <!-- Medium --> */}
                            <li className="cursor-pointer bg-black border border-[#f0f0f0] h-10 w-10 rounded-full flex items-center justify-center shrink-0 transition duration-300 hover:bg-[#1877F2] hover:ring-4 hover:ring-blue-400 hover:ring-offset-2 hover:ring-offset-gray-900">
                                <a
                                    href="https://medium.com/@rubiyahud"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaMedium className="cursor-pointer text-white" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <!-- Contact Form --> */}
                <div className='mt-9 lg:w-[50%] md:w-[50%]'>
                    <form class="space-y-4">
                        <input type="text" placeholder="Name" class="w-full text-white bg-gray-900 rounded-md py-2.5 px-4 border border-gray-700 text-sm outline-0 focus:border-blue-500" />
                        <input type="email" placeholder="Email" class="w-full text-white bg-gray-900 rounded-md py-2.5 px-4 border border-gray-700 text-sm outline-0 focus:border-blue-500" />
                        <input type="text" placeholder="Subject" class="w-full text-white bg-gray-900 rounded-md py-2.5 px-4 border border-gray-700 text-sm outline-0 focus:border-blue-500" />
                        <textarea placeholder="Message" rows="6" class="w-full text-white bg-gray-900 rounded-md px-4 border border-gray-700 text-sm pt-2.5 outline-0 focus:border-blue-500"></textarea>
                        <button type="button" class="w-full text-white bg-blue-600 hover:bg-blue-700 rounded-md text-[17px] font-semibold font-poppins px-4 py-2.5  cursor-pointer border-0 mt-2">Send message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactMeForm