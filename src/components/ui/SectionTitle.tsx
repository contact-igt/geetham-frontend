import { cn } from "@/lib/utils"

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    subtitle?: string
    label?: string
    centered?: boolean
}

export function SectionTitle({
    title,
    subtitle,
    label,
    centered = false,
    className,
    ...props
}: SectionTitleProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-3 mb-10",
                centered ? "items-center text-center" : "items-start text-left",
                className
            )}
            {...props}
        >
            {label && (
                <span className="section-label">{label}</span>
            )}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
