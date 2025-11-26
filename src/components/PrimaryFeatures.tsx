import { BoltIcon, CalendarDaysIcon, UsersIcon } from '@heroicons/react/24/outline'

const primaryFeatures = [
    {
        name: 'Server monitoring',
        description:
            'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
        href: '#',
        icon: BoltIcon,
    },
    {
        name: 'Collaborate',
        description:
            'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
        href: '#',
        icon: UsersIcon,
    },
    {
        name: 'Task scheduling',
        description:
            'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
        href: '#',
        icon: CalendarDaysIcon,
    },
]

export default function PrimaryFeatures() {
    return (
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                    Everything you need to deploy your app
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                    Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                    pulvinar et feugiat blandit at. In mi viverra elit nunc.
                </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    {primaryFeatures.map((feature) => (
                        <div key={feature.name} className="flex flex-col">
                            <dt className="text-base/7 font-semibold text-gray-900">
                                <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                                </div>
                                {feature.name}
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                                <p className="flex-auto">{feature.description}</p>
                                <p className="mt-6">
                                    <a href={feature.href} className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500">
                                        Learn more <span aria-hidden="true">→</span>
                                    </a>
                                </p>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
