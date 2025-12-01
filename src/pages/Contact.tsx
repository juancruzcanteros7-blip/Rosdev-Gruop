import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
    const { language } = useLanguage()
    const t = translations[language].contact

    return (
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main className="relative isolate mx-auto mt-10 max-w-6xl scroll-m-24 px-6 pb-12 pt-8 sm:mt-10 sm:pb-16 sm:pt-10 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-3xl font-semibold tracking-tight text-gradient-rosdev sm:text-4xl">
                        {t.title}
                    </h1>
                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{t.description}</p>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm shadow-gray-100 sm:p-8 dark:border-gray-700 dark:bg-gray-800/90 dark:shadow-none">
                        <div className="space-y-6 text-gray-700 dark:text-gray-300">
                            <div>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">{t.hoursTitle}</p>
                                <div className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    {t.hours.map((row) => (
                                        <div key={row.label} className="flex items-center justify-between">
                                            <span>{row.label}</span>
                                            <span className="font-medium text-gray-900 dark:text-white">
                                                {row.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#edeaff] text-[#4F46E5] ring-1 ring-[#e0d6ff] dark:bg-[#4F46E5]/20 dark:text-[#A78BFA] dark:ring-[#4F46E5]/30">
                                    <BuildingOffice2Icon aria-hidden="true" className="h-5 w-5" />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                        {t.addressLabel}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{t.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#edeaff] text-[#4F46E5] ring-1 ring-[#e0d6ff] dark:bg-[#4F46E5]/20 dark:text-[#A78BFA] dark:ring-[#4F46E5]/30">
                                    <PhoneIcon aria-hidden="true" className="h-5 w-5" />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                        {t.phoneLabel}
                                    </p>
                                    <a
                                        href={`tel:${t.phone}`}
                                        className="text-sm text-gray-600 hover:text-[#4F46E5] dark:text-gray-300 dark:hover:text-[#A78BFA]"
                                    >
                                        {t.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#edeaff] text-[#4F46E5] ring-1 ring-[#e0d6ff] dark:bg-[#4F46E5]/20 dark:text-[#A78BFA] dark:ring-[#4F46E5]/30">
                                    <EnvelopeIcon aria-hidden="true" className="h-5 w-5" />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                        {t.emailLabel}
                                    </p>
                                    <a
                                        href={`mailto:${t.email}`}
                                        className="text-sm text-gray-600 hover:text-[#4F46E5] dark:text-gray-300 dark:hover:text-[#A78BFA]"
                                    >
                                        {t.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm shadow-gray-100 sm:p-8 dark:border-gray-700 dark:bg-gray-800/90 dark:shadow-none">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label
                                    htmlFor="first-name"
                                    className="text-sm font-semibold text-gray-900 dark:text-white"
                                >
                                    {t.form.firstName}
                                </label>
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-xl border border-gray-200 px-3.5 py-3 text-sm text-gray-900 shadow-inner shadow-gray-50 outline-none ring-0 focus:border-[#4F46E5] focus:shadow-md dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:shadow-gray-900/50 dark:focus:border-[#A78BFA]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="last-name"
                                    className="text-sm font-semibold text-gray-900 dark:text-white"
                                >
                                    {t.form.lastName}
                                </label>
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-xl border border-gray-200 px-3.5 py-3 text-sm text-gray-900 shadow-inner shadow-gray-50 outline-none ring-0 focus:border-[#4F46E5] focus:shadow-md dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:shadow-gray-900/50 dark:focus:border-[#A78BFA]"
                                />
                            </div>
                            <div className="space-y-2 sm:col-span-2">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-900 dark:text-white">
                                    {t.form.email}
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-xl border border-gray-200 px-3.5 py-3 text-sm text-gray-900 shadow-inner shadow-gray-50 outline-none ring-0 focus:border-[#4F46E5] focus:shadow-md dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:shadow-gray-900/50 dark:focus:border-[#A78BFA]"
                                />
                            </div>
                            <div className="space-y-2 sm:col-span-2">
                                <label
                                    htmlFor="phone-number"
                                    className="text-sm font-semibold text-gray-900 dark:text-white"
                                >
                                    {t.form.phone}
                                </label>
                                <input
                                    id="phone-number"
                                    name="phone-number"
                                    type="tel"
                                    autoComplete="tel"
                                    className="block w-full rounded-xl border border-gray-200 px-3.5 py-3 text-sm text-gray-900 shadow-inner shadow-gray-50 outline-none ring-0 focus:border-[#4F46E5] focus:shadow-md dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:shadow-gray-900/50 dark:focus:border-[#A78BFA]"
                                />
                            </div>
                            <div className="space-y-2 sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-semibold text-gray-900 dark:text-white"
                                >
                                    {t.form.message}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="block w-full rounded-xl border border-gray-200 px-3.5 py-3 text-sm text-gray-900 shadow-inner shadow-gray-50 outline-none ring-0 focus:border-[#4F46E5] focus:shadow-md dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:shadow-gray-900/50 dark:focus:border-[#A78BFA]"
                                />
                            </div>
                        </div>
                        <div className="mt-8 flex justify-start">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
                            >
                                {t.form.submit}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}
