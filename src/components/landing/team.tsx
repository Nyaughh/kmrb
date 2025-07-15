"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  avatar: string
  isPlaceholder?: boolean
}

const teamMembers: TeamMember[] = [
  {
    id: "aarin",
    name: "Aarin",
    role: "Frontend Developer & UX/UI Designer",
    description:
      "Combines frontend development expertise with UX/UI design skills to create beautiful and functional user interfaces, while managing project delivery and client relationships.",
    avatar: "/images/team/nyaughh.jpg",
  },
  {
    id: "alen",
    name: "Alen",
    role: "Full Stack Developer",
    description:
      "Expert in cloud infrastructure, hardware integration, and full-stack development, specializing in building scalable systems and complex technical solutions.",
    avatar: "/images/team/alen.png",
  },
  {
    id: "pranay",
    name: "Pranay",
    role: "Coder, Marketer, and Sales",
    description:
      "Handles coding, marketing, sales, and other business-related tasks to drive the company's growth and success.",
    avatar: "/images/team/pranay.jpg",
  },
  {
    id: "john",
    name: "John",
    role: "Backend Architect",
    description:
      "Intuitive developer who specializes in backend architecture and optimization, bringing creative solutions to complex technical challenges while ensuring scalable and efficient systems.",
    avatar: "/images/team/john.jpg",
  },
  {
    id: "bilal",
    name: "Bilal",
    role: "Backend Developer",
    description:
      "Problem-solving expert who specializes in backend development, creating APIs and scalable server-side solutions while tackling complex technical challenges.",
    avatar: "/images/team/bilal.jpg",
  },
]

export const Team = () => {
  const [activeMemberId, setActiveMemberId] = useState<string | null>(null)

  const getPosition = (index: number) => {
    const angle = (index * 72 - 90) * (Math.PI / 180) 
    const radius = 180 
    const centerX = 250 
    const centerY = 200 

    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    }
  }

  const getMobilePosition = (index: number) => {
    const spacing = 100
    const startX = 50
    return {
      x: startX + (index * spacing),
      y: 100,
    }
  }

  return (
    <section id="team" className="w-full py-16 md:py-24 lg:py-32 bg-muted relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              The talented individuals behind our success.
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="relative w-[500px] h-[400px] hidden md:block">
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 500 400">
              <polygon
                points={teamMembers
                  .map((_, index) => {
                    const pos = getPosition(index)
                    return `${pos.x},${pos.y}`
                  })
                  .join(" ")}
                fill="none"
                stroke="rgb(148 163 184)"
                strokeWidth="1"
                strokeDasharray="5,5"
              />
            </svg>
            {teamMembers.map((member, index) => {
              const position = getPosition(index)
              const isHovered = activeMemberId === member.id

              return (
                <div
                  key={member.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
                  style={{
                    left: position.x,
                    top: position.y,
                    zIndex: isHovered ? 20 : 10,
                  }}
                  onMouseEnter={() => setActiveMemberId(member.id)}
                  onMouseLeave={() => setActiveMemberId(null)}
                >
                  <div
                    className={`
                    relative w-20 h-20 rounded-full border-4 transition-all duration-300 cursor-pointer
                    ${
                      isHovered
                        ? "border-amber-400 shadow-lg shadow-amber-400/50 scale-110"
                        : "border-slate-600 hover:border-slate-400"
                    }
                  `}
                  >
                    <Image
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div
                    className={`
                    absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 pointer-events-none
                    ${isHovered ? "opacity-100 translate-y-2" : "opacity-0 translate-y-0"}
                    ${position.y < 200 ? "top-full mt-4" : "bottom-full mb-4"}
                  `}
                  >
                    <div className="bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-xl w-64">
                      <div className="text-center">
                        <h3 className="text-white font-bold text-lg mb-1">{member.name}</h3>
                        <p className="text-amber-400 text-sm font-medium mb-2">{member.role}</p>
                      </div>
                      <div
                        className={`
                        absolute left-1/2 transform -translate-x-1/2 w-0 h-0
                        ${
                          position.y < 200
                            ? "top-0 -translate-y-full border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-slate-600"
                            : "bottom-0 translate-y-full border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-slate-600"
                        }
                      `}
                      />
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                    <p
                      className={`
                      text-sm font-medium text-center transition-colors duration-300 whitespace-nowrap
                      ${isHovered ? "text-amber-400" : "text-slate-400"}
                    `}
                    >
                      {member.name}
                    </p>
                  </div>
                </div>
              )
            })}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">Our Team</h2>
                <div className="w-16 h-0.5 bg-amber-400 mx-auto" />
              </div>
            </div>
          </div>

          <div className="w-full space-y-8 md:hidden">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="flex items-center gap-6"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-full border-4 border-slate-200 dark:border-slate-700 object-cover"
                  />
                </div>
                <div
                  className="flex-grow border-b border-slate-200 dark:border-slate-700 pb-2"
                >
                  <h3 className="font-bold text-xl text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-md text-amber-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 