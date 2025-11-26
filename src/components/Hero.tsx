import { ArrowRightIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

export default function Hero() {
    const { language } = useLanguage()
    const t = translations[language].hero

    return (
        <section className="relative isolate overflow-hidden bg-white px-6 pt-24 pb-20 sm:pt-32 sm:pb-28 lg:px-8 lg:pt-40">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
                />
            </div>

            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                <h1 className="text-4xl font-semibold tracking-tight text-balance text-gradient-rosdev sm:text-5xl">
                    {t.title}
                </h1>
                <p className="mt-6 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
                    {t.subtitle}
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
                    >
                        <CalendarDaysIcon aria-hidden="true" className="size-5" />
                        {t.ctaPrimary}
                    </a>
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 rounded-md border border-[#4F46E5] px-5 py-3 text-sm font-semibold text-[#4F46E5] transition hover:bg-[#4F46E5]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F46E5]"
                    >
                        {t.ctaSecondary}
                        <ArrowRightIcon aria-hidden="true" className="size-5" />
                    </a>
                </div>
            </div>

            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-25rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#4F46E5] to-[#8B5CF6] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
                />
            </div>
        </section>
    )
}
