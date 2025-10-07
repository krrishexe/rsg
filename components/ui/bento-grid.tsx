import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface BentoGridProps {
    children: ReactNode
    className?: string
}

interface BentoGridItemProps {
    children: ReactNode
    className?: string
    colSpan?: 1 | 2 | 3 | 4
    rowSpan?: 1 | 2 | 3
}

export function BentoGrid({ children, className }: BentoGridProps) {
    return (
        <div
            className={cn(
                "grid auto-rows-[minmax(0,1fr)] gap-4 md:grid-cols-2 lg:grid-cols-3",
                className
            )}
        >
            {children}
        </div>
    )
}

export function BentoGridItem({
    children,
    className,
    colSpan = 1,
    rowSpan = 1,
}: BentoGridItemProps) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md",
                {
                    "md:col-span-1": colSpan === 1,
                    "md:col-span-2": colSpan === 2,
                    "lg:col-span-3": colSpan === 3,
                    "col-span-full": colSpan === 4,
                    "row-span-1": rowSpan === 1,
                    "row-span-2": rowSpan === 2,
                    "row-span-3": rowSpan === 3,
                },
                className
            )}
        >
            {children}
        </div>
    )
}

// Specialized bento layouts for different use cases
export function BentoGridHero({ children, className }: BentoGridProps) {
    return (
        <div
            className={cn(
                "grid auto-rows-[minmax(200px,auto)] gap-4 md:grid-cols-3 lg:grid-cols-4",
                className
            )}
        >
            {children}
        </div>
    )
}

export function BentoGridStats({ children, className }: BentoGridProps) {
    return (
        <div
            className={cn(
                "grid auto-rows-[minmax(120px,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-4",
                className
            )}
        >
            {children}
        </div>
    )
}

export function BentoGridFeatures({ children, className }: BentoGridProps) {
    return (
        <div
            className={cn(
                "grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-3",
                className
            )}
        >
            {children}
        </div>
    )
}

export function BentoGridCards({ children, className }: BentoGridProps) {
    return (
        <div
            className={cn(
                "grid auto-rows-[minmax(250px,auto)] gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                className
            )}
        >
            {children}
        </div>
    )
}
