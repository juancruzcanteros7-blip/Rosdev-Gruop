import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { Reveal } from './animations/Reveal'

export default function Projects() {
    const { language } = useLanguage()
    const t = translations[language].projects

    return (
        <div id="projects" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8 scroll-m-24">
            <Reveal width="100%">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-gradient-rosdev">{t.title}</h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#2E2E2E] sm:text-5xl lg:text-balance">
                        {t.headline}
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-600">{t.description}</p>
                </div>
            </Reveal>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                {t.items.map((project, index) => (
                    <Reveal key={project.name} delay={0.2 + index * 0.1} width="100%">
                        <div className="relative overflow-hidden rounded-2xl bg-gray-50 transition-transform hover:scale-[1.01] hover:shadow-lg">
                            <img
                                src={`https://images.unsplash.com/photo-${index === 0
                                    ? '1586528116311-ad8dd3c8310d' // logistics
                                    : index === 1
                                        ? '1472851294608-062f824d29cc' // retail
                                        : index === 2
                                            ? '1524178232363-1fb2b075b655' // education
                                            : '1563013544-824ae1b704d3' // fintech
                                    }?w=800&auto=format&fit=crop`}
                                alt={project.name}
                                className="h-64 w-full object-cover"
                            />
                            <div className="p-8">
                                <h3 className="text-xl font-semibold text-[#2E2E2E]">{project.name}</h3>
                                <div className="mt-4 space-y-2 text-sm text-gray-600">
                                    <p>
                                        <span className="font-semibold">{t.labels.challenge}:</span> {project.challenge}
                                    </p>
                                    <p>
                                        <span className="font-semibold">{t.labels.solution}:</span> {project.solution}
                                    </p>
                                    <p>
                                        <span className="font-semibold">{t.labels.impact}:</span> {project.impact}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    )
}
