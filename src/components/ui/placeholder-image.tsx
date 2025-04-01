import { cn } from "@/lib/utils"

interface PlaceholderImageProps {
  text: string
  className?: string
}

export function PlaceholderImage({ text, className }: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full h-full bg-neutral-800 text-amber-400 text-2xl font-bold",
        className
      )}
    >
      {text}
    </div>
  )
} 