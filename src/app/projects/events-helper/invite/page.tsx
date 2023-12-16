import { redirect } from "next/navigation";

export const metadata = {
    title: '🤖 Inviter Events Helper',
    description: "Cliquez sur ce lien pour inviter le bot discord Events Helper",
    openGraph: {
      description: "Cliquez sur ce lien pour inviter le bot discord Events Helper",
      type: "website",
      images: "https://commu.events/public/og-image.png"
    },
    twitter: {
      card: "summary_large_image",
      title: "🤖 Inviter Events Helper",
      description: "Cliquez sur ce lien pour inviter le bot discord Events Helper",
      images: "https://commu.events/public/og-image.png"
    }
  }
export default function InviteBot() {
    redirect("https://discord.com/api/oauth2/authorize?client_id=1171561146415861771&permissions=395136993280&scope=applications.commands+bot")
}