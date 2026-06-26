interface GoldDividerProps {
  className?: string
  width?: string
}

export default function GoldDivider({ className = '', width = 'w-16' }: GoldDividerProps) {
  return (
    <div className={`flex items-center gap-3 gold-divider ${className}`}>
      <div className={`h-px bg-gold ${width} gold-divider-line origin-left`} />
      <div className="w-1.5 h-1.5 rounded-full bg-gold gold-divider-dot" />
      <div className={`h-px bg-gold ${width} gold-divider-line origin-right`} />
    </div>
  )
}
