import React from 'react'


import Image from './Image';

// https://www.hyperui.dev/components/marketing/cards
const BlogCard = ({BlogLink, BlogImage, BlogTitle, BlogDes, pClassName }) => {
    return (
        <>
            <div class="mb-9 block rounded-lg p-4 shadow-[1px_3px_15px_rgba(0,0,0,0.08)] shadow-indigo-100">
                {/* Blog-Post Image */}
                <Image className={"h-56 w-full rounded-md "} imgSrc={BlogImage} imgAlt={"BlogImage"} />

                {/* Blog-Post Description */}
                <div class="mt-2">
                    <h2 class="pt-2 font-inter font-semibold text-[17px] text-[#FFD700] "> {BlogTitle} </h2>
                    <p class= {`pt-3 pb-4  font-inter font-medium text-[15px] text-[#9F9F9F] leading-7 ${pClassName}`}>
                        {BlogDes}                        
                    </p>

                    {/* https://uiverse.io/louloudev59/curly-wasp-65 */}
                    <div class="mt-6 mb-3 text-center ">
                        <a href= {BlogLink} target="_blank" rel="noopener noreferrer" >
                        <button class="cursor-pointer m-auto shadow-[0px_2px_1px_rgba(0,0,0,0.08)] shadow-indigo-100 bg-gradient-to-r from-indigo-700 to-blue-400 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-full transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                            Read More
                        </button>
                        </a>
                    </div>
                </div>
            </div>

            

            
        </>
    )
}

export default BlogCard