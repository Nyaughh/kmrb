import Image from "next/image"
import { ClientWrapper } from "@/components/landing/client-wrapper"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/background.jpg"
          alt="Background"
          fill
          priority
          className="object-cover opacity-5"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-transparent to-background/10" />
      </div>
      <ClientWrapper />
    </div>
  )
}

