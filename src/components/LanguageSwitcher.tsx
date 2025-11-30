import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="fixed top-6 right-6 z-50">
            <button
                onClick={toggleLanguage}
                className="group relative flex h-10 w-20 cursor-pointer items-center rounded-full bg-[#7C3AED]/10 p-1 shadow-inner backdrop-blur-md transition-all hover:bg-[#7C3AED]/20"
                aria-label="Toggle Language"
            >
                <div
                    className={`absolute h-8 w-8 rounded-full bg-white shadow-md transition-all duration-300 ease-in-out dark:bg-gray-700 ${language === 'es' ? 'translate-x-10' : 'translate-x-0'
                        }`}
                />
                <span
                    className={`absolute left-2.5 text-xs font-bold transition-colors duration-300 ${language === 'en' ? 'text-[#7C3AED]' : 'text-gray-400'
                        }`}
                >
                    EN
                </span>
                <span
                    className={`absolute right-2.5 text-xs font-bold transition-colors duration-300 ${language === 'es' ? 'text-[#7C3AED]' : 'text-gray-400'
                        }`}
                >
                    ES
                </span>
            </button>
        </div>
    );
}
