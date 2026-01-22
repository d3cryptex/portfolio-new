import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "../contexts/LanguageContext";
import type { Language } from "../translations";

const SOCIAL_LINKS = [
  { icon: faTelegram, href: "https://t.me/d3cryptex", label: "Telegram" },
  { icon: faGithub, href: "https://github.com/d3cryptex", label: "GitHub" },
  { icon: faLinkedin, href: "https://linkedin.com/in/danilo-boichuk", label: "LinkedIn" }
];

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden">
            <div className="max-w-4xl mx-auto w-full z-10">
                <div className="flex items-center gap-4 mb-8 animate-fade-in">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/10">
                        <img 
                            src="/photo.jpg" 
                            alt="Danilo" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-display font-medium text-white text-lg tracking-wide">Daniel</span>
                        <span className="text-secondary text-sm">{t('hero.location')}</span>
                    </div>
                </div>

                <h1 className="font-display font-bold text-display-md md:text-display-lg text-white leading-none mb-8 tracking-tight animate-slide-up">
                    {t('hero.role')} <br />
                    <span className="text-secondary opacity-60">{t('hero.and')}</span> {t('hero.role2')} <br />
                    {t('hero.enthusiast')}
                </h1>

                <p className="max-w-xl text-lg md:text-xl text-secondary leading-relaxed mb-12 animate-slide-up">
                    {t('hero.description')}
                </p>

                <div className="flex gap-6 animate-slide-up">
                    {SOCIAL_LINKS.map((link) => (
                        <a 
                            key={link.label}
                            href={link.href}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-secondary transition-colors text-2xl"
                            aria-label={link.label}
                        >
                            <FontAwesomeIcon icon={link.icon} />
                        </a>
                    ))}
                </div>
            </div>
            
            {/* Abstract Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/2 rounded-full blur-3xl z-0 pointer-events-none" />
        </section>
    );
};

export default Hero;
