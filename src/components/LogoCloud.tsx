import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

const placeholders = new Array(8).fill(null)

export default function LogoCloud() {
    const { language } = useLanguage()
    const t = translations[language].clients

    return (
        <section className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
            <div className="text-center">
                <h2 className="text-base font-semibold text-gradient-rosdev">{t.title}</h2>
                <p className="mt-3 text-lg text-gray-700">{t.description}</p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {placeholders.map((_, idx) => (
                    <div
                        key={idx}
                        className="flex h-20 items-center justify-center rounded-2xl border border-gray-200 bg-white text-sm font-medium text-gray-400 shadow-sm dark:bg-gray-800 dark:border-gray-700"
                    >
                        logo
                    </div>
                ))}
            </div>
        </section>
    )
}
