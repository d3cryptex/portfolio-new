import { useState, useRef, useEffect } from "react";
import { FiHome, FiUser, FiBriefcase, FiCode, FiMail } from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";
import type { Language } from "../../translations";

const NAV_ITEMS = [
    { id: "home", icon: FiHome, labelKey: "nav.home" },
    { id: "about", icon: FiUser, labelKey: "nav.about" },
    { id: "career", icon: FiBriefcase, labelKey: "nav.career" },
    { id: "projects", icon: FiCode, labelKey: "nav.works" },
    { id: "contact", icon: FiMail, labelKey: "nav.contact" },
];

const Nav = () => {
    const { t, language, setLanguage } = useLanguage();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState("home");
    const [isLangHovered, setIsLangHovered] = useState(false);
    const dockRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.5 });

        NAV_ITEMS.forEach(item => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleLanguage = () => {
        const langs: Language[] = ['en', 'ru', 'ua'];
        const currentIndex = langs.indexOf(language);
        const nextIndex = (currentIndex + 1) % langs.length;
        setLanguage(langs[nextIndex]);
    };

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 h-20">
            {/* Main Navigation Dock */}
            <div 
                className="flex items-end gap-2 px-2.5 py-2.5 bg-black/40 backdrop-blur-md border border-white/5 rounded-full shadow-2xl transition-all duration-300 origin-bottom"
                onMouseLeave={() => setHoveredIndex(null)}
                ref={dockRef}
            >
                {NAV_ITEMS.map((item, index) => {
                    const isHovered = hoveredIndex === index;
                    const isNeighbor = hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1;
                    
                    let scale = 1;
                    if (isHovered) scale = 1.3;
                    else if (isNeighbor) scale = 1.15;

                    const Icon = item.icon;
                    const label = t(item.labelKey);

                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            onMouseEnter={() => setHoveredIndex(index)}
                            className="relative flex flex-col items-center justify-center transition-all duration-200 ease-out"
                            style={{
                                width: `${38 * scale}px`,
                                height: `${38 * scale}px`,
                            }}
                            aria-label={label}
                        >
                            <span 
                                className={`
                                    flex items-center justify-center w-full h-full rounded-full border transition-colors duration-300
                                    ${activeSection === item.id 
                                        ? 'bg-white/10 border-white/20 text-white' 
                                        : 'bg-transparent border-transparent text-secondary hover:text-white hover:bg-white/5'}
                                `}
                            >
                                <Icon 
                                    style={{ fontSize: `${1.1 * scale}rem` }}
                                    className="transition-all duration-200"
                                />
                            </span>

                            {/* Tooltip */}
                            <span 
                                className={`
                                    absolute -top-10 bg-black/80 border border-white/10 text-white text-[10px] font-bold px-2 py-0.5 rounded-full
                                    transition-all duration-200 pointer-events-none whitespace-nowrap
                                    ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                                `}
                            >
                                {label}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Language Switcher Circle */}
            <button
                onClick={toggleLanguage}
                onMouseEnter={() => setIsLangHovered(true)}
                onMouseLeave={() => setIsLangHovered(false)}
                className="relative flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/5 rounded-full shadow-2xl transition-all duration-300 hover:bg-white/10 group active:scale-95"
                style={{
                    width: isLangHovered ? '58px' : '48px',
                    height: isLangHovered ? '58px' : '48px',
                }}
                aria-label="Switch Language"
            >
                <div className="flex items-center justify-center w-full h-full rounded-full border border-transparent group-hover:border-white/20 transition-all duration-300">
                     <span className="font-display font-medium text-white text-sm uppercase">
                        {language}
                    </span>
                </div>
                 {/* Tooltip */}
                 <span 
                    className={`
                        absolute -top-10 bg-black/80 border border-white/10 text-white text-[10px] font-bold px-2 py-0.5 rounded-full
                        transition-all duration-200 pointer-events-none whitespace-nowrap
                        ${isLangHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                    `}
                >
                    Language
                </span>
            </button>
        </div>
    );
};

export default Nav;