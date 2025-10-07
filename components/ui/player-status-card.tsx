"use client"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type PlayerStatusCardProps = {
    name: string
    team: string
    stat?: string
    imageSrc: string
    className?: string
}

// Compact player card matching the shared layout: title, badges, brief stat, and a right-side portrait.
export default function PlayerStatusCard({ name, team, stat, imageSrc, className }: PlayerStatusCardProps) {
    return (
        <div className={cn("relative overflow-hidden rounded-xl border border-border bg-card/80 shadow-sm transition-all hover:shadow-md", className)}>
            <div className="grid grid-cols-[1fr,260px] md:grid-cols-[1fr,360px] min-h-[340px] md:min-h-[420px]">
                {/* Left content */}
                <div className="p-5 md:p-6">
                    <div className="text-lg font-semibold leading-tight">{name}</div>
                    <div className="mt-2 flex items-center gap-2">
                        <Badge variant="secondary">{team}</Badge>
                    </div>
                    {stat && <div className="mt-3 text-sm text-muted-foreground">{stat}</div>}
                </div>

                {/* Right portrait */}
                <div className="relative border-l border-border bg-card">
                    <img
                        src={imageSrc}
                        alt={name}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 h-full w-full object-contain object-bottom"
                        onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement
                            target.src = "/placeholder-user.jpg"
                        }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/40" />
                </div>
            </div>
        </div>
    )
}


