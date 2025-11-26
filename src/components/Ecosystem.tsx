import { SparklesIcon } from '@heroicons/react/24/outline'
import HoomindLogo from '../assets/HOOMIND-MEMBER.svg'
import TinyLogo from '../assets/TINYSTUDIO-MEMBER.svg'
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
                    <h2 className="text-base font-semibold text-[#7C3AED]">{t.title}</h2>
                    <p className="mt-3 text-lg text-gray-700">
                        {beforeBrand}
                        <span className="font-semibold text-gradient-rosdev">{brand}</span>
                        {afterBrand || ''}
                    </p>
                </div>
            </Reveal>

            <StaggerContainer className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
                <StaggerItem>
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm shadow-gray-100 transition-all hover:scale-[1.02] hover:shadow-md">
                        <img src={HoomindLogo} alt={t.hoomind.title} className="h-12 w-auto" />
                        <p className="mt-3 text-sm font-medium text-gray-800">{t.hoomind.memberOf}</p>
                        <p className="mt-3 text-sm text-gray-600">{t.hoomind.description}</p>
                    </div>
                </StaggerItem>

                <StaggerItem>
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm shadow-gray-100 transition-all hover:scale-[1.02] hover:shadow-md">
                        <img src={TinyLogo} alt={t.tinyStudio.title} className="h-10 w-auto" />
                        <p className="mt-3 text-sm font-medium text-gray-800">{t.tinyStudio.memberOf}</p>
                        <p className="mt-3 text-sm text-gray-600">{t.tinyStudio.description}</p>
                    </div>
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
