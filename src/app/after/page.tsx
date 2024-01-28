import { Viewport } from "next";
import { RedirectType, redirect } from "next/navigation";

export const viewport: Viewport = {
    themeColor: "#AD6323"
}

export const metadata = {
    title: 'After Fuze Events',
    description: "Cliquez sur ce lien pour rejoindre le serveur Discord de After Fuze Events",
    openGraph: {
      description: "Cliquez sur ce lien pour rejoindre le serveur Discord de After Fuze Events",
      type: "website",
      images: "https://commu.events/after-og-image.png"
    },
    twitter: {
      card: "summary_large_image",
      title: "Discord After Fuze Events",
      description: "Cliquez sur ce lien pour rejoindre le serveur Discord de After Fuze Events",
      images: "https://commu.events/after-og-image.png"
    }
  }

export default function Redirect() {
    redirect("https://discord.gg/MGsqABRmfC")
}