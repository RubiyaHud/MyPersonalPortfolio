### 📦 Install / Initial Setup 
- Create empty folder named "MyPersonalPortfolio"
- Open the folder in VS Code
- Create React Project using [Vite](https://vite.dev/guide/)
- Intall TailwindCSS using as a [Vite plugin](https://tailwindcss.com/docs/installation/using-vite)
- Organize the files and folders:
    - Create `components` folder inside `src` folder and  create `layouts` folder inside it. `components` contains all small parts/components, layouts and pages, whereas `layouts` contains sections of the webpage.
- Install [daisyUI](https://daisyui.com/docs/install/) as a Tailwind plugin
- Install [React Icons](https://react-icons.github.io/react-icons/), Run the following command in your project directory:
  
    
       npm install react-icons --save
       
  
 Select icon and import the icon component where needed, for example:
  
      
       import { FaBeer } from 'react-icons/fa';
    
       class Question extends React.Component {
         render() {
              return <h3> Lets go for a <FaBeer />? </h3>
         }
       }

- 🔧 Required Icons (from lucide-react)
      Install and import:
      ```bash
          npm install lucide-react
      ```
  
- Install [Typed.js](https://github.com/mattboldt/typed.js/?tab=readme-ov-file#options) to the React project
- Install  [Install Framer Motion](https://examples.motion.dev/react/keyframes-wildcards/tutorial), Run the following command in your project directory:
  ```
      npm install framer-motion
  ```

  ```js
              import {
          Code2,
          MonitorSmartphone,
          LayoutGrid,
          Palette,
          Smartphone,
          BookText
        } from 'lucide-react';

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
### ✅ Responsive Navbar by daisyUI
- Create a file `Navbar.jsx`inside `components`, then type `rafce` and `press enter`.
- Copy-paste the JSX code from [daisyUI Navbar](https://daisyui.com/components/navbar/#responsive-dropdown-menu-on-small-screen-center-menu-on-large-screen)

### ✅ Add a customized favicon to the React project
   1. Prepare Your Favicon
      - Use a `.ico`, `.png`, or `.svg` file.
      - Recommended size: `32x32` or `64x64`.
      - Convert the image into favicon by resizing it. Online converter link : [favicon generator](https://favicon.io/favicon-converter/)
   2. Add the Favicon File
       Place your custom favicon in the public folder of your React project:
       ```arduino
                   your-project/
        ├── public/
        │   ├── favicon.ico       <-- put your custom favicon here
        │   └── ...
        ├── src/
        │   └── ...

       ```
        You can rename it to favicon.ico or keep a custom name like my-icon.png.

3. Update the <head> in public/index.html    
          Open `public/index.html` and update (or add) the favicon link.   
          If you're using `.ico`:
   ```html          
               <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
   ```
   
  If you're using `.png` or `.svg`:

   ```html
                <link rel="icon" type="image/png" href="%PUBLIC_URL%/my-icon.png" />
   ```
  
### ✅ Add [Typed.js](https://github.com/mattboldt/typed.js/?tab=readme-ov-file#options) to the React project, follow these steps:
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
### ✅ Animated Shuffling Divs (React + Tailwind)
```jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Example items — you can replace these with any JSX content
const initialItems = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  color: `hsl(${i * 40}, 70%, 60%)`
}));

// Utility to shuffle array
const shuffle = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const ShufflingGrid = () => {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => shuffle(prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="h-24 rounded-xl shadow-md"
            style={{ backgroundColor: item.color }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ShufflingGrid;

```
#### 📦 Required Dependencies
You'll need framer-motion:
```bash
npm install framer-motion
```
#### 💡 Summary
- The `layout` prop on `motion.div` enables layout animations when the items change position.
- The shuffling happens every `3s` via `setInterval`.
- Tailwind's `grid` classes handle layout, and you can adjust `grid-cols-3`, `gap-4`, etc., as needed.

  
### ✅ Notes:
![image](https://github.com/user-attachments/assets/c290f5d6-1246-4b7f-8f05-4c137c9ea58d)





