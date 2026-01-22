import { useRef, useState, useEffect } from "react";
import type { TechLogo } from "../Types";

const techLogos: TechLogo[] = [
  { name: "C++", src: "/cpp.svg", alt: "C++" },
  { name: "Python", src: "/python.svg", alt: "Python" },
  { name: "JavaScript", src: "/js.svg", alt: "JavaScript" },
  { name: "TypeScript", src: "/ts.svg", alt: "TypeScript" },
  { name: "React", src: "/react.svg", alt: "React" },
  { name: "Angular", src: "/angular.svg", alt: "Angular" },
  { name: "RxJS", src: "/rxjs.png", alt: "RxJS" },
  { name: "Node.js", src: "/node.svg", alt: "Node.js" },
  { name: "Nest.js", src: "/nest.svg", alt: "Nest.js" },
  { name: "HTML", src: "/html.svg", alt: "HTML" },
  { name: "CSS", src: "/css.svg", alt: "CSS" },
  { name: "Sass", src: "/sass.svg", alt: "Sass" },
  { name: "Tailwind", src: "/tailwind.svg", alt: "Tailwind" },
  { name: "MySQL", src: "/mysql.svg", alt: "MySQL" },
  { name: "Sequelize", src: "/sequelize.svg", alt: "Sequelize" },
  { name: "Postman", src: "/postman.svg", alt: "Postman" },
  { name: "Docker", src: "/docker.svg", alt: "Docker" },
  { name: "Git", src: "/github.svg", alt: "Git" },
  { name: "GitLab", src: "/gitlab.svg", alt: "GitLab" },
  { name: "Jest", src: "/jest.svg", alt: "Jest" },
  { name: "Vite", src: "/vite.svg", alt: "Vite" },
  { name: "IDA Pro", src: "/ida.png", alt: "IDA Pro" },
  { name: "x64dbg", src: "/96dbg.png", alt: "x64dbg" },
  { name: "Cheat Engine", src: "/cheatengine.png", alt: "Cheat Engine" },
];

const Stack = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsDragging(false);
        setIsHovered(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    // Auto-scroll effect
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationId: number;
        const speed = 0.5; // Pixels per frame

        const step = () => {
            if (!isDragging && !isHovered && scrollContainer) {
                scrollContainer.scrollLeft += speed;
                
                // Infinite scroll: If we've scrolled past half the content (since we duplicated it), reset to 0
                // We need to approximate half content width. 
                // A better check is: if scrollLeft + clientWidth >= scrollWidth, but we want seamless loop.
                // Since we duplicate the array, the halfway point is roughly scrollWidth / 2.
                if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 2)) {
                    scrollContainer.scrollLeft = 0; // seamless jump
                }
            }
            animationId = requestAnimationFrame(step);
        };
        
        animationId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationId);
    }, [isDragging, isHovered]);

    return (
        <div className="py-12 border-y border-white/5 bg-white/2">
            <div className="max-w-6xl mx-auto px-6">
                <div 
                    ref={scrollRef}
                    className="flex gap-12 items-center overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing select-none"
                    onMouseDown={handleMouseDown}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {/* Duplicate the array to create infinite scroll effect */}
                    {[...techLogos, ...techLogos].map((logo, idx) => (
                        <div key={`${logo.name}-${idx}`} className="shrink-0 flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity group">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <img 
                                    src={logo.src} 
                                    alt={logo.alt} 
                                    className="max-w-full max-h-full grayscale group-hover:grayscale-0 transition-all duration-300 drop-shadow-lg" 
                                />
                            </div>
                            <span className="font-display font-medium text-white/80">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default Stack;
