import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { Reveal } from './animations/Reveal'

export default function CTA() {
    const { language } = useLanguage()
    const t = translations[language].cta

    return (
        <section id="contact" className="relative isolate mt-24 mb-20 scroll-m-24 px-6 sm:mt-32 sm:mb-24 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                    className="aspect-[1108/632] w-[900px] flex-none bg-gradient-to-r from-[#80caff] to-[#7C3AED] opacity-20"
                />
            </div>
            <Reveal width="100%">
                <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white/90 px-8 py-10 text-center shadow-xl shadow-indigo-50/50 backdrop-blur sm:px-10 sm:py-12 transition-transform hover:scale-[1.01] dark:border-gray-700 dark:bg-gray-800/90 dark:shadow-purple-900/20">
                    <h2 className="text-3xl font-semibold tracking-tight text-gradient-rosdev sm:text-4xl">{t.title}</h2>
                    <p className="mt-4 text-base text-gray-700 sm:text-lg dark:text-gray-300">{t.description}</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
                        <a
                            href="https://wa.me/18327760799"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
                        >
                            <PhoneIcon aria-hidden="true" className="h-5 w-5" />
                            {t.primary}
                        </a>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-lg border border-[#4F46E5] px-4 py-3 text-sm font-semibold text-[#4F46E5] transition hover:bg-[#4F46E5]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F46E5] dark:border-[#A78BFA] dark:text-[#A78BFA] dark:hover:bg-[#A78BFA]/10"
                        >
                            {t.secondary} <ArrowRightIcon aria-hidden="true" className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}
