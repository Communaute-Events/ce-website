import { Viewport } from "next"
import { redirect } from "next/navigation"

export const viewport: Viewport = {
  themeColor: "#439288"
}

export const metadata = {
    themeColor: "#439288",
    title: '🗃️ Nos projets',
    description: "Voici tous les projets sur lesquels nous travaillons actuellement, ou que nous avons fait.",
    openGraph: {
      description: "Voici tous les projets sur lesquels nous travaillons actuellement, ou que nous avons fait.",
      type: "website",
      images: "https://commu.events/og-image.png"
    },
    twitter: {
      card: "summary_large_image",
      title: "🗃️ Nos projets",
      description: "Voici tous les projets sur lesquels nous travaillons actuellement, ou que nous avons fait.",
      images: "https://commu.events/og-image.png"
    }
  }

export default function Redirect() {
    redirect("/#projects")
}