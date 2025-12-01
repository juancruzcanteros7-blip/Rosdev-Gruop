import { SparklesIcon } from '@heroicons/react/24/outline'
import HoomindLogo from '../assets/HOOMIND-MEMBER.svg'
import HoomindLogoDark from '../assets/HOOMIND-MEMBER-dark.svg'
import TinyLogo from '../assets/TINYSTUDIO-MEMBER.svg'
import TinyLogoDark from '../assets/TINYSTUDIO-MEMBER-dark.svg'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { Reveal } from './animations/Reveal'
import { StaggerContainer, StaggerItem } from './animations/Stagger'

export default function Ecosystem() {
    const { language } = useLanguage()
    const t = translations[language].ecosystem
    const brand = 'ROSDEV GROUP'
    const [beforeBrand, afterBrand] = t.description.split(brand)

    return (
        <section className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
            <Reveal width="100%">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold text-brand-purple dark:text-brand-purple-light">
                        {t.title}
                    </h2>
                    <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                        {beforeBrand}
                        <span className="font-semibold text-gradient-rosdev">{brand}</span>
                        {afterBrand || ''}
                    </p>
                </div>
            </Reveal>

            <StaggerContainer className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
                <StaggerItem>
                    <a
                        href="https://hoomind.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-2xl border border-gray-200 bg-white p-8 shadow-sm shadow-gray-100 transition-all hover:border-brand-purple/50 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:shadow-none dark:hover:border-brand-purple-light"
                    >
                        <img src={HoomindLogo} alt={t.hoomind.title} className="block h-12 w-auto dark:hidden" />
                        <img src={HoomindLogoDark} alt={t.hoomind.title} className="hidden h-12 w-auto dark:block" />
                        <p className="mt-3 text-sm font-medium text-gray-800 dark:text-gray-200">
                            {t.hoomind.memberOf}
                        </p>
                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{t.hoomind.description}</p>
                    </a>
                </StaggerItem>

                <StaggerItem>
                    <a
                        href="https://tinystudioar.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-2xl border border-gray-200 bg-white p-8 shadow-sm shadow-gray-100 transition-all hover:border-brand-purple/50 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:shadow-none dark:hover:border-brand-purple-light"
                    >
                        <img src={TinyLogo} alt={t.tinyStudio.title} className="block h-10 w-auto dark:hidden" />
                        <img src={TinyLogoDark} alt={t.tinyStudio.title} className="hidden h-10 w-auto dark:block" />
                        <p className="mt-3 text-sm font-medium text-gray-800 dark:text-gray-200">
                            {t.tinyStudio.memberOf}
                        </p>
                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{t.tinyStudio.description}</p>
                    </a>
                </StaggerItem>
            </StaggerContainer>

            <Reveal delay={0.6} width="100%">
                <div className="mx-auto mt-12 max-w-5xl">
                    <div className="flex items-start gap-3 rounded-3xl bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#9F1CFA] px-6 py-5 text-white shadow-lg transition-transform hover:scale-[1.01]">
                        <div className="flex size-11 items-center justify-center rounded-2xl bg-white/15">
                            <SparklesIcon aria-hidden="true" className="size-6" />
                        </div>
                        <div>
                            <p className="text-base font-semibold">{t.conclusionTitle}</p>
                            <p className="text-sm text-white/90">{t.conclusion}</p>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}
