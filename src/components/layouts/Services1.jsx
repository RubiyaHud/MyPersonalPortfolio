// sections/Services.jsx
import {
    Code2,
    MonitorSmartphone,
    LayoutGrid,
    Palette,
    Smartphone,
    BookText
} from 'lucide-react';

export default function Services1() {
    return (
        <section className="py-20 bg-black" id="services">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-white mb-14 text-center">
                    Services I Offer
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Card Template */}
                    <div className="flex items-start gap-4 bg-blue-500/10 border border-blue-500 shadow-lg shadow-blue-500/10 p-5 rounded-2xl hover:scale-[1.02] transition-transform">
                        <div className="bg-blue-500 p-3 rounded-xl">
                            <Code2 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Frontend Web Development</h3>
                            <p className="text-gray-300 text-sm">
                                Building performant, scalable, and accessible UIs with React & Tailwind CSS.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 bg-green-500/10 border border-green-500/20 shadow-lg shadow-green-500/10 p-5 rounded-2xl hover:scale-[1.02] transition-transform">
                        <div className="bg-green-500/20 p-3 rounded-xl">
                            <MonitorSmartphone className="w-6 h-6 text-green-300" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Single Page Applications (SPA)</h3>
                            <p className="text-gray-300 text-sm">
                                Fast, interactive, and modern web apps built with React and client-side routing.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 bg-purple-500/10 border border-purple-500/20 shadow-lg shadow-purple-500/10 p-5 rounded-2xl hover:scale-[1.02] transition-transform">
                        <div className="bg-purple-500/20 p-3 rounded-xl">
                            <LayoutGrid className="w-6 h-6 text-purple-300" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Component Libraries</h3>
                            <p className="text-gray-300 text-sm">
                                Reusable, well-documented UI libraries with Tailwind CSS and Storybook.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 bg-pink-500/10 border border-pink-500/20 shadow-lg shadow-pink-500/10 p-5 rounded-2xl hover:scale-[1.02] transition-transform">
                        <div className="bg-pink-500/20 p-3 rounded-xl">
                            <Palette className="w-6 h-6 text-pink-300" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Pixel-Perfect UI Implementation</h3>
                            <p className="text-gray-300 text-sm">
                                Flawless implementation of designs from Figma or Sketch into responsive UIs.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 bg-yellow-500/10 border border-yellow-500/20 shadow-lg shadow-yellow-500/10 p-5 rounded-2xl hover:scale-[1.02] transition-transform">
                        <div className="bg-yellow-500/20 p-3 rounded-xl">
                            <Smartphone className="w-6 h-6 text-yellow-300" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Responsive & Mobile Optimization</h3>
                            <p className="text-gray-300 text-sm">
                                Mobile-first, flexible designs that look great across all screen sizes.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 bg-indigo-500/10 border border-indigo-500/20 shadow-lg shadow-indigo-500/10 p-5 rounded-2xl hover:scale-[1.02] transition-transform">
                        <div className="bg-indigo-500/20 p-3 rounded-xl">
                            <BookText className="w-6 h-6 text-indigo-300" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Technical Writing & Docs</h3>
                            <p className="text-gray-300 text-sm">
                                Clear, developer-focused documentation for components, APIs, and workflows.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
