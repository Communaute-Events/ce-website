import { redirect } from "next/navigation"

export const metadata = {
    title: '🗃️ Nos projets',
    description: "Voici tous les projets sur lesquels nous travaillons actuellement, ou que nous avons fait.",
    openGraph: {
      description: "Voici tous les projets sur lesquels nous travaillons actuellement, ou que nous avons fait.",
      type: "website",
      images: "https://commu.events/public/og-image.png"
    },
    twitter: {
      card: "summary_large_image",
      title: "🗃️ Nos projets",
      description: "Voici tous les projets sur lesquels nous travaillons actuellement, ou que nous avons fait.",
      images: "https://commu.events/public/og-image.png"
    }
  }

export default function Redirect() {
    redirect("/#projects")
}