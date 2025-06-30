
import Container from '../Container'
import Flex from '../Flex'
import HeadingWithPara from '../HeadingWithPara'
import figmaLogo from '../../assets/figma-logo.png'
import VScodeLogo from '../../assets/VScodeLogo.png'
import githubLogo from '../../assets/githubLogo.png'
import reactLogo from '../../assets/reactLogo.png'
import vercelLogo from '../../assets/vercelLogo.png'
import tailwindCssLogo from '../../assets/tailwindCssLogo.png'
import bootstrapLogo from '../../assets/bootstrapLogo.png'
import overleafLogo from '../../assets/overleafLogo.png'
import javaScriptLogo from '../../assets/javaScriptLogo.png'
import nextjsLogo from '../../assets/nextjsLogo.png'
import reduxLogo from '../../assets/reduxLogo.png'
import SkillCard from '../SkillCard'
import WildcardKeyframes from '../WildcardKeyframes'

const Skills = () => {
    return (
        <>
            <div className="py-[105px] px-7 bg-[#111827]" id="skills">
                <Container>
                    <HeadingWithPara className={"mb-[80px]"} classD={"float-right"} classH={"text-indigo-500 text-right"} classP={"text-right pt-3"} hText={"My Skills"} pText={"Modern Technologies I've Gained Skills In"} />

                    {/* <div class="block lg:flex lg:flex-nowrap lg:justify-center lg:gap-6 md:flex md:flex-nowrap md:justify-center md:gap-6">                        
                    </div> */}

                    <Flex className={"flex-wrap justify-evenly gap-x-4 gap-y-6"}>
                        <WildcardKeyframes children={<SkillCard SkillLogo={reactLogo} SkillName={"React"} SkillDes={"JavaScript library for building user interfaces"} />} />
                        <WildcardKeyframes children={<SkillCard SkillLogo={figmaLogo} SkillName={"Figma"} SkillDes={"A collaborative design tool for UI/UX and prototyping"} />} />
                        <WildcardKeyframes children={<SkillCard SkillLogo={reduxLogo} SkillName={"Redux"} SkillDes={"State management tool for predictable app data"} />} />
                        <WildcardKeyframes children={<SkillCard SkillLogo={nextjsLogo} SkillName={"Next.js"} SkillDes={"Framework for server-rendered React apps and SEO"} />} />
                        <WildcardKeyframes children={<SkillCard SkillLogo={javaScriptLogo} SkillName={"javaScript"} SkillDes={"A scripting language for dynamic web content"} />} />
                        <WildcardKeyframes children={<SkillCard SkillLogo={tailwindCssLogo} SkillName={"Tailwind CSS"} SkillDes={"Utility-first CSS framework for rapid UI development"} />} />
                        <WildcardKeyframes children={<SkillCard SkillLogo={bootstrapLogo} SkillName={"Bootstrap"} SkillDes={"Popular CSS framework for responsive web design"} />} />
                        <WildcardKeyframes children={<SkillCard SkillLogo={VScodeLogo} SkillName={"VS Code"} SkillDes={"Lightweight and powerful code editor by Microsoft"} />} />
                        <WildcardKeyframes children={<SkillCard SkillLogo={githubLogo} SkillName={"GitHub"} SkillDes={"Platform for hosting and collaborating on code"} />} />
                        <WildcardKeyframes children={<SkillCard classImg={"bg-amber-50"} SkillLogo={vercelLogo} SkillName={"Vercel"} SkillDes={"Platform for frontend deployment and hosting"} />} />
                        
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Skills