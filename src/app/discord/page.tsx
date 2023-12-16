import { RedirectType, redirect } from "next/navigation";

export const metadata = {
    title: 'Notre discord',
    description: "Cliquez sur ce lien pour rejoindre le serveur Discord de Communauté Events",
    openGraph: {
      description: "Cliquez sur ce lien pour rejoindre le serveur Discord de Communauté Events",
      type: "website",
      images: "https://commu.events/public/og-image.png"
    },
    twitter: {
      card: "summary_large_image",
      title: "Notre discord",
      description: "Cliquez sur ce lien pour rejoindre le serveur Discord de Communauté Events",
      images: "https://commu.events/public/og-image.png"
    }
  }

export default function Redirect() {
    redirect("https://discord.gg/GfDZWD9EBF")
}