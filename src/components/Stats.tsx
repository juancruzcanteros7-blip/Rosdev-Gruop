const stats = [
    { id: 1, name: 'Developers on the platform', value: '8,000+' },
    { id: 2, name: 'Daily requests', value: '900m+' },
    { id: 3, name: 'Uptime guarantee', value: '99.9%' },
    { id: 4, name: 'Projects deployed', value: '12m' },
]

export default function Stats() {
    return (
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h2 className="text-base/8 font-semibold text-indigo-600">Our track record</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Trusted by thousands of creators&nbsp;worldwide
                </p>
                <p className="mt-6 text-lg/8 text-gray-700">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
                    dolor cupiditate blanditiis.
                </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-gray-900 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {stats.map((stat) => (
                    <div key={stat.id} className="flex flex-col gap-y-3 border-l border-gray-900/15 pl-6">
                        <dt className="text-sm/6">{stat.name}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight">{stat.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}
