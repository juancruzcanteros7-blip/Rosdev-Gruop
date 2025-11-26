export default function Logo({ className }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className || ''}`}>
            <span className="text-3xl font-bold text-[#7C3AED]">{'{'}</span>
            <span className="text-2xl font-bold tracking-tight text-[#2E2E2E]">
                ROSDEV <span className="font-normal">GROUP</span>
            </span>
            <span className="text-3xl font-bold text-[#7C3AED]">{'}'}</span>
        </div>
    )
}
