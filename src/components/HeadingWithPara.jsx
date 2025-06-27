import React from 'react'
import DividerLine from './DividerLine'

const HeadingWithPara = ({hText, pText, className, classH, classP, classD}) => {
    return (
        <div className={`${className}`}>
            <h3 className={`${classH}  font-poppins font-bold text-[39px] lg:text-[46px] md:text-[40px] text-[#F0F0F0]`}> {hText} </h3>
            {/* <DividerLine className={classD} /> */}
            <div class={`${classD}  mb-1 w-[200px] h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_100%] bg-right animate-[move-bg-ltr_2s_linear_infinite]`}>
            </div>
            <p className={`${classP} font-poppins font-medium text-[16px]  text-[#9F9F9F] `}> {pText} </p>
        </div>
    )
}

export default HeadingWithPara