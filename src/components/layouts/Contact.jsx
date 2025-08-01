import React from 'react'
import Container from '../Container'
import HeadingWithPara from '../HeadingWithPara'
import Reordering from '../Reordering'
import ContactMeForm from '../ContactMeForm'

const Contact = () => {
    return (
        <>
            <div className="py-[105px] px-7 bg-black" id="contact" >
                <Container>
                    <HeadingWithPara className={"mb-[80px]"} classD={""} classH={"text-indigo-500 "} classP={" pt-3"} hText={"Get in Touch"} pText={"Feel free to contact me anytimes"} />
                    <ContactMeForm />
                </Container>
            </div>

        </>
    )
}

export default Contact