import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "../contexts/LanguageContext";

const SOCIAL_LINKS = [
  { icon: faTelegram, href: "https://t.me/d3cryptex", label: "Telegram" },
  { icon: faGithub, href: "https://github.com/d3cryptex", label: "GitHub" },
  { icon: faLinkedin, href: "https://linkedin.com/in/danilo-boichuk", label: "LinkedIn" }
];

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="py-8 bg-black border-t border-white/5">
             <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                 <div className="text-secondary/60 text-sm font-medium">
                     © {new Date().getFullYear()} {t('footer.rights')} <span className="text-red-500">❤️</span>
                 </div>

                 <div className="flex gap-6">
                    {SOCIAL_LINKS.map(link => (
                        <a 
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-white transition-colors text-lg"
                            aria-label={link.label}
                        >
                            <FontAwesomeIcon icon={link.icon} />
                        </a>
                    ))}
                 </div>
             </div>
        </footer>
    );
};

export default Footer;
