import Image from "next/image"
import { ClientWrapper } from "@/components/landing/client-wrapper"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ClientWrapper />
    </div>
  )
}

