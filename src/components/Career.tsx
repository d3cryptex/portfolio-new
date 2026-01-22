import { useLanguage } from "../contexts/LanguageContext";

const Career = () => {
    const { t } = useLanguage();
    const careerItems = (t('career.items') as unknown) as any[]; // Type assertion needed or better typing in context

    return (
        <section id="career" className="py-24 px-6 max-w-4xl mx-auto">
             <h2 className="font-display font-medium text-3xl md:text-4xl text-white mb-16 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-white/20"></span>
                {t('career.title')}
            </h2>

            <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
                {Array.isArray(careerItems) && careerItems.map((point: any, idx: number) => (
                    <div key={idx} className="relative pl-8 md:pl-12 group">
                        <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-black group-hover:bg-white transition-colors"></span>
                        
                        <div className="flex flex-col sm:flex-row gap-2 sm:items-baseline mb-2">
                            <span className="font-display font-bold text-white text-lg">{point.title}</span>
                            <span className="font-mono text-sm text-secondary/60">{point.year}</span>
                        </div>
                        
                        <p className="text-secondary max-w-lg mb-2">
                            {point.text}
                        </p>
                        <p className="text-secondary/40 text-sm italic">
                            {point.tooltip}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Career;
