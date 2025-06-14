### Initial Setup 
- Create empty folder named "MyPersonalPortfolio"
- Open the folder in VS Code
- Create React Project using [Vite](https://vite.dev/guide/)
- Intall TailwindCSS using as a [Vite plugin](https://tailwindcss.com/docs/installation/using-vite)
- Organize the files and folders:
    - Create `components` folder inside `src` folder and  create `layouts` folder inside it. `components` contains all small parts/components, layouts and pages, whereas `layouts` contains sections of the webpage.
- Install [daisyUI](https://daisyui.com/docs/install/) as a Tailwind plugin
- Install [Typed.js](https://github.com/mattboldt/typed.js/?tab=readme-ov-file#options) to the React project

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
