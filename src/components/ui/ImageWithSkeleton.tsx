import { useState } from 'react'
import { Skeleton } from './Skeleton'

type ImageWithSkeletonProps = React.ImgHTMLAttributes<HTMLImageElement>

export function ImageWithSkeleton({ className, ...props }: ImageWithSkeletonProps) {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className="relative">
            {isLoading && <Skeleton className="absolute inset-0 h-full w-full" />}
            <img
                {...props}
                className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                onLoad={() => setIsLoading(false)}
            />
        </div>
    )
}
