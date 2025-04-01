import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface ProfileCardProps {
  name: string
  position: string
  bio: string
  imageUrl?: string
  initials?: string
}

export default function ProfileCard({
  name,
  position,
  bio,
  imageUrl,
  initials,
}: ProfileCardProps) {
  return (
    <Card className="bg-neutral-800/70 backdrop-blur-sm border-neutral-700 overflow-hidden group hover:border-amber-400/30 transition-colors duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <Avatar className="h-24 w-24 border-2 border-amber-400/20 group-hover:border-amber-400/40 transition-colors duration-300">
            {imageUrl ? (
              <AvatarImage src={imageUrl} alt={name} className="object-cover" />
            ) : (
              <AvatarFallback className="bg-amber-400/10 text-amber-400 text-2xl font-bold">
                {initials}
              </AvatarFallback>
            )}
          </Avatar>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-neutral-100">{name}</h3>
            <p className="text-amber-400">{position}</p>
            <p className="text-sm text-neutral-300">{bio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 