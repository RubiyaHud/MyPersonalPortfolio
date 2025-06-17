import React from 'react'

const HeadingWithPara = ({hText, pText, className, classH, classP}) => {
    return (
        <div className={`${className}`}>
            <h3 className={`${classH} font-poppins font-bold text-[39px] lg:text-[46px] leading-[46px] text-[#F0F0F0]`}> {hText} </h3>
            <p className={`${classP} font-poppins font-medium text-[15px] leading-7 text-[#9F9F9F] `}> {pText} </p>
        </div>
    )
}

export default HeadingWithPara