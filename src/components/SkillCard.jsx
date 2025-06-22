import React from 'react'
import Image from './Image'

const SkillCard = ({ SkillLogo, SkillName, SkillDes, classD, classImg, classH, classP }) => {
    return (
        <>
            <div className={`${classD} text-center mx-0 px-3 pt-3 w-[200px] h-[200px] bg-[#020617] rounded-[12px] border border-purple-200`}>
                <Image imgSrc={SkillLogo} imgAlt={SkillName} className={`${classImg} m-auto`} />
                <h4 className={`${classH} text-white text-[22px] font-bold capitalize py-3`}> {SkillName} </h4>
                <p className={`${classP} text-[#6B7280] text-[13px] font-normal pb-2`}> {SkillDes} </p>
            </div>
        </>
    )
}

export default SkillCard