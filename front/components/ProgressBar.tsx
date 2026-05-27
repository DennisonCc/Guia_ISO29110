"use client"

interface ProgressBarProps {
  percentage: number
  color?: "blue" | "violet" | "indigo" | "amber" | "emerald" | "gray"
  size?: "sm" | "md" | "lg"
  showLabel?: boolean
  animated?: boolean
  className?: string
}

const colorMap = {
  blue: "bg-blue-500",
  violet: "bg-violet-500",
  indigo: "bg-indigo-500",
  amber: "bg-amber-500",
  emerald: "bg-emerald-500",
  gray: "bg-muted-foreground/40",
}

const sizeMap = {
  sm: "h-1",
  md: "h-1.5",
  lg: "h-2",
}

export function ProgressBar({
  percentage,
  color = "blue",
  size = "md",
  showLabel = false,
  animated = true,
  className = "",
}: ProgressBarProps) {
  const clampedPct = Math.max(0, Math.min(100, percentage))

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-muted-foreground">{clampedPct}% completado</span>
        </div>
      )}
      <div className={`w-full bg-border/60 rounded-full overflow-hidden ${sizeMap[size]}`}>
        <div
          className={`${sizeMap[size]} rounded-full ${colorMap[color]} ${animated ? "transition-all duration-700 ease-out" : ""}`}
          style={{ width: `${clampedPct}%` }}
          role="progressbar"
          aria-valuenow={clampedPct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}
