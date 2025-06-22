// sections/Services.jsx
import {
    Code2,
    MonitorSmartphone,
    LayoutGrid,
    Palette,
    Smartphone,
    BookText,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../Container';
import HeadingWithPara from '../HeadingWithPara';

const servicesData = [
    {
        id: 'frontend',
        title: 'Frontend Web Development',
        description:
            'Building performant, scalable, and accessible UIs with React & Tailwind CSS.',
        icon: <Code2 className="w-6 h-6 text-white" />,
        bg: 'bg-blue-500/10 border-blue-500 shadow-blue-500/10 mb-7 ',
        iconBg: 'bg-blue-500',
    },
    {
        id: 'spa',
        title: 'Single Page Applications (SPA)',
        description:
            'Fast, interactive, and modern web apps built with React and client-side routing.',
        icon: <MonitorSmartphone className="w-6 h-6 text-white" />,
        bg: 'bg-green-500/10 border-green-500 shadow-green-500/10 mb-7',
        iconBg: 'bg-green-500',
    },
    {
        id: 'components',
        title: 'Component Libraries',
        description:
            'Reusable, well-documented UI libraries with Tailwind CSS and Storybook.',
        icon: <LayoutGrid className="w-6 h-6 text-white" />,
        bg: 'bg-purple-500/10 border-purple-500 shadow-purple-500/10 mb-7',
        iconBg: 'bg-purple-500',
    },
    {
        id: 'pixel',
        title: 'Pixel-Perfect UI Implementation',
        description:
            'Flawless implementation of designs from Figma or Sketch into responsive UIs.',
        icon: <Palette className="w-6 h-6 text-white" />,
        bg: 'bg-pink-500/10 border-pink-500 shadow-pink-500/10 mb-7',
        iconBg: 'bg-pink-500',
    },
    {
        id: 'responsive',
        title: 'Responsive & Mobile Optimization',
        description:
            'Mobile-first, flexible designs that look great across all screen sizes.',
        icon: <Smartphone className="w-6 h-6 text-white" />,
        bg: 'bg-yellow-500/10 border-yellow-500 shadow-yellow-500/10 mb-7',
        iconBg: 'bg-yellow-500',
    },
    {
        id: 'writing',
        title: 'Technical Writing & Docs',
        description:
            'Clear, developer-focused documentation for components, APIs, and workflows.',
        icon: <BookText className="w-6 h-6 text-white" />,
        bg: 'bg-indigo-500/10 border-indigo-500 shadow-indigo-500/10 mb-7',
        iconBg: 'bg-indigo-500',
    },
];

// function shuffleArray(array) {
//     return [...array].sort(() => Math.random() - 0.5);
// }
// Utility to shuffle array
// const shuffleArray = (array) => {
//     const arr = [...array];
//     for (let i = arr.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
// };

export default function Services() {
    const [services, setServices] = useState(servicesData);

    useEffect(() => {
        const interval = setInterval(() => {
            setServices(shuffleArray(services));
        }, 6000); //6000
        return () => clearInterval(interval);
    }, [services]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setServices((prev) => shuffleArray(prev));
    //     }, 6000);
    //     return () => clearInterval(interval);
    // }, [services]);

    return (
        <>

            <div className="py-[105px] px-7 bg-[#111827]" id="services">
                <Container>
                        <HeadingWithPara className={"mb-[80px]"} classD={""} classH={"text-indigo-500 "} classP={" pt-3"} hText={"My Services"} pText={"My Expertise in Action"} />

                    <div className="max-w-6xl mx-auto">
                        <div className="">
                            <AnimatePresence>
                                {services.map((service) => (
                                    <motion.div
                                        key={service.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.9 }} //0.9
                                        // className={`flex items-start gap-4 border p-5 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform ${service.bg}`}
                                        className={`flex items-start gap-4 border p-5 rounded-2xl shadow-lg hover:scale-[1.05] transition-transform ${service.bg}`}
                                    >
                                        <div className={`${service.iconBg} p-3 rounded-xl`}>
                                            {service.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-semibold text-white">
                                                {service.title}
                                            </h3>
                                            <p className="pt-1.5 text-[#9F9F9F] text-[16px]">{service.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                </Container>

            </div>
        </>
    );
}
