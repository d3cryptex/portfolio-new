import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
            <h2 className="font-display font-medium text-3xl md:text-4xl text-white mb-12 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-white/20"></span>
                {t('about.title')}
            </h2>
            
            <div className="text-secondary text-lg md:text-xl leading-relaxed space-y-6">
                <p>
                    {t('about.description1')}
                </p>
                <p>
                    {t('about.description2')}
                </p>
            </div>
        </section>
    );
};

export default About;
