### Initial Setup 
- Create empty folder named "MyPersonalPortfolio"
- Open the folder in VS Code
- Create React Project using [Vite](https://vite.dev/guide/)
- Intall TailwindCSS using as a [Vite plugin](https://tailwindcss.com/docs/installation/using-vite)
- Organize the files and folders:
    - Create `components` folder inside `src` folder and  create `layouts` folder inside it. `components` contains all small parts/components, layouts and pages, whereas `layouts` contains sections of the webpage.
- Install [daisyUI](https://daisyui.com/docs/install/) as a Tailwind plugin
- Install [React Icons](https://react-icons.github.io/react-icons/), Open terminal ` ctrl + ` `tilda or back tick ` in VS Code and type the code below:
       ```
       npm install react-icons --save
       ```
     Select icon and import the icon component where needed, for example:
       ```
       import { FaBeer } from 'react-icons/fa';
    
       class Question extends React.Component {
         render() {
              return <h3> Lets go for a <FaBeer />? </h3>
         }
       }
       ```
- Install [Typed.js](https://github.com/mattboldt/typed.js/?tab=readme-ov-file#options) to the React project
- Install  [Install Framer Motion](https://examples.motion.dev/react/keyframes-wildcards/tutorial), Run the following command in your project directory:
  ```
      npm install framer-motion
  ```
  [WildcardKeyframes Source Code Link](https://motion.dev/docs/react-animation)
  ```jsx
             import { motion } from "framer-motion"
            
            export default function WildcardKeyframes() {
                return (
                    <motion.div
                        style={box}
                        /**
                         * Setting the initial keyframe to "null" will use
                         * the current value to allow for interruptable keyframes.
                         */
                        whileHover={{
                            scale: [null, 1.1, 1.6],
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
                    />
                )
            }
            
            /**
             * ==============   Styles   ================
             */
            
            const box = {
                width: 100,
                height: 100,
                backgroundColor: "#0cdcf7",
                borderRadius: 5,
            }

  ```
### Responsive Navbar by daisyUI
- Create a file `Navbar.jsx`inside `components`, then type `rafce` and `press enter`.
- Copy-paste the JSX code from [daisyUI Navbar](https://daisyui.com/components/navbar/#responsive-dropdown-menu-on-small-screen-center-menu-on-large-screen)

### Add [Typed.js](https://github.com/mattboldt/typed.js/?tab=readme-ov-file#options) to the React project, follow these steps:
- Run this in your project directory:
  ```
  npm install typed.js
  ```
  
     
  
- Typed.js works by attaching to a DOM element, so we'll usually use it in `useEffect` with a `ref`. Here's a basic example:
  ``` jsx
          // TypedText.jsx
        import React, { useEffect, useRef } from "react";
        import Typed from "typed.js";
        
        const TypedText = () => {
          const el = useRef(null);
          const typed = useRef(null);
        
          useEffect(() => {
            typed.current = new Typed(el.current, {
              strings: ["Hello", "World", "React + Typed.js!"],
              typeSpeed: 50,
              backSpeed: 25,
              loop: true,
            });
        
            return () => {
              typed.current.destroy();
            };
          }, []);
        
          return <span ref={el} className="text-xl font-bold" />;
        };
        
        export default TypedText;

  ```

- Use the Component in the App
  
  ``` jsx
      import TypedText from "./TypedText";
    
    function App() {
      return (
        <div className="p-4">
          <h1>Welcome to My Site</h1>
          <TypedText />
        </div>
      );
    }

  ```

### Notes:
![image](https://github.com/user-attachments/assets/c290f5d6-1246-4b7f-8f05-4c137c9ea58d)





