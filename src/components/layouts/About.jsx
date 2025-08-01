import React from 'react'
import Container from '../Container'
import HeadingWithPara from '../HeadingWithPara'
import Flex from '../Flex'
import Image from "../Image";
import RubiyaHud2 from "../../assets/AboutMe-MyImage.png";
import RubiyaHud3 from "../../assets/AboutMe-MyImage-Circle.png";

const About = () => {
    return (
        <>
            <div class="py-[105px] px-7 bg-[#111827]" id="about">
                <Container>
                    <HeadingWithPara className={"mb-[80px]"} classD={"m-auto"} classH={"text-indigo-500 text-center"} classP={"text-center"} hText={"About Me"} pText={"Get to know me"} />
                    <div className={"lg:flex lg:gap-20"}>
                        {/*------- My Image start --------*/}
                        {/* Image for lg and md */}
                        {/* <div className='hidden lg:block md:block lg:w-[420px] md:w-[420px]'>
                            <Image className={"rounded-2xl"} imgSrc={RubiyaHud2} imgAlt={RubiyaHud2} />
                        </div> */}
                        {/* Image for sm */}
                        {/* <div className=' lg:hidden md:hidden m-auto'>
                            <Image className={"rounded-2xl"} imgSrc={RubiyaHud3} imgAlt={RubiyaHud3} />
                        </div> */}
                        <div className=' lg:w-[35%]'>
                            {/* Image for lg and md */}
                            <Image className={"rounded-2xl hidden lg:block"} imgSrc={RubiyaHud2} imgAlt={RubiyaHud2} />
                            <Image className={"m-auto mb-2 block lg:hidden"} imgSrc={RubiyaHud3} imgAlt={RubiyaHud3} />


                        </div>
                        {/*------ My Image end -----------*/}

                        {/* About Me text start */}
                        {/* <div className={"px-[5px] m-auto text-center lg:text-left md:text-left lg:w-[680px] md:w-[680px]"}> */}
                        <div className={"px-[5px]  text-center lg:text-left  lg:w-[50%] "}>
                            <h3 className='pt-[20px] text-indigo-500 font-poppins font-medium text-2xl leading-7'>Who am i?</h3>
                            <h2 className='pt-[10px] pr-[5px] lg:pr-[10px] text-[#F0F0F0] font-poppins font-bold text-[31px] leading-[49.6px]'>I'm Rubiya Yasmin, a frontend web developer with a PhD in Computer Science</h2>
                            <p className='pt-[10px] lg:pr-[85px]  text-[#9F9F9F] font-poppins font-normal text-[15px] leading-[29.3px]'>I'm a frontend web developer focused on creating clean, responsive, and user-friendly websites. I use React and Tailwind CSS to build modern interfaces. Passionate about learning and growth, I turn ideas into functional experiences with attention to detail and a drive for best practices.</p>

                            {/* Divider line start */}
                            <div className="divider divider-primary"></div>
                            {/* Divider line end */}

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
                        </div>
                        {/* About Me text end */}

                    </div>
                </Container>

            </div>
        </>
    )
}

export default About