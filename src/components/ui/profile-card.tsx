import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ProfileCardProps {
  name: string
  position: string
  bio: string
  imageUrl?: string
  initials?: string
  className?: string
}

export default function ProfileCard({
  name,
  position,
  bio,
  imageUrl,
  initials,
  className,
}: ProfileCardProps) {
  return (
    <Card className={cn("bg-neutral-800/70 backdrop-blur-sm border-neutral-700 overflow-hidden group hover:border-amber-400/30 transition-colors duration-300 h-full", className)}>
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex flex-col space-y-4 flex-grow">
          <div className="flex flex-row items-center gap-4">
            <Avatar className="h-16 w-16 sm:h-24 sm:w-24 border-2 border-amber-400/20 group-hover:border-amber-400/40 transition-colors duration-300">
              {imageUrl ? (
                <AvatarImage src={imageUrl} alt={name} className="object-cover" />
              ) : (
                <AvatarFallback className="bg-amber-400/10 text-amber-400 text-xl sm:text-2xl font-bold">
                  {initials}
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-100">{name}</h3>
              <p className="text-amber-400">{position}</p>
            </div>
          </div>
          <p className="text-sm text-neutral-300 flex-grow">{bio}</p>
        </div>
      </CardContent>
    </Card>
  )
} 