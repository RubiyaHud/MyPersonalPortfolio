import React from 'react'
import Navbar from '../Navbar'
import TypedText from '../TypedText'

const Home = () => {
    return (
        <>
            <div class="bg-amber-100 container mx-auto h-[500px] lg:pt-80 lg:px-4 pt-[166px]">
                <h1 className="text-center font-poppins font-medium text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-800"> Hi, I am </h1>
                <h1 class="text-center font-poppins font-bold text-5xl leading-[57.6px] md:text-[62px] md:leading-[74.4px] lg:text-[70px] lg:leading-[84px]">
                    Rubiya Yasmin Reba
                </h1>
                <TypedText />
            </div>
        </>
    )
}

export default Home