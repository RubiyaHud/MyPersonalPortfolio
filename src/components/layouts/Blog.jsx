import React from 'react'
import Container from '../Container'
import HeadingWithPara from '../HeadingWithPara'
import Flex from '../Flex'
import Image from "../Image";
import BlogPost1 from "../../assets/Concept-Based-Webpage.png";
import BlogPost2 from "../../assets/javaScriptVsJQuery.png";
import BlogPost3 from "../../assets/dom.png";
import BlogCard from '../BlogCard';


const Portfolio = () => {
    return (
        <div className="py-[105px] px-7 bg-[#111827]" id="blog">
            <Container>
                <HeadingWithPara className={"mb-[80px]"} classD={"float-right"} classH={"text-indigo-500 text-right"} classP={"text-right pt-3"} hText={"My Blog"} pText={"Check out my latest blog posts"} />

                <div class="block lg:flex lg:flex-nowrap lg:justify-center lg:gap-6 md:flex md:flex-nowrap md:justify-center md:gap-6">
                    <div className=' cursor-pointer transform transition duration-500 lg:hover:-translate-y-10 md:hover:-translate-y-10 hover:shadow-xl'>
                        <BlogCard BlogLink={"https://dev.to/rubiyahud/how-to-build-a-concept-based-webpage-a-developers-guide-to-purpose-driven-ui-pd9"} BlogImage={BlogPost1} BlogTitle={"How to Build a Concept-Based Webpage: A Developer’s Guide to Purpose-Driven UI"} BlogDes={"Learn to build purpose-driven webpages focused on clear concepts, great UX, and clean code practices."} />
                    </div>
                    <div className=' cursor-pointer transform transition duration-500 lg:hover:-translate-y-10 md:hover:-translate-y-10 hover:shadow-xl'>
                        <BlogCard BlogLink={"https://dev.to/rubiyahud/javascript-vs-jquery-whats-the-difference-and-which-should-you-use-c9d"} pClassName={"pt-9"} BlogImage={BlogPost2} BlogTitle={"JavaScript vs jQuery: What’s the Difference and Which Should You Use?"} BlogDes={"Compare JavaScript and jQuery to understand their differences and know when to use each in modern web dev."} />
                    </div>
                    <div className=' cursor-pointer transform transition duration-500 lg:hover:-translate-y-10 md:hover:-translate-y-10 hover:shadow-xl'>
                        <BlogCard pClassName={"pt-15"} BlogLink="https://dev.to/rubiyahud/dom-document-object-model-2537" BlogImage={BlogPost3} BlogTitle={"DOM (Document Object Model)"} BlogDes={"Understand the DOM, how it represents HTML in memory, and how JavaScript interacts with page elements."} />
                    </div>

                </div>

            </Container>
        </div>
    )
}

export default Portfolio