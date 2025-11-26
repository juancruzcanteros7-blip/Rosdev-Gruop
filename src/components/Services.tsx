import { SparklesIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { Reveal } from './animations/Reveal'
import { StaggerContainer, StaggerItem } from './animations/Stagger'

export default function Services() {
    const { language } = useLanguage()
    const t = translations[language].services

    return (
        <section id="services" className="mt-32 scroll-m-24 sm:mt-56">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Reveal width="100%">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-base font-semibold text-gradient-rosdev">{t.title}</h2>
                        <p className="mt-3 text-3xl font-semibold text-[#2E2E2E] sm:text-4xl dark:text-white">{t.headline}</p>
                        {t.description ? <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{t.description}</p> : null}
                    </div>
                </Reveal>

                <StaggerContainer className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {t.items.map((service) => (
                        <StaggerItem key={service.name}>
                            <article
                                className="flex h-full flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm shadow-gray-100 transition-all hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-100 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none dark:hover:shadow-purple-900/20"
                            >
                                <div className="flex size-12 items-center justify-center rounded-xl bg-[#f1efff] text-[#4F46E5] transition-colors hover:bg-[#e5dfff]">
                                    <service.icon aria-hidden="true" className="size-6" />
                                </div>
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white">{service.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
                            </article>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <Reveal delay={0.6} width="100%">
                    <div className="mt-12 flex justify-center">
                        <div className="inline-flex items-center gap-3 rounded-full border border-[#4F46E5]/30 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-transform hover:scale-105 dark:bg-gray-800 dark:text-gray-200 dark:border-[#4F46E5]/50">
                            <div className="flex size-8 items-center justify-center rounded-full bg-[#f1efff] text-[#4F46E5]">
                                <SparklesIcon aria-hidden="true" className="size-5" />
                            </div>
                            <span>{t.note}</span>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
