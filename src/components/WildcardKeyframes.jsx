import { motion } from "framer-motion"

export default function WildcardKeyframes({ children }) {
    return (

        //# Install Framer Motion
        // Run the following command in your project directory:
        // npm install framer-motion
        
        <motion.div
            // Custom CSS class
            style={box}

            // Optional: TailwindCss class
            // className="cursor-pointer"

            /**
             * Setting the initial keyframe to "null" will use
             * the current value to allow for interruptable keyframes.
             */

            whileHover={{
                scale: [null, 1.1, 1.2],
                transition: {
                    duration: 0.5,
                    times: [0, 0.6, 1],
                    ease: ["easeInOut", "easeOut"],
                },
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}


/**
 * ==============   Styles   ================
 */

const box = {
    // width: 100,
    // height: 100,
    // backgroundColor: "#0cdcf7",
    // borderRadius: 5,
    cursor: "pointer",
}
