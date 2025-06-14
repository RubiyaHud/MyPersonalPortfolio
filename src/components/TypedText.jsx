// TypedText.jsx
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        typed.current = new Typed(el.current, {
            strings: ["Developer.", "Designer.", "Creator."],
            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1500,
            loop: true,
            showCursor: true,
            cursorChar: "|",

            //   typeSpeed: 50,
            //         backSpeed: 25,
            //         fadeOut: true,
            //         loop: true,
        });

        return () => {
            typed.current.destroy();
        };
    }, []);

    return <span ref={el} className="text-xl font-bold" />;
};

export default TypedText;
