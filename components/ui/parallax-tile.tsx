'use client'

import Link from "next/link"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type ParallaxTileProps = {
    imageSrc: string
    title: string
    subtitle?: string
    tags?: string[]
    href?: string
    height?: number
    className?: string
}

// A reusable image-backed tile with a subtle scroll parallax effect.
export default function ParallaxTile({
    imageSrc,
    title,
    subtitle,
    tags = [],
    href,
    height = 360,
    className,
}: ParallaxTileProps) {
    const containerRef = useRef<HTMLAnchorElement | HTMLDivElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        const container = containerRef.current
        const img = imgRef.current
        if (!container || !img) return

        let rafId = 0

        const update = () => {
            const rect = container.getBoundingClientRect()
            const viewportH = window.innerHeight || 1
            const centerDelta = rect.top + rect.height / 2 - viewportH / 2
            // Limit movement to keep it subtle on all devices
            const translateY = Math.max(-24, Math.min(24, -centerDelta * 0.08))
            img.style.transform = `translateY(${translateY}px) scale(1.08)`
            rafId = 0
        }

        const onScroll = () => {
            if (rafId) return
            rafId = requestAnimationFrame(update)
        }

        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)

        return () => {
            if (rafId) cancelAnimationFrame(rafId)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [])

    const Content = (
        <div
            ref={containerRef as any}
            className={cn(
                "group relative rounded-xl overflow-hidden block",
                className
            )}
            style={{ height }}
        >
            <img
                ref={imgRef}
                src={imageSrc}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                {tags?.length > 0 && (
                    <div className="flex items-center gap-2 mb-3 text-[11px]">
                        {tags.map((t, i) => (
                            <Badge
                                key={i}
                                variant="outline"
                                className="border-white/30 text-white bg-white/10 backdrop-blur-sm"
                            >
                                {t}
                            </Badge>
                        ))}
                    </div>
                )}
                <h3 className="text-2xl font-serif font-bold">{title}</h3>
                {subtitle && <p className="text-white/80 text-sm">{subtitle}</p>}
                <div className="mt-4">
                    <Button size="sm" className="bg-white/15 text-white hover:bg-white/25 border-white/30 backdrop-blur-sm">
                        View
                    </Button>
                </div>
            </div>
        </div>
    )

    if (href) {
        return (
            <Link href={href} className="block">
                {Content}
            </Link>
        )
    }

    return Content
}


