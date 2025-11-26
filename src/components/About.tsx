import type { ReactElement } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { Reveal } from './animations/Reveal'

function PurposeIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-5 w-5">
            <path
                d="M11.017 2.81401C11.0598 2.58462 11.1815 2.37743 11.3611 2.22833C11.5406 2.07924 11.7666 1.99762 12 1.99762C12.2333 1.99762 12.4593 2.07924 12.6389 2.22833C12.8184 2.37743 12.9401 2.58462 12.983 2.81401L14.034 8.37201C14.1086 8.76716 14.3006 9.13063 14.585 9.41498C14.8693 9.69934 15.2328 9.89137 15.628 9.96601L21.186 11.017C21.4153 11.0599 21.6225 11.1816 21.7716 11.3611C21.9207 11.5406 22.0023 11.7667 22.0023 12C22.0023 12.2334 21.9207 12.4594 21.7716 12.6389C21.6225 12.8184 21.4153 12.9402 21.186 12.983L15.628 14.034C15.2328 14.1087 14.8693 14.3007 14.585 14.585C14.3006 14.8694 14.1086 15.2329 14.034 15.628L12.983 21.186C12.9401 21.4154 12.8184 21.6226 12.6389 21.7717C12.4593 21.9208 12.2333 22.0024 12 22.0024C11.7666 22.0024 11.5406 21.9208 11.3611 21.7717C11.1815 21.6226 11.0598 21.4154 11.017 21.186L9.96595 15.628C9.89131 15.2329 9.69928 14.8694 9.41492 14.585C9.13057 14.3007 8.7671 14.1087 8.37195 14.034L2.81395 12.983C2.58456 12.9402 2.37737 12.8184 2.22827 12.6389C2.07917 12.4594 1.99756 12.2334 1.99756 12C1.99756 11.7667 2.07917 11.5406 2.22827 11.3611C2.37737 11.1816 2.58456 11.0599 2.81395 11.017L8.37195 9.96601C8.7671 9.89137 9.13057 9.69934 9.41492 9.41498C9.69928 9.13063 9.89131 8.76716 9.96595 8.37201L11.017 2.81401Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M20 2V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 4H18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path
                d="M4 22C5.10457 22 6 21.1046 6 20C6 18.8954 5.10457 18 4 18C2.89543 18 2 18.8954 2 20C2 21.1046 2.89543 22 4 22Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function TeamIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-5 w-5">
            <path
                d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16 3.12799C16.8578 3.35036 17.6174 3.85125 18.1597 4.55205C18.702 5.25285 18.9962 6.11388 18.9962 6.99999C18.9962 7.8861 18.702 8.74713 18.1597 9.44793C17.6174 10.1487 16.8578 10.6496 16 10.872"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function AiIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-5 w-5">
            <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

const featureIcons: Record<string, () => ReactElement> = {
    purpose: PurposeIcon,
    team: TeamIcon,
    ai: AiIcon,
}

export default function About() {
    const { language } = useLanguage()
    const t = translations[language].about
    const brand = 'ROSDEV GROUP'
    const [beforeBrand, afterBrand] = t.description1.split(brand)

    return (
        <section id="about" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <Reveal width="100%">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-gradient-rosdev">{t.title}</h2>
                    <p className="mt-3 text-2xl font-semibold text-[#2E2E2E] sm:text-3xl">{t.headline}</p>
                    <p className="mt-4 text-lg text-gray-700">
                        {beforeBrand}
                        <span className="font-semibold text-gradient-rosdev">{brand}</span>
                        {afterBrand || ''}
                    </p>
                </div>
            </Reveal>

            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-[1.1fr_0.9fr]">
                <Reveal direction="right" delay={0.4}>
                    <div className="overflow-hidden rounded-3xl shadow-xl shadow-gray-200/70 ring-1 ring-gray-200">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop"
                            alt="Team collaboration"
                            width={1200}
                            height={800}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </Reveal>

                <div className="flex flex-col justify-center gap-6">
                    {t.features.map((feature, index) => {
                        const Icon = featureIcons[feature.id]
                        return (
                            <Reveal key={feature.id} delay={0.5 + index * 0.1} direction="left" width="100%">
                                <div className="flex items-start gap-4 rounded-2xl bg-gray-50/80 p-4 ring-1 ring-gray-100 transition-all hover:bg-white hover:shadow-md">
                                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edeaff] text-[#4F46E5] ring-1 ring-[#e0d6ff] leading-none">
                                        <Icon />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold text-[#2E2E2E]">{feature.title}</h3>
                                        <p className="text-sm text-gray-700">{feature.description}</p>
                                    </div>
                                </div>
                            </Reveal>
                        )
                    })}
                </div>
            </div>

            <Reveal delay={0.8} width="100%">
                <div className="mx-auto mt-12 max-w-5xl">
                    <div className="rounded-3xl bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#9F1CFA] px-8 py-8 text-center text-lg font-semibold text-white shadow-lg sm:text-xl transform transition-transform hover:scale-[1.01]">
                        {t.tagline}
                    </div>
                </div>
            </Reveal>
        </section>
    )
}
