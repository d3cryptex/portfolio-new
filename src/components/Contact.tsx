import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    const { t } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const formData = new FormData(e.currentTarget);
        
        try {
            const response = await fetch("https://formsubmit.co/ajax/danilobocuk@gmail.com", {
                method: "POST",
                body: formData,
                headers: { 
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-6 max-w-2xl mx-auto mb-20">
            <h2 className="font-display font-medium text-3xl md:text-4xl text-white mb-12 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-white/20"></span>
                {t('contact.title')}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Anti-spam honeypot */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-secondary">{t('contact.name')}</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required
                            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all"
                            placeholder={t('contact.placeholders.name')}
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-secondary">{t('contact.email')}</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required
                            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all"
                            placeholder={t('contact.placeholders.email')}
                        />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-secondary">{t('contact.message')}</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        required
                        rows={6}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all"
                        placeholder={t('contact.placeholders.message')}
                    ></textarea>
                </div>
                
                <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-gray-200 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isSubmitting ? (
                        <>
                            <FontAwesomeIcon icon={faSpinner} spin />
                            Sending...
                        </>
                    ) : (
                        t('contact.send')
                    )}
                </button>

                {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-lg border border-green-400/20 animate-in fade-in slide-in-from-top-2">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg border border-red-400/20 animate-in fade-in slide-in-from-top-2">
                        <FontAwesomeIcon icon={faExclamationCircle} />
                        <span className="text-sm">Something went wrong. Please try again or email me directly at danilobocuk@gmail.com</span>
                    </div>
                )}
            </form>
        </section>
    );
};

export default Contact;
