import * as React from "react"
import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVercel as SiConvex, // Using Vercel icon for Convex as a placeholder
} from "react-icons/si"
import { FaKey } from "react-icons/fa"
import { Component } from "lucide-react"

interface TechIconProps {
  tech: string
  className?: string
}

export const TechIcon = ({ tech, className }: TechIconProps) => {
  const iconMap: { [key: string]: { icon: React.ReactElement; color: string } } = {
    typescript: { icon: <SiTypescript className={className} />, color: "#3178C6" },
    "node.js": { icon: <SiNodedotjs className={className} />, color: "#339933" },
    mongodb: { icon: <SiMongodb className={className} />, color: "#47A248" },
    convex: { icon: <SiConvex className={className} />, color: "#FFFFFF" },
    "better auth": { icon: <FaKey className={className} />, color: "#FFD700" },
    "next.js": { icon: <SiNextdotjs className={className} />, color: "#000000" },
    "tailwind css": { icon: <SiTailwindcss className={className} />, color: "#06B6D4" },
    shadcn: { icon: <Component className={className} />, color: "#FFFFFF" },
    prisma: { icon: <SiPrisma className={className} />, color: "#2D3748" },
    postgresql: { icon: <SiPostgresql className={className} />, color: "#4169E1" },
    redis: { icon: <SiRedis className={className} />, color: "#DC382D" },
  }

  const result = iconMap[tech.toLowerCase()]

  if (!result) return null

  const { icon, color } = result

  return <span style={{ color }}>{icon}</span>
} 